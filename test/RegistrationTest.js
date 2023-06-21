import { ClientFunction } from "testcafe";
import HomePage from "../pages/HomePage.js";
import RegisterPage from "../pages/RegisterPage.js";
import LoginPage from "../pages/LoginPage.js";
import CustomerPage from "../pages/CustomerPage.js";
import RegistrationData from "../data/RegistrationData.json";
import Eyes from '@applitools/eyes-testcafe';
const eyes = new Eyes();


const URL = 'https://demo.nopcommerce.com/';
const getPageURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);

fixture('Registration Fixture')
    .meta({ "type": "smoke" })
    .afterEach(async () => await eyes.close())
    .after(async () => await eyes.waitForResults(true))
    .page(URL); 

test('Assert Home Page Test', async t => {
    //Applitools Eyesawait 
    await eyes.open({
        appName: 'Demo Nop Commerce Website',
        testName: 'Assert Home Page Test',
        t
    });
    await t
        .expect(getPageURL()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subtitleHeader.exists).ok();
    await eyes.checkWindow('Home Page');
});

RegistrationData.forEach(data => {
    var userEmail = `${randomNumber}${data.email}`
    test('Assert Registration and Login Test', async t => {
        //Applitools Eyesawait 
        await eyes.open({
            appName: 'Demo Nop Commerce Website',
            testName: 'Assert Registration and Login Test',
            t
        });
        await eyes.checkWindow('Home Page');
        //Register
        await t
            .click(HomePage.registerLink)
            .expect(getPageURL()).contains('/register');
        await eyes.checkWindow('Registration Page');
        await t
            .click(RegisterPage.genderOption.withText(data.gender))
            .typeText(RegisterPage.firstNameInput, data.firstname)
            .typeText(RegisterPage.lastNameInput, data.lastname);
        await RegisterPage.selectDay(data.dayOfBirth);
        await RegisterPage.selectMonth(data.monthOfBirth);
        await RegisterPage.selectYear(data.yearOfBirth);
        await t
            .typeText(RegisterPage.emailInput, userEmail)
            .typeText(RegisterPage.passwordInput, data.password)
            .typeText(RegisterPage.confirmPasswordInput, data.password)
            .click(RegisterPage.registerButton)
        await eyes.checkWindow('Success Page');
        await t
            .expect(RegisterPage.successfulRegistrationConfirmation.exists).ok()
            //Login
            .click(HomePage.loginLink)
            .typeText(LoginPage.emailInput, userEmail)
            .typeText(LoginPage.passwordInput, data.password)
            .click(LoginPage.loginButton)
            //Go to my account
            .click(HomePage.myAccountLink)
            //Go to orders
            .click(CustomerPage.ordersLink)
            .expect(CustomerPage.noOrdersLabel.exists).ok()
            .takeScreenshot();
    }).meta({
        ID: 'R-001',
        SEVERITY: 'blocker',
        STORY: 'Story-001'
    });
});