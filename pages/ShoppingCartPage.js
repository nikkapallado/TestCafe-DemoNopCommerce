import { Selector, t } from "testcafe";

class ShoppingCartPage{
    constructor(){
        this.termsOfServiceCheckbox = Selector('input#termsofservice');
        this.checkoutButton = Selector('button#checkout');
        this.cartTotal = Selector('td.cart-total-right');
    }
}

export default new ShoppingCartPage();