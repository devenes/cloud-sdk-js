'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TestEntity50Prop = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require('@sap-cloud-sdk/odata-v4');
const util_1 = require('@sap-cloud-sdk/util');
/**
 * This class represents the entity "TestEntity50Prop" of service "TestService".
 */
class TestEntity50Prop extends odata_v4_1.Entity {
  boundFunctionWithoutArguments() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    const entityQueryString = TestEntity50Prop._keys
      .map(key => key + '=' + this[(0, util_1.camelCase)(key)])
      .join(',');
    return new odata_v4_1.BoundFunctionRequestBuilder(
      '/odata/test-service',
      'TestEntity50Prop',
      entityQueryString,
      'TestService',
      'boundFunctionWithoutArguments',
      data => data,
      params,
      deSerializers
    );
  }
  getStringProperty() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    const entityQueryString = TestEntity50Prop._keys
      .map(key => key + '=' + this[(0, util_1.camelCase)(key)])
      .join(',');
    return new odata_v4_1.BoundFunctionRequestBuilder(
      '/odata/test-service',
      'TestEntity50Prop',
      entityQueryString,
      'TestService',
      'getStringProperty',
      data => data,
      params,
      deSerializers
    );
  }
  boundActionWithoutArguments() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    const entityQueryString = TestEntity50Prop._keys
      .map(key => key + '=' + this[(0, util_1.camelCase)(key)])
      .join(',');
    return new odata_v4_1.BoundActionRequestBuilder(
      '/odata/test-service',
      'TestEntity50Prop',
      entityQueryString,
      'TestService',
      'boundActionWithoutArguments',
      data => data,
      params,
      deSerializers
    );
  }
  deleteEntity() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    const entityQueryString = TestEntity50Prop._keys
      .map(key => key + '=' + this[(0, util_1.camelCase)(key)])
      .join(',');
    return new odata_v4_1.BoundActionRequestBuilder(
      '/odata/test-service',
      'TestEntity50Prop',
      entityQueryString,
      'TestService',
      'deleteEntity',
      data => data,
      params,
      deSerializers
    );
  }
}
exports.TestEntity50Prop = TestEntity50Prop;
/**
 * Technical entity name for TestEntity50Prop.
 */
TestEntity50Prop._entityName = 'TestEntity50Prop';
/**
 * Default url path for the according service.
 */
TestEntity50Prop._defaultServicePath = '/odata/test-service';
/**
 * All key fields of the TestEntity50Prop entity
 */
TestEntity50Prop._keys = ['KeyTestEntity50Prop'];
//# sourceMappingURL=TestEntity50Prop.js.map
