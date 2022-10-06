/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType, entityDeserializer, BoundActionRequestBuilder, transformReturnValueForComplexType, defaultDeSerializers, BoundFunctionRequestBuilder, FunctionImportParameter, ActionImportParameter } from '@sap-cloud-sdk/odata-v4';
import { TestEntityLink, TestEntityLinkType } from './TestEntityLink';
import { camelCase } from '@sap-cloud-sdk/util';

/**
 * This class represents the entity "TestEntity" of service "TestService".
 */
export class TestEntity<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TestEntityType<T> {
  /**
   * Technical entity name for TestEntity.
   */
  static _entityName = 'TestEntity';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/test-service';
  /**
   * All key fields of the TestEntity entity
   */
  static _keys = ['KeyTestEntity'];
  /**
   * Key Test Entity.
   */
  keyTestEntity!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * String Property.
   * Maximum length: 111.
   * @nullable
   */
  stringProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guid Property.
   * @nullable
   */
  guidProperty?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Boolean Property.
   * @nullable
   */
  booleanProperty?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Int 64 Property.
   * @nullable
   */
  int64Property?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Double Property.
   * @nullable
   */
  doubleProperty?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Decimal Property.
   * @nullable
   */
  decimalProperty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Date Property.
   * @nullable
   */
  dateProperty?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Time Of Day Property.
   * @nullable
   */
  timeOfDayProperty?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Data Time Offset Data Time Property.
   * @nullable
   */
  dataTimeOffsetDataTimeProperty?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Data Time Offset Timestamp Property.
   * @nullable
   */
  dataTimeOffsetTimestampProperty?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-many navigation property to the {@link TestEntityLink} entity.
   */
  toMultiLink!: TestEntityLink<T>[];

  getStringProperty<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.getStringProperty', (data) => data, params, deSerializers
    ) as any;
  }

  boundFunctionWithoutArguments<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.boundFunctionWithoutArguments', (data) => data, params, deSerializers
    ) as any;
  }

  boundFunctionWithArguments<DeSerializersT extends DeSerializers = DefaultDeSerializers>(param1: string, param2: string): BoundFunctionRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
      param1: new FunctionImportParameter('param1', 'Edm.String', param1),
      param2: new FunctionImportParameter('param2', 'Edm.String', param2),
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.boundFunctionWithArguments', (data) => data, params, deSerializers
    ) as any;
  }

  boundFunctionWithoutArgumentsWithMultipleKeys<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.boundFunctionWithoutArgumentsWithMultipleKeys', (data) => data, params, deSerializers
    ) as any;
  }

  boundFunctionWithArgumentsWithMultipleKeys<DeSerializersT extends DeSerializers = DefaultDeSerializers>(param1: string, param2: string): BoundFunctionRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
      param1: new FunctionImportParameter('param1', 'Edm.String', param1),
      param2: new FunctionImportParameter('param2', 'Edm.String', param2),
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.boundFunctionWithArgumentsWithMultipleKeys', (data) => data, params, deSerializers
    ) as any;
  }

  deleteEntity<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundActionRequestBuilder<DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = TestEntity._keys.map(key => key + '=' + this[camelCase(key) as keyof TestEntity]).join(',');
    return new BoundActionRequestBuilder(
      '/odata/test-service', 'TestEntity', entityQueryString, 'BoundTestService', 'deleteEntity', (data) => data, params, deSerializers
    );
  }

  boundActionWithoutArguments<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundActionRequestBuilder<DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = TestEntity._keys.map(key => key + '=' + this[camelCase(key) as keyof TestEntity]).join(',');
    return new BoundActionRequestBuilder(
      '/odata/test-service', 'TestEntity', entityQueryString, 'BoundTestService', 'boundActionWithoutArguments', (data) => data, params, deSerializers
    );
  }
}

export interface TestEntityType<T extends DeSerializers = DefaultDeSerializers> {
  keyTestEntity: DeserializedType<T, 'Edm.Int32'>;
  stringProperty?: DeserializedType<T, 'Edm.String'> | null;
  guidProperty?: DeserializedType<T, 'Edm.Guid'> | null;
  booleanProperty?: DeserializedType<T, 'Edm.Boolean'> | null;
  int64Property?: DeserializedType<T, 'Edm.Int64'> | null;
  doubleProperty?: DeserializedType<T, 'Edm.Double'> | null;
  decimalProperty?: DeserializedType<T, 'Edm.Decimal'> | null;
  dateProperty?: DeserializedType<T, 'Edm.Date'> | null;
  timeOfDayProperty?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  dataTimeOffsetDataTimeProperty?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  dataTimeOffsetTimestampProperty?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toMultiLink: TestEntityLinkType<T>[];
}
