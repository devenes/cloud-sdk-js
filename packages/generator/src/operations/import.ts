import { ImportDeclarationStructure, StructureKind } from 'ts-morph';
import voca from 'voca';
import {
  VdmOperationReturnType,
  VdmOperation,
  VdmReturnTypeCategory,
  VdmServiceMetadata
} from '../vdm-types';
import {
  odataImportDeclaration,
  propertyTypeImportNames,
  externalImportDeclarations,
  mergeImportDeclarations
} from '../imports';
import { isEntityNotDeserializable } from '../edmx-to-vdm/common';
import { responseTransformerFunctionName } from './response-transformer-function';

function complexTypeRelatedImports(returnTypes: VdmOperationReturnType[]) {
  return returnTypes.some(
    returnType =>
      returnType.returnTypeCategory === VdmReturnTypeCategory.COMPLEX_TYPE
  )
    ? ['entityDeserializer']
    : [];
}

function edmRelatedImports(returnTypes: VdmOperationReturnType[]) {
  return returnTypes.some(
    returnType =>
      returnType.returnTypeCategory === VdmReturnTypeCategory.EDM_TYPE
  )
    ? ['edmToTs']
    : [];
}

function responseTransformerImports(returnTypes: VdmOperationReturnType[]) {
  return returnTypes.map(returnType =>
    isEntityNotDeserializable(returnType)
      ? 'throwErrorWhenReturnTypeIsUnionType'
      : responseTransformerFunctionName(returnType)
  );
}

function returnTypeImports(
  returnTypes: VdmOperationReturnType[]
): ImportDeclarationStructure[] {
  return mergeImportDeclarations(
    returnTypes
      .filter(
        returnType =>
          returnType.returnTypeCategory !== VdmReturnTypeCategory.EDM_TYPE &&
          returnType.returnTypeCategory !== VdmReturnTypeCategory.VOID &&
          returnType.returnTypeCategory !== VdmReturnTypeCategory.NEVER
      )
      .reduce(
        (imports, returnType) => [...imports, ...returnTypeImport(returnType)],
        []
      )
  );
}

function returnTypeImport(
  returnType: VdmOperationReturnType
): ImportDeclarationStructure[] {
  const typeImports: ImportDeclarationStructure[] = [
    {
      kind: StructureKind.ImportDeclaration,
      namedImports: [returnType.returnType],
      moduleSpecifier: `./${returnType.returnType}`
    }
  ];
  if (returnType.returnTypeCategory === VdmReturnTypeCategory.ENTITY) {
    return [
      ...typeImports,
      {
        kind: StructureKind.ImportDeclaration,
        namedImports: [`${returnType.returnType}Api`],
        moduleSpecifier: `./${returnType.returnType}Api`
      }
    ];
  }
  return typeImports;
}

/**
 * @internal
 */
export function operationImportDeclarations(
  { oDataVersion, className }: VdmServiceMetadata,
  type: 'function' | 'action',
  operations: VdmOperation[] = []
): ImportDeclarationStructure[] {
  const parameters = operations.flatMap(({ parameters: params }) => params);
  const returnTypes = operations.map(({ returnType }) => returnType);

  return [
    ...externalImportDeclarations(parameters),
    odataImportDeclaration(
      [
        ...edmRelatedImports(returnTypes),
        ...complexTypeRelatedImports(returnTypes),
        ...responseTransformerImports(returnTypes),
        'DeSerializers',
        'DefaultDeSerializers',
        'defaultDeSerializers',
        ...propertyTypeImportNames(parameters),
        `${voca.capitalize(type)}ImportParameter`,
        `${voca.capitalize(type)}ImportRequestBuilder`
      ],
      oDataVersion
    ),
    {
      kind: StructureKind.ImportDeclaration,
      namedImports: [voca.decapitalize(className)],
      moduleSpecifier: './service'
    },
    ...returnTypeImports(returnTypes)
  ];
}
