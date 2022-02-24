import { test, expect } from '@playwright/test';

test.describe('scenarios#1', async () => {
  test.use({ storageState: './storage/auth.json' });

  test('checkout cart', async ({ page }) => {
    await page.goto('https://shop.line.me/@booboobabybrand');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/my/cart' }*/),
      page.click('[aria-label="cart-button"]')
    ]);

    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[3]/div[1]/button/div');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/@booboobabybrand/checkout/2021120615516257/' }*/),
      page.click('xpath=//*[@id="0"]/div[4]/div/div/div[2]/button', { timeout: 1000 })
    ]);

    await page.click('.absolute.top-20xem');

    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[4]/div[2]/div[1]');
    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[6]/div[2]/div[1]');
    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[8]/div[2]/div[1]/div[2]/div[1]');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/@booboobabybrand/checkout/2021120615516257/' }*/),
      page.click('button:has-text("Place Order")')
    ]);
  });
});