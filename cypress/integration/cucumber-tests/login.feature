Feature: Login to Application

    As invalid user I can't login to application
    As valid user I want login to application

    Scenario: Invalid login
        Given I open login page
        And I wait on 2000 milliseconds
        When I fill username with "somename"
        And I fill password with "somepwd"
        And I click on submit login
        Then I should see error message


    Scenario: Valid login
        Given I open login page
        And I see "Zero - Log in" on the tittle
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit login
        Then I should see homepage
    
    