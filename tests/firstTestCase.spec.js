const { test, expect } = require('@playwright/test');

test('Visit website' , async({ page }) => {
    //Automation code
    await page.goto('https://google.com');
  //  await page.locator('.RNmpXc').click();
    await page.getByRole('button', { name: 'ضربة حظ' }).click();
   // await page.locator('#APjFqb').click();
   // await page.locator('#APjFqb').fill('playwright');
   expect(await page.getByRole('button', { name: 'ضربة حظ' })).toBeHidden();
});