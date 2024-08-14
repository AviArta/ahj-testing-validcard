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

    page = browser.newPage();
  });

  test('', async () => {
    await page.goto('http://locolhost:9000');

    await page.waitFor('body');
  });

  afterEach(async () => {
    await browser.close();
  });
});
