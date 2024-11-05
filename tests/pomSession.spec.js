import { test, expect } from '@playwright/test';
import {URL, USERNAME, PASSWORD } from '../test-constants/constants.js';
 // import loginClass from '../pages/loginPage.js';
const { loginClass } = require('../pages/loginPage.js');

test.describe('Page Object Modal', () => {


test('Verify User can sign up', async ({ page }) => {

const loginObject = new loginClass(page);

await loginObject.gotoSite();
const {randomUsername, randomPassword} = await loginObject.generateRandomStrings();
await loginObject.signUp(randomUsername,randomPassword);
await loginObject.login(randomUsername,randomPassword);

 // Login Assertions
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#logout2')).toContainText('Log out');
});
});