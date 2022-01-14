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
      page.click('xpath=//*[@id="0"]/div[4]/div/div/div[2]/button')
    ]);

    await page.click('.absolute.top-20xem');

    await page.click('text=Shipping Address Manage Address อภิญญา แซ่หว่อง 293/45 หมู่บ้าน Perfect Park เฟส >> svg');
    await page.click('text=Shipping Kerry ฿50.00 >> svg');
    await page.click('text=Payment Your LINE POINTS Balance 0 Redeem point as a discount upon paying via cr >> :nth-match(svg, 5)');

    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://shop.line.me/@tillymilly/checkout/2021121816240500/bank-inform' }*/),
      page.click('button:has-text("Place Order")')
    ]);
  });
});