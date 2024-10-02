import { test, expect } from '@playwright/test';

test('Verify User can sign up', async ({ page }) => {

    // SignUp flow
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('bilalq3-10p');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('12345');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();

  //Login flow to verify signup
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('bilalq3-10p');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();

  //Login Assertions
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#logout2')).toContainText('Log out');
});