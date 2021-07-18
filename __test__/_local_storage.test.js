import { LSActions } from '../src/client/js/helpers';

describe('Testing the local storage functionality', () => {
  test('Testing the saveByKey() function', () => {
    expect(LSActions.saveByKey).toBeDefined();
  });

  test('Testing the getByKey() function', () => {
    expect(LSActions.getByKey).toBeDefined();
  });
});
