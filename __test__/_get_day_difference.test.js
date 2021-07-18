import { helpers } from '../src/server/_helpers';

describe('Testing server functionality', () => {
  test('Testing the getDayDifference() function', async () => {
    expect(helpers.getDayDifference).toBeDefined();
  });
});
