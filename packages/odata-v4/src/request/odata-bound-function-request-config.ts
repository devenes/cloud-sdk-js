import {
  ODataUri,
  FunctionImportParameters,
  ODataFunctionImportRequestConfig as ODataFunctionImportRequestConfigBase,
  RequestMethodType,
  FunctionImportParameter
} from '@sap-cloud-sdk/odata-common/internal';
import { DeSerializers } from '../de-serializers';

/**
 * Function import request configuration for an entity type.
 * @typeParam DeSerializersT - Type of the deserializer use on the request
 * @typeParam ParametersT - Type of the parameter to setup a request with
 */
export class OdataBoundFunctionRequestConfig<
  DeSerializersT extends DeSerializers,
  ParametersT
> extends ODataFunctionImportRequestConfigBase<DeSerializersT, ParametersT> {
  entitySetName: string;
  serviceClassName: string;
  entityQueryString: string;
  /**
   * Creates an instance of ODataFunctionImportRequestConfig.
   * @param method - HTTP method for the request.
   * @param defaultServicePath - Default path of the service.
   * @param entitySetName - The name of the entity set.
   * @param entityQueryString - The string to query the instance of the entity this function is bound to.
   * @param serviceClassName - The name of the service class.
   * @param functionImportName - The name of the function import.
   * @param parameters - Object containing the parameters with a value and additional meta information.
   * @param oDataUri - URI conversion functions.
   */
  constructor(
    method: RequestMethodType,
    defaultServicePath: string,
    entitySetName: string,
    entityQueryString: string,
    serviceClassName: string,
    functionImportName: string,
    parameters: FunctionImportParameters<ParametersT>,
    oDataUri: ODataUri<DeSerializersT>
  ) {
    super(method, defaultServicePath, functionImportName, parameters, oDataUri);
    this.entitySetName = entitySetName;
    this.serviceClassName = serviceClassName;
    this.entityQueryString = entityQueryString;
  }

  resourcePath(): string {
    return `${this.entitySetName}(${this.entityQueryString})/${this.serviceClassName}.${this.functionImportName}(${Object.values(this.parameters)
      .map(
        (parameter: FunctionImportParameter<ParametersT>) =>
          `${parameter.originalName}=${this.oDataUri.convertToUriFormat(
            parameter.value,
            parameter.edmType
          )}`
      )
      .join(',')})`;
  }

  queryParameters(): Record<string, any> {
    return {};
  }
}
