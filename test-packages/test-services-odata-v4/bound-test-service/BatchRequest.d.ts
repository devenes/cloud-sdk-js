import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  FunctionImportRequestBuilder,
  ActionImportRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import {
  TestEntity,
  TestEntityWithMultipleKeys,
  TestEntityLink,
  TestEntity50Prop,
  ReturnSapCloudSdkParameters,
  ConcatStringsParameters,
  ReturnIntParameters,
  ReturnCollectionParameters,
  GetByKeyParameters,
  GetAllParameters,
  CreateTestEntityByIdParameters,
  CreateTestEntityByIdReturnIdParameters
} from './index';
/**
 * Batch builder for operations supported on the Bound Test Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadBoundTestServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadBoundTestServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Bound Test Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteBoundTestServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteBoundTestServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultBoundTestServicePath = '/odata/test-service';
export declare type ReadBoundTestServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TestEntityWithMultipleKeys<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TestEntity50Prop<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TestEntityWithMultipleKeys<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TestEntity50Prop<DeSerializersT>, DeSerializersT>
  | FunctionImportRequestBuilder<
      DeSerializersT,
      ReturnSapCloudSdkParameters<DeSerializersT>,
      string | null
    >
  | FunctionImportRequestBuilder<
      DeSerializersT,
      ConcatStringsParameters<DeSerializersT>,
      string | null
    >
  | FunctionImportRequestBuilder<
      DeSerializersT,
      ReturnIntParameters<DeSerializersT>,
      number | null
    >
  | FunctionImportRequestBuilder<
      DeSerializersT,
      ReturnCollectionParameters<DeSerializersT>,
      number[]
    >
  | FunctionImportRequestBuilder<
      DeSerializersT,
      GetByKeyParameters<DeSerializersT>,
      TestEntity | null
    >
  | FunctionImportRequestBuilder<
      DeSerializersT,
      GetAllParameters<DeSerializersT>,
      TestEntity[]
    >;
export declare type WriteBoundTestServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TestEntity<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TestEntityWithMultipleKeys<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TestEntityWithMultipleKeys<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TestEntityWithMultipleKeys<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TestEntityLink<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TestEntity50Prop<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TestEntity50Prop<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TestEntity50Prop<DeSerializersT>, DeSerializersT>
  | ActionImportRequestBuilder<
      DeSerializersT,
      CreateTestEntityByIdParameters<DeSerializersT>,
      TestEntity | null
    >
  | ActionImportRequestBuilder<
      DeSerializersT,
      CreateTestEntityByIdReturnIdParameters<DeSerializersT>,
      number | null
    >;
//# sourceMappingURL=BatchRequest.d.ts.map
