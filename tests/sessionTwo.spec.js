const { test, expect } = require('@playwright/test');

test('Visit website' , async({ page }) => {
    //Automation code
    await page.goto('https://www.demoblaze.com/');
    await page.getByRole('link', { name: 'Cart' }).click();
    await page.waitForSelector('h2');
    await expect(page.getByRole('heading', { name: 'Total' })).toHaveText('Total');
   // await page.getByRole('button', {class: 'btn btn-success'}).click();
   // expect(await page.getByRole('button', { name: 'Place Order' })).toBeVisible();
    
  //  await page.getByRole('button', { name: 'ضربة حظ' }).click();
  // await page.locator('#APjFqb').click();
  // expect(await page.getByRole('button', { name: 'ضربة حظ' })).toBeHidden();
});