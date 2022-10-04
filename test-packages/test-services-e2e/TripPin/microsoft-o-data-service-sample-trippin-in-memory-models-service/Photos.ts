/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType,
  entityDeserializer,
  BoundActionRequestBuilder,
  transformReturnValueForComplexType,
  defaultDeSerializers,
  BoundFunctionRequestBuilder,
  FunctionImportParameter,
  ActionImportParameter
} from '@sap-cloud-sdk/odata-v4';
import { camelCase } from '@sap-cloud-sdk/util';

/**
 * This class represents the entity "Photos" of service "Microsoft.OData.SampleService.Models.TripPin".
 */
export class Photos<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PhotosType<T>
{
  /**
   * Technical entity name for Photos.
   */
  static _entityName = 'Photos';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath =
    'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/';
  /**
   * All key fields of the Photos entity
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;

  GetFavoriteAirline<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(): BoundFunctionRequestBuilder<DeSerializersT, any, undefined | null> {
    const params = {};
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = Photos._keys
      .map(key => key + '=' + this[camelCase(key) as keyof Photos])
      .join(',');
    return new BoundFunctionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'Photos',
      entityQueryString,
      'MicrosoftODataServiceSampleTrippinInMemoryModelsService',
      'GetFavoriteAirline',
      data => data,
      params,
      deSerializers
    );
  }

  GetInvolvedPeople<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(): BoundFunctionRequestBuilder<DeSerializersT, any, undefined | null> {
    const params = {};
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = Photos._keys
      .map(key => key + '=' + this[camelCase(key) as keyof Photos])
      .join(',');
    return new BoundFunctionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'Photos',
      entityQueryString,
      'MicrosoftODataServiceSampleTrippinInMemoryModelsService',
      'GetInvolvedPeople',
      data => data,
      params,
      deSerializers
    );
  }

  GetFriendsTrips<DeSerializersT extends DeSerializers = DefaultDeSerializers>(
    userName: string
  ): BoundFunctionRequestBuilder<DeSerializersT, any, undefined | null> {
    const params = {
      userName: new FunctionImportParameter('userName', 'Edm.String', userName)
    };
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = Photos._keys
      .map(key => key + '=' + this[camelCase(key) as keyof Photos])
      .join(',');
    return new BoundFunctionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'Photos',
      entityQueryString,
      'MicrosoftODataServiceSampleTrippinInMemoryModelsService',
      'GetFriendsTrips',
      data => data,
      params,
      deSerializers
    );
  }

  ShareTrip<DeSerializersT extends DeSerializers = DefaultDeSerializers>(
    userName: string,
    tripId: number
  ): BoundActionRequestBuilder<DeSerializersT, any, undefined | null> {
    const params = {
      userName: new ActionImportParameter('userName', 'Edm.String', userName),
      tripId: new ActionImportParameter('tripId', 'Edm.Int32', tripId)
    };
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = Photos._keys
      .map(key => key + '=' + this[camelCase(key) as keyof Photos])
      .join(',');
    return new BoundActionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'Photos',
      entityQueryString,
      'MicrosoftODataServiceSampleTrippinInMemoryModelsService',
      'ShareTrip',
      data => data,
      params,
      deSerializers
    );
  }
}

export interface PhotosType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
