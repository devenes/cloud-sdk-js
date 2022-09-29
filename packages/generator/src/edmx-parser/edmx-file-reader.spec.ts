import { resolve } from 'path';
import { oDataServiceSpecs } from '../../../../test-resources/odata-service-specs';
import { readEdmxFile } from './edmx-file-reader';
import {
  parseActionImport,
  parseActions,
  parseEntitySetsV4,
  parseEntityType,
  parseEnumTypes,
  parseFunctionImportsV4,
  parseFunctions
} from './v4';
import { parseComplexTypesBase } from './common';

describe('edmx-file-reader', () => {
  it('does not fail for multiple schema entries in the EDMX file', () => {
    expect(() =>
      readEdmxFile(
        resolve(
          oDataServiceSpecs,
          'v2',
          'API_MULTIPLE_SCHEMAS_SRV',
          'API_MULTIPLE_SCHEMAS_SRV.edmx'
        )
      )
    ).not.toThrow();
  });

  it('v4: parses edmx file with bound action and function properly', () => {
    const metadataEdmx = readEdmxFile(
      resolve(
        oDataServiceSpecs,
        'v4',
        'API_BOUND_SRV',
        'API_BOUND_FUNCTIONS_ACTIONS_SRV.edmx'
      )
    );

    const parsedFunctions = parseFunctions(metadataEdmx.root);
    // expect(parsedFunctions.length).toBe(2); fixme

    const parsedBoundFunctions = parsedFunctions.filter(f =>
      f.Name.startsWith('bound')
    );
    expect(parsedBoundFunctions.length).toBe(4);
    expect(parsedBoundFunctions.every(f => f.IsBound)).toBeTruthy();

    const parsedActions = parseActions(metadataEdmx.root);
    expect(parsedActions.length).toBe(5);

    const parsedBoundActions = parsedActions.filter(f =>
      f.Name.startsWith('bound')
    );
    expect(parsedBoundActions.length).toBe(1);
    expect(parsedBoundActions.every(f => f.IsBound)).toBeTruthy();
  });

  it('v4: parses edmx file that contains multiple schemas to JSON and coerces properties to arrays', () => {
    const metadataEdmx = readEdmxFile(
      resolve(
        oDataServiceSpecs,
        'v4',
        'API_MULTIPLE_SCHEMAS_SRV',
        'API_MULTIPLE_SCHEMAS_SRV.edmx'
      )
    );

    expect(parseEntitySetsV4(metadataEdmx.root).length).toBe(4);
    expect(parseEntityType(metadataEdmx.root).length).toBe(4);
    expect(parseFunctionImportsV4(metadataEdmx.root).length).toBe(2);
    expect(parseFunctions(metadataEdmx.root).length).toBe(2);
    expect(parseActionImport(metadataEdmx.root).length).toBe(2);
    expect(parseActions(metadataEdmx.root).length).toBe(2);
    expect(parseComplexTypesBase(metadataEdmx.root).length).toBe(2);
    expect(parseEnumTypes(metadataEdmx.root).length).toBe(2);
  });
});
