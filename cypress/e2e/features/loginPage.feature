Feature: Login feature SauceDemo web application

Background: User access" Sauce Demo" main page
Given the user visit "Sauce Demo" main page


  @focus
  Scenario: 01 - Login with valid "standard" user credentials

    When the user types valid "Standard" user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    Then the user is redirected to the "Product" page

  @focus
  Scenario: 02 - Login with valid "glitch" user credentials

    When the user types valid "Glitch" user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    Then the user is redirected to the "Product" page
    

  @focus
  Scenario: 03 - Login with valid "locked out" user credentials

    When the user types valid "Locked Out" user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    Then system must return an error message "Epic sadface: Sorry, this user has been locked out."
  
  @focus

  Scenario: 04 - Login with invalid user credentials
  
    When the user types invalid user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    Then system must return an error message "Epic sadface: Username and password do not match any user in this service"

  @focus
  Scenario: 05 - Login with empty user credentials

    When the user leaves empty the user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    Then system must return an error message "Epic sadface: Username is required"


  @focus
  Scenario: 06 - Logout from "Product" page

    When the user types valid "Standard" user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    And the user is redirected to the "Product" page

    When the user click in the "Menu" button in "Product" page
    And the user click in the "Logout" button in "Product" page
    Then the user is redirected to the "Login" page
