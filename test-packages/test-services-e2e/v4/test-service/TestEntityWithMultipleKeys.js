'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TestEntityWithMultipleKeys = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require('@sap-cloud-sdk/odata-v4');
const util_1 = require('@sap-cloud-sdk/util');
/**
 * This class represents the entity "TestEntityWithMultipleKeys" of service "TestService".
 */
class TestEntityWithMultipleKeys extends odata_v4_1.Entity {
  boundFunctionWithoutArguments() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    return new odata_v4_1.BoundFunctionRequestBuilder(
      this._entityApi,
      this,
      'TestService.undefined',
      data => data,
      params,
      deSerializers
    );
  }
  boundFunctionWithoutArgumentsWithMultipleKeys() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    return new odata_v4_1.BoundFunctionRequestBuilder(
      this._entityApi,
      this,
      'TestService.undefined',
      data => data,
      params,
      deSerializers
    );
  }
  boundFunctionWithArgumentsWithMultipleKeys(param1, param2) {
    const params = {
      param1: new odata_v4_1.FunctionImportParameter(
        'param1',
        'Edm.String',
        param1
      ),
      param2: new odata_v4_1.FunctionImportParameter(
        'param2',
        'Edm.String',
        param2
      )
    };
    const deSerializers = odata_v4_1.defaultDeSerializers;
    return new odata_v4_1.BoundFunctionRequestBuilder(
      this._entityApi,
      this,
      'TestService.undefined',
      data => data,
      params,
      deSerializers
    );
  }
  getStringProperty() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    return new odata_v4_1.BoundFunctionRequestBuilder(
      this._entityApi,
      this,
      'TestService.undefined',
      data => data,
      params,
      deSerializers
    );
  }
  boundActionWithoutArguments() {
    const params = {};
    const deSerializers = odata_v4_1.defaultDeSerializers;
    const entityQueryString = TestEntityWithMultipleKeys._keys
      .map(key => key + '=' + this[(0, util_1.camelCase)(key)])
      .join(',');
    return new odata_v4_1.BoundActionRequestBuilder(
      '/odata/test-service',
      'TestEntityWithMultipleKeys',
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
    const entityQueryString = TestEntityWithMultipleKeys._keys
      .map(key => key + '=' + this[(0, util_1.camelCase)(key)])
      .join(',');
    return new odata_v4_1.BoundActionRequestBuilder(
      '/odata/test-service',
      'TestEntityWithMultipleKeys',
      entityQueryString,
      'TestService',
      'deleteEntity',
      data => data,
      params,
      deSerializers
    );
  }
}
exports.TestEntityWithMultipleKeys = TestEntityWithMultipleKeys;
/**
 * Technical entity name for TestEntityWithMultipleKeys.
 */
TestEntityWithMultipleKeys._entityName = 'TestEntityWithMultipleKeys';
/**
 * Default url path for the according service.
 */
TestEntityWithMultipleKeys._defaultServicePath = '/odata/test-service';
/**
 * All key fields of the TestEntityWithMultipleKeys entity
 */
TestEntityWithMultipleKeys._keys = [
  'KeyTestEntityWithMultipleKeys',
  'StringPropertyWithMultipleKeys',
  'BooleanPropertyWithMultipleKeys'
];
//# sourceMappingURL=TestEntityWithMultipleKeys.js.map
