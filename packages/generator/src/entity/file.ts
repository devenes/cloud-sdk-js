import { SourceFileStructure, StructureKind } from 'ts-morph';
import { VdmEntity, VdmServiceMetadata } from '../vdm-types';
import { entityClass } from './class';
import { entityImportDeclarations, otherEntityImports } from './imports';
import { entityTypeInterface } from './interface';

/**
 * @internal
 */
export function entitySourceFile(
  entity: VdmEntity,
  service: VdmServiceMetadata
): SourceFileStructure {
  return {
    kind: StructureKind.SourceFile,
    statements: [
      ...entityImportDeclarations(entity, service.oDataVersion),
      ...otherEntityImports(entity, service),
      {
        // This import is required for accessing key properties
        kind: StructureKind.ImportDeclaration,
        moduleSpecifier: '@sap-cloud-sdk/util',
        namedImports: ['camelCase']
      },
      entityClass(entity, service),
      entityTypeInterface(entity, service)
    ]
  };
}
