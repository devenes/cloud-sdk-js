import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType, BoundActionRequestBuilder, BoundFunctionRequestBuilder } from '@sap-cloud-sdk/odata-v4';
/**
 * This class represents the entity "TestEntityLink" of service "TestService".
 */
export declare class TestEntityLink<T extends DeSerializers = DefaultDeSerializers> extends Entity implements TestEntityLinkType<T> {
    /**
     * Technical entity name for TestEntityLink.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the TestEntityLink entity
     */
    static _keys: string[];
    /**
     * Key Test Entity Link.
     */
    keyTestEntityLink: DeserializedType<T, 'Edm.Int32'>;
    /**
     * Key To Test Entity.
     */
    keyToTestEntity: DeserializedType<T, 'Edm.Int32'>;
    /**
     * String Property.
     * Maximum length: 111.
     * @nullable
     */
    stringProperty?: DeserializedType<T, 'Edm.String'> | null;
    boundFunctionWithoutArguments<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null>;
    boundFunctionWithoutArgumentsWithMultipleKeys<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null>;
    boundFunctionWithArgumentsWithMultipleKeys<DeSerializersT extends DeSerializers = DefaultDeSerializers>(param1: string, param2: string): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null>;
    getStringProperty<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundFunctionRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT, any, undefined | null>;
    boundActionWithoutArguments<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundActionRequestBuilder<DeSerializersT, any, undefined | null>;
    deleteEntity<DeSerializersT extends DeSerializers = DefaultDeSerializers>(): BoundActionRequestBuilder<DeSerializersT, any, undefined | null>;
}
export interface TestEntityLinkType<T extends DeSerializers = DefaultDeSerializers> {
    keyTestEntityLink: DeserializedType<T, 'Edm.Int32'>;
    keyToTestEntity: DeserializedType<T, 'Edm.Int32'>;
    stringProperty?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=TestEntityLink.d.ts.map