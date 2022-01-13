import { test, expect } from '@playwright/test';

require('dotenv').config()

test('login', async ({ page, context }) => {
  await page.goto('https://shop.line.me/my/cart');

  await page.goto('https://access.line.me/oauth2/v2.1/login?loginState=MKTgsoC61e0IWudedZw05K&loginChannelId=1572442362&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fliff_sdk_version%3D2.8.0%26scope%3Dchat_message.write%2Bprofile%26response_type%3Dcode%26state%3DnFp8TYtmwmG7%26code_challenge_method%3DS256%26redirect_uri%3Dhttps%253A%252F%252Fshop.line.me%253Fliff.state%253D%25253Fpage%25253Dmy%25252Fcart%26type%3DL%26app_id%3D1572442362-jGxDDGRp%26client_id%3D1572442362%26code_challenge%3Dx1Kic234Cu4YfqIoDTjfUM2X3gTn4z58Vg598hJSjD8');
  await page.goto('https://access.line.me/oauth2/v2.1/login?loginState=MKTgsoC61e0IWudedZw05K&loginChannelId=1572442362&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fliff_sdk_version%3D2.8.0%26scope%3Dchat_message.write%2Bprofile%26response_type%3Dcode%26state%3DnFp8TYtmwmG7%26code_challenge_method%3DS256%26redirect_uri%3Dhttps%253A%252F%252Fshop.line.me%253Fliff.state%253D%25253Fpage%25253Dmy%25252Fcart%26type%3DL%26app_id%3D1572442362-jGxDDGRp%26client_id%3D1572442362%26code_challenge%3Dx1Kic234Cu4YfqIoDTjfUM2X3gTn4z58Vg598hJSjD8#/');

  await page.fill('input[name="tid"]', process.env.LINE_USERNAME);
  await page.press('input[name="tid"]', 'Tab');
  await page.fill('input[name="tpasswd"]', process.env.LINE_PASSWORD);

  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://access.line.me/oauth2/v2.1/noauto-login?__csrf=7v1HCqaHMO7KWkrXqtCjPL&pincode=9859&loginState=arl9iaakwWz8Ni6Q7nWF0q&errorMessage=AUTH_NOT_AUTH_DEVICE&errorCode=401&idProvider=1&verifier=NJJm4xmogpUL2Y3AJnyETWqV2rI3EaCf&state=&lang=en_US&loginChannelId=1572442362&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fliff_sdk_version%3D2.8.0%26scope%3Dchat_message.write%2Bprofile%26response_type%3Dcode%26state%3DWcntLdJFksqA%26code_challenge_method%3DS256%26redirect_uri%3Dhttps%253A%252F%252Fshop.line.me%253Fliff.state%253D%25253Fpage%25253Dmy%25252Fcart%26type%3DL%26app_id%3D1572442362-jGxDDGRp%26client_id%3D1572442362%26code_challenge%3DxlCCaW600us7n7B-BMYvOCpUchHti9Qx6G9kcoeiOKY#/' }*/),
    page.click('text=Log in')
  ]);

  await delay(15000);

  await context.storageState({ path: 'storage/auth.json' });
});

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
};