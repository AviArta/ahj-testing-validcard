import isValid from '../validator';

test('it should return true for valid inn', () => {
  const input = '7715964180';

  expect(isValid(input)).toBe(true);
});

test.each([
  ['true for valid organization Inn', '7715964180', true],
  ['false for invalid organization Inn', '7715964999456', false],
])(('it should be %s'), (_, input, expected) => {
  expect(isValid(input)).toBe(expected);
});
