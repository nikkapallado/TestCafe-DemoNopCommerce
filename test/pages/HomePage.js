import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        this.subtitleHeader = Selector('h2').withText('Welcome to our store');
        this.registerLink = Selector('a').withText('Register');
        this.loginLink = Selector('a').withText('Log in');
        this.shoppingCartLink = Selector('a').withText('Shopping cart');
        this.wishlistLink = Selector('a').withText('Wishlist');
        this.myAccountLink = Selector('a').withText('My account');
        this.logoutLink = Selector('a').withText('Log out');
        this.currencyDropdown = Selector('select#customerCurrency');
        this.searchInput = Selector('input#small-searchterms')
    }

    get productSearch(){
        return Selector('input[id="small-searchterms"]');
    }

    async search(product){
        await t
            .typeText(this.productSearch, product)
            .pressKey('enter');
    }

    async changeCurrency(currency){
        await t
            .click(this.currencyDropdown)
            .click(Selector('option',{text: currency}));
    }
}

export default new HomePage();