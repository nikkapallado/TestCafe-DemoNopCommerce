import { Selector, t } from "testcafe";

class ProductDetailsPage{
    constructor(){
        this.priceValue = Selector('span#price-value-4');
        this.productQuantityInput = Selector('input#product_enteredQuantity_4');
        this.addToCartButton = Selector('button[class="button-1 add-to-cart-button"]');
        this.successNotificationMessage = Selector('div[class="bar-notification success"]').withText('The product has been added to your shopping cart');
        this.shoppingCartLink = Selector('a').withText('shopping cart');
    }
}

export default new ProductDetailsPage();