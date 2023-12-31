import { Selector, t } from "testcafe";

class RegisterPage {
    constructor() {
        this.genderOption = Selector('label.forcheckbox');
        this.firstNameInput = Selector('input#FirstName');
        this.lastNameInput = Selector('input#LastName');
        this.dayOfBirthDropdown = Selector('select[name="DateOfBirthDay"]');
        this.monthOfBirthDropdown = Selector('select[name="DateOfBirthMonth"]');
        this.yearOfBirthDropdown = Selector('select[name="DateOfBirthYear"]');
        this.emailInput = Selector('input#Email');
        this.passwordInput = Selector('input#Password');
        this.confirmPasswordInput = Selector('input#ConfirmPassword');
        this.registerButton = Selector('button#register-button');
        this.successfulRegistrationConfirmation = Selector('div.result').withText('Your registration completed');
    }

    async selectDay(day) {
        const dayOption = this.dayOfBirthDropdown.find('option');
        await t
            .click(this.dayOfBirthDropdown)
            .click(dayOption.withText(day));
    }

    async selectMonth(month) {
        const monthOption = this.monthOfBirthDropdown.find('option');
        await t
            .click(this.monthOfBirthDropdown)
            .click(monthOption.withText(month));
    }

    async selectYear(year) {
        const yearOption = this.yearOfBirthDropdown.find('option');
        await t
            .click(this.yearOfBirthDropdown)
            .click(yearOption.withText(year));
    }
}

export default new RegisterPage();