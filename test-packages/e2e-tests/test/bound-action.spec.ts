import { createTestEntityById } from '@sap-cloud-sdk/test-services-e2e/v4/test-service/action-imports';
import { TestEntity } from '@sap-cloud-sdk/test-services-e2e/v4/test-service/TestEntity';
import { destination } from './test-util';
import { deleteEntity } from './test-utils/test-entity-operations';

const entityKey = 999;

describe('bound action', () => {
  beforeEach(async () => deleteEntity(entityKey, destination));
  afterEach(async () => deleteEntity(entityKey, destination));

  it('should be able to call simple bound action', async () => {
    const entity: TestEntity = await createTestEntityById({ id: entityKey })
      .skipCsrfTokenFetching()
      .execute(destination);

    const actionResult = entity.boundActionWithoutArguments();
    expect(actionResult).toBe('abc');
  });
});
