import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form shoud render on page start', async () => {
    await page.goto('http://locolhost:9000');

    await page.waitFor('.card-form-widget');
  });

  /* test('Form input should add class valid, if card number is valid', async () => {
    await page.goto('http://locolhost:9000');

    await page.waitFor('.card-form-widget');

    const form = await page.$('.card-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('1234567890');
    await submit.click();

    await page.waitFor('.card-form-widget .input valid');
  }); */

  test('Open google', async () => {
    await page.get('https://www.google.com/');
    await page.waitFor('body');
  });

  afterEach(async () => {
    await browser.close();
  });
});
