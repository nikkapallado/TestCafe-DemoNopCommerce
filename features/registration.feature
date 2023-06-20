Feature: Registration Feature

    As a visitor, I can create a new account with the registration feature

    Background: 
        Given I access the home page

    @e2e
    Scenario Outline: Scenario Outline name: Validate successful registration
        When I open the registration page
        And I select the gender as "<gender>"
        And I enter in the first name as "<firstname>"
        And I enter in the last name as "<lastname>"
        And I select a day of birth as "<dayOfBirth>"
        And I select a month of birth as "<monthOfBirth>"
        And I select a year of birth as "<yearOfBirth>"
        And I enter an email as "<email>"
        And I enter a password as "<password>"
        And I enter in the confirm password as "<confirmPassword>"
        And I click the register button
        Then Successful registration message is displayed

        Examples:
            | gender | firstname | lastname | dayOfBirth | monthOfBirth | yearOfBirth | email | password | confirmPassword |  
            | Female | Betty  | Lafea | 12 | January | 1997 | bettylafea@sample.com | password | password |
            | Male | John  | Doe | 7 | March | 2001 | jdoe@sample.com | password123 | password123 |