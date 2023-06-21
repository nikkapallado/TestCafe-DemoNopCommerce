import { Selector, t } from "testcafe";

class CheckoutPage{
    constructor(){
        this.countryDropdown = Selector('select#BillingNewAddress_CountryId');
        this.cityInput = Selector('input#BillingNewAddress_City');
        this.address1Input = Selector('input#BillingNewAddress_Address1');
        this.zipPostalCodeInput = Selector('input#BillingNewAddress_ZipPostalCode');
        this.phoneNumberInput = Selector('input#BillingNewAddress_PhoneNumber');
        this.continueBillingAddressButton = Selector('button.button-1.new-address-next-step-button');
        this.shippingMethodRadioButton = Selector('label');
        this.paymentMethodRadioButton = Selector('label');
        this.confirmButton = Selector('button.button-1.confirm-order-next-step-button');
        this.successfulOrderMessage = Selector('strong').withText('Your order has been successfully processed!');
        this.viewOrderDetailsLink = Selector('a').withText('Click here for order details.');
        this.continueShippingMethodButton = Selector('button.button-1.shipping-method-next-step-button');
        this.continuePaymentMethodButton = Selector('button.button-1.payment-method-next-step-button');
        this.continuePaymentInfoButton = Selector('button.button-1.payment-info-next-step-button');
    }

    async selectCountry(country){
        const countryList = this.countryDropdown.find('option');
        await t
            .click(this.countryDropdown)
            .click(countryList.withText(country));

    }
}

export default new CheckoutPage();