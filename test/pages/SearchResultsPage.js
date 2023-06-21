import { Selector, t } from "testcafe";

class SearchResultPage{
    constructor(){
        this.productItem = Selector('div.product-item');
        this.productTitle = Selector('a');
    }
}

export default new SearchResultPage();