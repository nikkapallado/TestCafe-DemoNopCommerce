import { Selector, t } from "testcafe";

class LoginPage{
    constructor(){
        this.emailInput = Selector('input#Email');
        this.passwordInput = Selector('input#Password');
        this.loginButton = Selector('button.button-1 login-button');
        this.returningCustomerHeader = Selector('strong').withText('Returning Customer')
    }
}

export default new LoginPage();