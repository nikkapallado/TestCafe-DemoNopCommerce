const { Selector } = require("testcafe");

function select(selector){
    return Selector(selector).with({boundTestRun:testController});
}

exports.RegisterPage = {
    genderOption: function(){
        return select('label.forcheckbox');
    },
    firstNameInput: function(){
        return select('input#FirstName');
    },
    lastNameInput: function(){
        return select('input#LastName');
    },
    dayOfBirthDropdown: function(){
        return select('select[name="DateOfBirthDay"]');
    },
    monthOfBirthDropdown: function(){
        return select('select[name="DateOfBirthMonth"]');
    },
    yearOfBirthDropdown: function(){
        return select('select[name="DateOfBirthYear"]');
    },
    emailInput: function(){
        return select('input#Email');
    },
    passwordInput: function(){
        return select('input#Password');
    },
    confirmPasswordInput: function(){
        return select('input#ConfirmPassword');
    },
    registerButton: function(){
        return select('button#register-button');
    },
    successfulRegistrationConfirmation: function(){
        return select('div.result').withText('Your registration completed');
    },
    listOption: function(){
        return select('option')
    }
}