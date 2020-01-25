import {testValidURL} from './formHandler.js';

test('test valide http://', () => {
  expect(testValidURL('test')).toBe(false);
  expect(testValidURL('https://www.etsy.com')).toBe(true);
});
