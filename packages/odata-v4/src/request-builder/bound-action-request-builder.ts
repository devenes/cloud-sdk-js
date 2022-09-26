import {
  ActionFunctionImportRequestBuilderBase,
  FunctionImportParameters
} from '@sap-cloud-sdk/odata-common/internal';
import { DeSerializers } from '../de-serializers';
import {
  OdataBoundActionRequestConfig,
  ODataFunctionImportRequestConfig
} from '../request';
import { createODataUri } from '../uri-conversion';

export class BoundActionRequestBuilder<
  DeSerializersT extends DeSerializers,
  ParametersT,
  ReturnT
> extends ActionFunctionImportRequestBuilderBase<
  ReturnT,
  ODataFunctionImportRequestConfig<DeSerializersT, ParametersT>
> {
  constructor(
    defaultServicePath: string,
    functionImportName: string,
    readonly responseTransformer: (data: any) => ReturnT,
    parameters: FunctionImportParameters<ParametersT>,
    deSerializers: DeSerializersT
  ) {
    super(
      responseTransformer,
      new OdataBoundActionRequestConfig(
        'post',
        defaultServicePath,
        functionImportName,
        parameters,
        createODataUri(deSerializers)
      )
    );
  }
}
