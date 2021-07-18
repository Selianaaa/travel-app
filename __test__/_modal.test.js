import { openModal, closeModal } from '../src/client/js/helpers';

describe('Testing the modal functionality', () => {
  test('Testing the openModal() function', () => {
    expect(openModal).toBeDefined();
  });

  test('Testing the closeModal() function', () => {
    expect(closeModal).toBeDefined();
  });
});
