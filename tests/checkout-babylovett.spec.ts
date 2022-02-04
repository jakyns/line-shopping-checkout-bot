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
      page.click('xpath=//*[@id="0"]/div[4]/div/div/div[2]/button', { timeout: 2000 })
    ]);

    await page.click('.absolute.top-20xem');

    await page.click('text=Shipping Address Manage Address อภิญญา แซ่หว่อง 293/45 หมู่บ้าน Perfect Park เฟส >> svg');
    await page.click('text=Kerry ฿40.00 Thailand Post-EMS กทม. 1-2 วันทำการ, ตจว. 2-3 วันทำการ ฿40.00 >> svg');
    await page.click('text=Pay with Rabbit LINE Pay Check out and earn points Pay with a credit/debit card  >> svg');


    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/@babylovett/checkout/2021113015181263/bank-inform' }*/),
      page.click('button:has-text("Place Order")')
    ]);
  });
});