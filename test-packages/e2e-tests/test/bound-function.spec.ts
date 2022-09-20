import {
  getByKey
} from '@sap-cloud-sdk/test-services-e2e/v4/test-service/function-imports';
import { TestEntity } from '../my-gen/test-service';

const url = 'http://localhost:4004/';
const destination = { url };

describe('bound functions', () => {
  describe('integer parameter, returns entity', () => {
    const request = getByKey({
      param: 101
    });

    it('should execute request', async () => {
      // const entity: TestEntity = (await request.execute(destination));
      const entity = new TestEntity({});
      const functionResult = entity.boundFunctionWithoutArguments();
      expect(functionResult).toEqual('abc');
    });
  });
});
