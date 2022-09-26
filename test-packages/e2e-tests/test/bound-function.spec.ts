import { getByKey } from '@sap-cloud-sdk/test-services-e2e/v4/test-service/function-imports';

const url = 'http://localhost:4004/';
const destination = { url };

describe('bound functions', () => {
  describe('integer parameter, returns entity', () => {
    const request = getByKey({
      param: 101
    });

    it('should execute request', async () => {
      const entity = await request.execute(destination);
      // const functionResult = entity.boundFunctionWithoutArguments();
      // expect(functionResult).toEqual('abc');
    });
  });
});
