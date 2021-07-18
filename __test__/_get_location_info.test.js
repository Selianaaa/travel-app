import axios from 'axios';

import { serverUrl } from '../src/client/constants';

describe('Testing server functionality', () => {
  test('should return 200 on get request', async () => {
    const { status, data } = await axios(`${serverUrl}/test`);

    expect(status).toEqual(200);
    expect(data).toHaveProperty('status', 'OK');
  });
});
