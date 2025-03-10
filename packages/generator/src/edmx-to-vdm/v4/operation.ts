import { createLogger } from '@sap-cloud-sdk/util';
import { ServiceNameFormatter } from '../../service-name-formatter';
import { transformOperationBase } from '../common/operation';
import { parseOperationReturnType } from '../common/operation-return-type';
import { getSwaggerDefinitionForOperation } from '../../swagger-parser/swagger-parser';
import {
  EdmxOperation,
  EdmxOperationImport
} from '../../edmx-parser/v4/edm-types';
import { parseOperationImports, parseOperations } from '../../edmx-parser';
import { ServiceMetadata } from '../../edmx-parser/edmx-file-reader';
import { VdmComplexType, VdmEntity, VdmOperation } from '../../vdm-types';
import { hasUnsupportedParameterTypes } from '../edmx-to-vdm-util';
import { findOperationByImportName as findOperationByImportName } from './operation-util';

const logger = createLogger({
  package: 'generator',
  messageContext: 'operation'
});

const extractResponse = (response: string) => `${response}.value`;

interface JoinedOperationData {
  operationImport: EdmxOperationImport;
  operation: EdmxOperation;
}

function joinOperationData(
  operationImports: EdmxOperationImport[],
  operations: EdmxOperation[]
): JoinedOperationData[] {
  const operationImportsWithoutOperations: EdmxOperationImport[] = [];
  const joinedOperationData: JoinedOperationData[] = [];
  operationImports.forEach(operationImport => {
    const operation = findOperationByImportName(
      operations,
      operationImport.operationName
    );

    if (operation) {
      joinedOperationData.push({
        operationImport,
        operation
      });
    } else {
      operationImportsWithoutOperations.push(operationImport);
    }
  });

  if (operationImportsWithoutOperations.length) {
    const operationType = operationImportsWithoutOperations[0].operationType;

    logger.warn(
      `Could not find ${operationType}s referenced by the following ${operationType} imports. Skipping code generation: ${operationImportsWithoutOperations
        .map(
          operationImport =>
            `${operationImport.Name} => ${operationImport.operationName}`
        )
        .join(', \n')}`
    );
  }
  return joinedOperationData;
}

/**
 * @internal
 */
export function generateOperations(
  serviceMetadata: ServiceMetadata,
  serviceName: string,
  operationType: 'function' | 'action',
  entities: VdmEntity[],
  complexTypes: VdmComplexType[],
  formatter: ServiceNameFormatter
): VdmOperation[] {
  const operations = parseOperations(serviceMetadata.edmx.root, operationType);
  const operationImports = parseOperationImports(
    serviceMetadata.edmx.root,
    operationType
  );
  const joinedOperationData = joinOperationData(operationImports, operations);

  return (
    joinedOperationData
      // TODO 1571 remove when supporting entity type as parameter
      .filter(({ operation }) => !hasUnsupportedParameterTypes(operation))
      .map(({ operationImport, operation }) => {
        const httpMethod = operationType === 'function' ? 'get' : 'post';
        const swaggerDefinition = getSwaggerDefinitionForOperation(
          operationImport.Name,
          httpMethod,
          serviceMetadata.swagger
        );

        return {
          ...transformOperationBase(
            operationImport,
            operation.Parameter,
            'Function' in operationImport ? 'function' : 'action',
            swaggerDefinition,
            formatter
          ),
          httpMethod,
          returnType: parseOperationReturnType(
            operation.ReturnType,
            entities,
            complexTypes,
            extractResponse,
            serviceName
          )
        };
      })
  );
}
