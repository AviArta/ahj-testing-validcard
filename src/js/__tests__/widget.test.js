/**
 * @jest-environment jsdom
 */

import { CardFormWidget } from '../widget';

test('widget should render', async () => {
  document.body.innerHTML = '<div class="container"></div>';
  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDom();
  expect(container.innerHTML).toEqual(CardFormWidget.markup);
});

test('widget should add class valid', async () => {
  document.body.innerHTML = '<div class="container"></div>';
  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDom();
  widget.input.value = '1234567890';
  widget.submit.click();

  expect(widget.input.classList.contains('valid')).toEqual(true);
});
