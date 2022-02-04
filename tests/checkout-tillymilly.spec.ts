import { test, expect } from '@playwright/test';

test.describe('scenarios#1', async () => {
  test.use({ storageState: './storage/auth.json' });

  test('checkout cart', async ({ page }) => {
    await page.goto('https://shop.line.me/@tillymilly');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/my/cart' }*/),
      page.click('[aria-label="cart-button"]')
    ]);

    await page.click('xpath=//*[@id="app-store-front"]/div/div[2]/div[3]/div[1]/button/div');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/@tillymilly/checkout/2021121816240500/' }*/),
      page.click('xpath=//*[@id="0"]/div[4]/div/div/div[2]/button', { timeout: 2000 })
    ]);

    await page.click('.absolute.top-20xem');

    await page.click('label:has-text("อภิญญา แซ่หว่อง 293/45 หมู่บ้าน Perfect Park เฟส 4 ซ.ร่มเกล้า 6/1 แขวง/เขต มีนบุ")');
    await page.click('text=Shipping Kerry ฿50.00 >> svg');
    await page.click('text=Pay with Rabbit LINE Pay Pay with a credit/debit card Powered by >> svg');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/@tillymilly/checkout/2021121816240500/bank-inform' }*/),
      page.click('button:has-text("Place Order")')
    ]);
  });
});