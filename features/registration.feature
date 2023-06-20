Feature: Registration Feature

    As a visitor, I can create a new account with the registration feature

    Background: 
        Given I access the home page

    Scenario: Validate successful registration
        When I open the registration page
        And I select the gender as "Female"
        And I enter in the first name as "Betty"
        And I enter in the last name as "Lafea"
        And I select a day of birth as "12"
        And I select a month of birth as "January"
        And I select a year of birth as "1997"
        And I enter an email as "sample@asdqwe.com"
        And I enter a password as "password"
        And I enter in the confirm password as "password"
        And I click the register button
        Then Successful registration message is displayed