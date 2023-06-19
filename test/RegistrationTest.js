import { ClientFunction } from "testcafe";
import HomePage from "../pages/HomePage.js";
import RegisterPage from "../pages/RegisterPage.js";
import LoginPage from "../pages/LoginPage.js";
import CustomerPage from "../pages/CustomerPage.js";


const URL = 'https://demo.nopcommerce.com/';
const getPageURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = `sample${randomNumber}@asdqwe.com`

fixture('Registration Fixture')
    .page(URL);

test('Assert Home Page Test', async t => {
    await t
        .expect(getPageURL()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subtitleHeader.exists).ok();
});

test('Assert Registration and Login Test', async t =>{
    //Register
    await t
        .click(HomePage.registerLink)
        .expect(getPageURL()).contains('/register')
        .click(RegisterPage.genderOption.withText('Female'))
        .typeText(RegisterPage.firstNameInput, 'Betty')
        .typeText(RegisterPage.lastNameInput, 'Lafea');
    await RegisterPage.selectDay('12');
    await RegisterPage.selectMonth('January');
    await RegisterPage.selectYear('1995');
    await t
        .typeText(RegisterPage.emailInput, userEmail)
        .typeText(RegisterPage.passwordInput, 'Password@123')
        .typeText(RegisterPage.confirmPasswordInput, 'Password@123')
        .click(RegisterPage.registerButton)
        .expect(RegisterPage.successfulRegistrationConfirmation.exists).ok()
        //Login
        .click(HomePage.loginLink)
        .typeText(LoginPage.emailInput, userEmail)
        .typeText(LoginPage.passwordInput, 'Password@123')
        .click(LoginPage.loginButton)
        //Go to my account
        .click(HomePage.myAccountLink)
        //Go to orders
        .click(CustomerPage.ordersLink)
        .expect(CustomerPage.noOrdersLabel.exists).ok()
        .takeScreenshot();
})