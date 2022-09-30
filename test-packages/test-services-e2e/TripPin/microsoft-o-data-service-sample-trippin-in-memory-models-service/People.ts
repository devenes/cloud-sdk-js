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
import { Location } from './Location';
import { PersonGender } from './PersonGender';
import { Photos, PhotosType } from './Photos';
import { camelCase } from '@sap-cloud-sdk/util';

/**
 * This class represents the entity "People" of service "Microsoft.OData.SampleService.Models.TripPin".
 */
export class People<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PeopleType<T>
{
  /**
   * Technical entity name for People.
   */
  static _entityName = 'People';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath =
    'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/';
  /**
   * All key fields of the People entity
   */
  static _keys = ['UserName'];
  /**
   * User Name.
   */
  userName!: DeserializedType<T, 'Edm.String'>;
  /**
   * First Name.
   */
  firstName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Name.
   */
  lastName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Emails.
   * @nullable
   */
  emails?: DeserializedType<T, 'Edm.String'>[] | null;
  /**
   * Address Info.
   * @nullable
   */
  addressInfo?: Location<T>[] | null;
  /**
   * Gender.
   * @nullable
   */
  gender?: PersonGender | null;
  /**
   * Concurrency.
   */
  concurrency!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-many navigation property to the {@link People} entity.
   */
  friends!: People<T>[];
  /**
   * One-to-one navigation property to the {@link Photos} entity.
   */
  photo?: Photos<T> | null;

  GetFavoriteAirline<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(): BoundFunctionRequestBuilder<DeSerializersT, any, string | null> {
    const params = {};
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = People._keys
      .map(key => key + '=' + this[camelCase(key) as keyof People])
      .join(',');
    return new BoundFunctionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'People',
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
  >(): BoundFunctionRequestBuilder<DeSerializersT, any, string | null> {
    const params = {};
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = People._keys
      .map(key => key + '=' + this[camelCase(key) as keyof People])
      .join(',');
    return new BoundFunctionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'People',
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
  ): BoundFunctionRequestBuilder<DeSerializersT, any, string | null> {
    const params = {
      userName: new FunctionImportParameter('userName', 'Edm.String', userName)
    };
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = People._keys
      .map(key => key + '=' + this[camelCase(key) as keyof People])
      .join(',');
    return new BoundFunctionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'People',
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
  ): BoundActionRequestBuilder<DeSerializersT, any, string | null> {
    const params = {
      userName: new ActionImportParameter('userName', 'Edm.String', userName),
      tripId: new ActionImportParameter('tripId', 'Edm.Int32', tripId)
    };
    const deSerializers = defaultDeSerializers as any;
    const entityQueryString = People._keys
      .map(key => key + '=' + this[camelCase(key) as keyof People])
      .join(',');
    return new BoundActionRequestBuilder(
      'V4/(S(duh2c3dgb1c5lzc0bqwgyekc))/TripPinServiceRW/',
      'People',
      entityQueryString,
      'MicrosoftODataServiceSampleTrippinInMemoryModelsService',
      'ShareTrip',
      data => data,
      params,
      deSerializers
    );
  }
}

export interface PeopleType<T extends DeSerializers = DefaultDeSerializers> {
  userName: DeserializedType<T, 'Edm.String'>;
  firstName: DeserializedType<T, 'Edm.String'>;
  lastName: DeserializedType<T, 'Edm.String'>;
  emails?: DeserializedType<T, 'Edm.String'>[] | null;
  addressInfo?: Location<T>[] | null;
  gender?: PersonGender | null;
  concurrency: DeserializedType<T, 'Edm.Int64'>;
  friends: PeopleType<T>[];
  photo?: PhotosType<T> | null;
}
