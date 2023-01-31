import { test, expect } from '@playwright/test';

test.describe('scenarios#1', async () => {
  test.use({ storageState: './storage/auth.json' });

  test('checkout cart', async ({ page }) => {
    await page.goto('https://shop.line.me/my/cart');
    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[3]/div[1]/button/div')

    await Promise.all([
      page.waitForNavigation(/*{ xpath: '//*[@id="app-store-front"]/div/div[2]/div[3]/div[1]/button/div' }*/),
      page.click('xpath=//*[@id="0"]/div[3]/div/div[2]/button', { timeout: 1000 })
    ]);

    await new Promise(res => setTimeout(res, 2000));

    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[4]');
    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[5]/div[2]/div[1]/div[2]/div[1]/label/div[2]/div/div');

    await Promise.all([
      page.waitForNavigation(/*{ xpath: '//*[@id="app-store-front"]/div/div[2]/div[17]/button' }*/),
      page.click('button:has-text("Place Order")')
    ]);
  });
});
