export default const cardsTypes = [
  {
    type: 'visa',
    patterns: [4],
  },
  {
    type: 'mastercard',
    patterns: [[51, 55], [222100, 272099]],
  },
  {
    type: 'american-express',
    patterns: [34, 37],
  },
  {
    type: 'diners-club',
    patterns: [[300, 305], 36, 38, 39],
  },
  {
    type: 'discover',
    patterns: [6011, [644, 649], [622126, 622925], 65],
  },
  {
    type: 'jcb',
    patterns: [2131, 1800, [3528, 3589]],
  },
  {
    type: 'maestro',
    patterns: [
      5018,
      5020,
      5038,
      5893,
      6304,
      6759,
      6761,
      6762,
      6763,
    ],
  },
  {
    type: 'mir',
    patterns: [[2200, 2204]],
  },
];
