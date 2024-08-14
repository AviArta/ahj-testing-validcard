import isValid from '../validator';

test('it should return true for valid card number', () => {
  const input = '7715964180';

  expect(isValid(input)).toBe(true);
});

test.each([
  ['true for valid card number', '7715964180', true],
  ['false for invalid card number', '7715964999456', false],
])(('it should be %s'), (_, input, expected) => {
  expect(isValid(input)).toBe(expected);
});
