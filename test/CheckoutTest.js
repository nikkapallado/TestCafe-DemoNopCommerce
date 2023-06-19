import { ClientFunction } from "testcafe";
import HomePage from "../pages/HomePage.js";
import RegisterPage from "../pages/RegisterPage.js";
import LoginPage from "../pages/LoginPage.js";
import CustomerPage from "../pages/CustomerPage.js";
import ShoppingCartPage from "../pages/ShoppingCartPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";
import ProductDetailsPage from "../pages/ProductDetailsPage.js";
import SearchResultsPage from "../pages/SearchResultsPage.js";


const URL = 'https://demo.nopcommerce.com/';
const getPageURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = `sample${randomNumber}@asdqwe.com`

fixture('Registration Fixture')
    .page(URL);

test('Place order and checkout test', async t => {
    await t
        .maximizeWindow()
        //Register
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
        //Logout
        // .click(HomePage.logoutLink)
        //Login
        .click(HomePage.loginLink)
        .typeText(LoginPage.emailInput, userEmail)
        .typeText(LoginPage.passwordInput, 'Password@123')
        .click(LoginPage.loginButton)
    //Search for item
    await HomePage.search('Apple MacBook Pro 13-inch');
    await t
        .click(SearchResultsPage.productTitle.withText('Apple MacBook Pro 13-inch'))
        //Update item cart details
        .expect(getPageURL()).contains('apple-macbook-pro-13-inch')
        .expect(ProductDetailsPage.priceValue.innerText).eql('$1,800.00')
        .selectText(ProductDetailsPage.productQuantityInput)
        .pressKey('delete')
        .typeText(ProductDetailsPage.productQuantityInput, '3')
        .click(ProductDetailsPage.addToCartButton)
        .expect(ProductDetailsPage.successNotificationMessage.exists).ok()
        .click(ProductDetailsPage.shoppingCartLink)
        .expect(getPageURL()).contains('cart')
        .expect(ShoppingCartPage.cartTotal.innerText).eql('$5,400.00')
        .click(ShoppingCartPage.termsOfServiceCheckbox)
        .click(ShoppingCartPage.checkoutButton)
    //Update checkout and payment details
    await CheckoutPage.selectCountry('Philippines');
    await t
        .typeText(CheckoutPage.cityInput, 'Manila')
        .typeText(CheckoutPage.address1Input, 'Brgy. Uno')
        .typeText(CheckoutPage.zipPostalCodeInput, '2002')
        .typeText(CheckoutPage.phoneNumberInput, '09123456789')
        .click(CheckoutPage.continueBillingAddressButton)
        .click(CheckoutPage.shippingMethodRadioButton.withText('Next Day Air ($0.00)'))
        .click(CheckoutPage.continueShippingMethodButton)
        .click(CheckoutPage.paymentMethodRadioButton.withText('Check / Money Order'))
        .click(CheckoutPage.continuePaymentMethodButton)
        .click(CheckoutPage.continuePaymentInfoButton)
        .click(CheckoutPage.confirmButton)
        .expect(CheckoutPage.successfulOrderMessage.exists).ok()
        .click(CheckoutPage.viewOrderDetailsLink)
        //Go to my account
        .click(HomePage.myAccountLink)
        //Go to orders
        .click(CustomerPage.ordersLink)
        .expect(CustomerPage.noOrdersLabel.exists).notOk()
        .takeScreenshot()
});