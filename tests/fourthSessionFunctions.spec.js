import { test, expect } from '@playwright/test';
import {URL, USERNAME, PASSWORD } from '../test-constants/constants.js';

test('Verify User can sign up', async ({ page }) => {

    // SignUp flow
  await page.goto(URL);

//sign up function
await signup(page);
//login function

await login(page);

  //Login Assertions
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#logout2')).toContainText('Log out');
});

async function signup(page){
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill(USERNAME);
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill(PASSWORD);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
}
async function login(page){
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill(USERNAME);
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill(PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();
}