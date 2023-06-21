const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const { ClientFunction } = require("testcafe");
const homePage = require("../../test/pages/HomePage_BDD.js");
const registerPage = require("../../test/pages/RegisterPage_BDD.js");

const URL = 'https://demo.nopcommerce.com/';
var randomNumber = Math.floor(Math.random() * 10000);

Given('I access the home page', async function () {
    await testController.navigateTo(URL);
});

When('I open the registration page', async function () {
    await testController.click(homePage.HomePage.registerLink());
});

When('I select the gender as {string}', async function (gender) {
    await testController.click(registerPage.RegisterPage.genderOption().withText(gender));
});

When('I enter in the first name as {string}', async function (firstname) {
    await testController.typeText(registerPage.RegisterPage.firstNameInput(), firstname);
});

When('I enter in the last name as {string}', async function (lastname) {
    await testController.typeText(registerPage.RegisterPage.lastNameInput(), lastname);
});

When('I select a day of birth as {string}', async function (dayOfBirth) {
    await testController.click(registerPage.RegisterPage.dayOfBirthDropdown());
    await testController.click(registerPage.RegisterPage.listOption(dayOfBirth));
});

When('I select a month of birth as {string}', async function (monthOfBirth) {
    await testController.click(registerPage.RegisterPage.monthOfBirthDropdown());
    await testController.click(registerPage.RegisterPage.listOption(monthOfBirth));
});

When('I select a year of birth as {string}', async function (yearOfBirth) {
    await testController.click(registerPage.RegisterPage.yearOfBirthDropdown());
    await testController.click(registerPage.RegisterPage.listOption(yearOfBirth));
});

When('I enter an email as {string}', async function (email) {
    var userEmail = `${randomNumber}${email}`
    await testController.typeText(registerPage.RegisterPage.emailInput(), userEmail);
});

When('I enter a password as {string}', async function (password) {
    await testController.typeText(registerPage.RegisterPage.passwordInput(), password);
});

When('I enter in the confirm password as {string}', async function (password) {
    await testController.typeText(registerPage.RegisterPage.confirmPasswordInput(), password);
});

When('I click the register button', async function () {
    await testController.click(registerPage.RegisterPage.registerButton());
});

Then('Successful registration message is displayed', async function () {
    await testController.expect(registerPage.RegisterPage.successfulRegistrationConfirmation().exists).ok();
});