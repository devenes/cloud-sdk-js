import {
  EdmxEntitySetBase,
  EdmxEntityTypeBase,
  JoinedEntityMetadata
} from '../../edmx-parser/common/edmx-types';
import { boundFunctions } from './entity';

describe('entity parser', () => {
  const testEntitySet: EdmxEntitySetBase = {
    EntityType: '',
    'sap:content-version': '',
    'sap:creatable': '',
    'sap:deletable': '',
    'sap:pageable': '',
    'sap:updatable': '',
    Name: '',
    Namespace: ''
  };

  const testEntityType: EdmxEntityTypeBase<any> = {
    Key: {
      PropertyRef: [
        {
          Name: 'irrelevant'
        }
      ]
    },
    Name: '',
    Namespace: '',
    Property: [],
    'sap:content-version': '',
    NavigationProperty: [],
    BoundFunction: [
      {
        Name: 'FunctionWithPrimitiveTypes',
        Parameter: [
          {
            Name: 'the entity'
          },
          {
            Name: 'Bar',
            Type: 'Edm.String'
          }
        ],
        ReturnType: {
          Type: 'string'
        }
      },
      {
        Name: 'FunctionWithComplexTypes',
        Parameter: [
          {
            Name: 'the entity'
          },
          {
            Name: 'Bar',
            Type: 'TestService.TestEntity'
          }
        ],
        ReturnType: {
          Type: 'TestService.TestEntity'
        }
      }
    ],
    BoundAction: []
  };
  const testEntity: JoinedEntityMetadata<EdmxEntitySetBase, any> = {
    entitySet: testEntitySet,
    entityType: testEntityType
  };

  test('parse boundFunctions with primitive types', async () => {
    const vdmFunctions = boundFunctions(testEntity);
    expect(vdmFunctions[0].parameters[0].jsType).toEqual('string');
    expect(vdmFunctions[0].returnType).toEqual('string');
    expect(vdmFunctions[1].parameters[0].jsType).toEqual('TestEntity');
    expect(vdmFunctions[1].returnType).toEqual('TestEntity');
  });
});
