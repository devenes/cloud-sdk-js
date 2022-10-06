/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType, entityDeserializer, BoundActionRequestBuilder, transformReturnValueForComplexType, defaultDeSerializers, BoundFunctionRequestBuilder, FunctionImportParameter, ActionImportParameter } from '@sap-cloud-sdk/odata-v4';
import { camelCase } from '@sap-cloud-sdk/util';

/**
 * This class represents the entity "TestEntityLink" of service "TestService".
 */
export class TestEntityLink<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TestEntityLinkType<T> {
  /**
   * Technical entity name for TestEntityLink.
   */
  static _entityName = 'TestEntityLink';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/test-service';
  /**
   * All key fields of the TestEntityLink entity
   */
  static _keys = ['KeyTestEntityLink', 'KeyToTestEntity'];
  /**
   * Key Test Entity Link.
   */
  keyTestEntityLink!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Key To Test Entity.
   */
  keyToTestEntity!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * String Property.
   * Maximum length: 111.
   * @nullable
   */
  stringProperty?: DeserializedType<T, 'Edm.String'> | null;

  getStringProperty<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.getStringProperty', (data) => data, params, deSerializers
    ) as any;
  }

  boundFunctionWithoutArguments<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.boundFunctionWithoutArguments', (data) => data, params, deSerializers
    ) as any;
  }

  boundFunctionWithArguments<DeSerializersT extends DeSerializers = DefaultDeSerializers>(param1: string, param2: string): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
      param1: new FunctionImportParameter('param1', 'Edm.String', param1),
      param2: new FunctionImportParameter('param2', 'Edm.String', param2),
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.boundFunctionWithArguments', (data) => data, params, deSerializers
    ) as any;
  }

  boundFunctionWithoutArgumentsWithMultipleKeys<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    return new BoundFunctionRequestBuilder(
      this._entityApi as any, this as any, 'TestService.boundFunctionWithoutArgumentsWithMultipleKeys', (data) => data, params, deSerializers
    ) as any;
  }

  boundFunctionWithArgumentsWithMultipleKeys<DeSerializersT extends DeSerializers = DefaultDeSerializers>(param1: string, param2: string): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null> {
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
    const entityQueryString = TestEntityLink._keys.map(key => key + '=' + this[camelCase(key) as keyof TestEntityLink]).join(',');
    return new BoundActionRequestBuilder(
      '/odata/test-service', 'TestEntityLink', entityQueryString, 'BoundTestService', 'deleteEntity', (data) => data, params, deSerializers
    );
  }

  boundActionWithoutArguments<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundActionRequestBuilder<DeSerializersT, any, undefined | null> {
    const params = {
    };
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = TestEntityLink._keys.map(key => key + '=' + this[camelCase(key) as keyof TestEntityLink]).join(',');
    return new BoundActionRequestBuilder(
      '/odata/test-service', 'TestEntityLink', entityQueryString, 'BoundTestService', 'boundActionWithoutArguments', (data) => data, params, deSerializers
    );
  }
}

export interface TestEntityLinkType<T extends DeSerializers = DefaultDeSerializers> {
  keyTestEntityLink: DeserializedType<T, 'Edm.Int32'>;
  keyToTestEntity: DeserializedType<T, 'Edm.Int32'>;
  stringProperty?: DeserializedType<T, 'Edm.String'> | null;
}
