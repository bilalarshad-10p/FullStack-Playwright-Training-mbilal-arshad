import { test, expect } from '@playwright/test';
import {URL, USERNAME, PASSWORD } from '../test-constants/constants.js';
 // import loginClass from '../pages/loginPage.js';
const { navigationClass } = require('../pages/navigation.js');

test.describe('Page Object Modal', () => {


test('Verify all nav menu are clickable', async ({ page }) => {

    //Object of navigationClass
const navObj = new navigationClass(page);

//Visit website function
await navObj.gotoSite();

//Click on Nav menu one by one
await navObj.clickOnNavMenu('Home');
await navObj.clickOnNavMenu('Contact');
// await navObj.clickOnButton_ByRole('Close');
await page.getByLabel('New message').getByText('Close').click();
await navObj.clickOnNavMenu('About us');
await page.locator('#videoModal').getByText('Close', {exact: true}).click();
await navObj.clickOnNavMenu('Cart');
await navObj.clickOnNavMenu('Log in');
await page.locator('#logInModal').getByText('Close').click();
await navObj.clickOnNavMenu('Sign up');
await page.locator('Sign up').getByText('Close').click();

});
});