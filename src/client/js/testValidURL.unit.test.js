import {testValidURL, testServer} from './formHandler.js';

test('test valide http://', () => {
  expect(testValidURL('test')).toBe(false);
  expect(testValidURL('https://www.etsy.com')).toBe(true);
  expect(testValidURL('http://www.etsy.com')).toBe(true);
});

test('test server', () => {
  expect(testServer()).toBe('test json response');
});
