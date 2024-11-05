import { defineConfig } from "@playwright/test";
import {URL, USERNAME, PASSWORD } from '../test-constants/constants.js';

exports.loginClass= class loginClass{
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

async generateRandomStrings(){
    const randomUsername = Math.random().toString(36).substring(2, 7);
    console.log('Random Username:', randomUsername);

  const randomPassword = Math.random().toString(36).substring(2, 7);
console.log('Random Password:', randomPassword);

return{randomUsername,randomPassword};

}

async gotoSite() {
    await this.page.goto(URL);
}

async signUp(username, password){
await this.signUpLink.click();
await this.signUpUsername.click();
await this.signUpUsername.fill(username);
await this.signUpPassword.click();
await this.signUpPassword.fill(password);
await this.signUpButton.click();

}

async login(username, password){
await this.loginMenu.click();
await this.loginUserName.click();
await this.loginUserName.fill(username);
await this.loginPassword.click();
await this.loginPassword.fill(password);
await this.loginButton.click();

}

}