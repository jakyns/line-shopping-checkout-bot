import { test, expect } from '@playwright/test';

test.describe('scenarios#1', async () => {
  test.use({ storageState: './storage/auth.json' });

  test('checkout cart', async ({ page }) => {
    await page.goto('https://shop.line.me/@babylovett');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/my/cart' }*/),
      page.click('[aria-label="cart-button"]')
    ]);

    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[3]/div[1]/button/div');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/@babylovett/checkout/2021113015181263/' }*/),
      page.click('text=Buy Now (1)')
    ]);

    await page.click('.absolute.top-20xem');

    await page.click('text=อภิญญา แซ่หว่อง');
    await page.click('text=Kerry ฿40.00 >> :nth-match(div, 2)');
    await page.click('.flex.ml-11xem.mt-5xem .icon');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/@babylovett/checkout/2021113015181263/bank-inform' }*/),
      page.click('button:has-text("Place Order")')
    ]);
  });
});