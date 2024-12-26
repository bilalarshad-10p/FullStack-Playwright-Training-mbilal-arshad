import { defineConfig } from "@playwright/test";
import {URL, USERNAME, PASSWORD } from '../test-constants/constants.js';

exports.navigationClass= class naigationClass{
 /**
  * @param {import{'@playwright/test'}.page} page
  */

 constructor(page){
    this.page = page;
    
//Signup Locators

this.signUpLink = page.getByRole('link', { name: 'Sign up' });
this.signUpUsername = page.getByLabel('Username:');
this.signUpPassword = page.getByLabel('Password:');
this.signUpButton = page.getByRole('button', { name: 'Sign up' });

//Login Locators

this.loginMenu = page.getByRole('link', { name: 'Log in' });
this.loginUserName = page.locator('#loginusername');
this.loginPassword = page.locator('#loginpassword');
this.loginButton = page.getByRole('button', { name: 'Log in' });

}

async gotoSite() {
    await this.page.goto(URL);
}

async clickOnNavMenu(linkText){
    const link = this.page.getByRole('link', { name: `${linkText}`});
    await link.click();
}

async clickOnButton_ByRole(buttonName){
    const link = this.page.getByRole('button', { name: `${buttonName}`});
    await link.click();
}


}