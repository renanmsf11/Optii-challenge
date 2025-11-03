Feature: Product page features in SauceDemo web application

 @focus
  Scenario: 01 - User add "product" to cart and validate "product" in cart

    Given the user visit "Sauce Demo" main page
    When the user types valid "Standard" user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    And the user is redirected to the "Product" page
    Then the user add "product" to cart in "Product" page
    And the user click in "Cart" icon in "Product" page
    Then the user is redirected to the "Cart" page


 @focus
  Scenario: 02 - User remove "product" from cart through "Product" page

    Given the user visit "Sauce Demo" main page
    When the user types valid "Standard" user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    And the user is redirected to the "Product" page
    Then the user add "product" to cart in "Product" page
    And the user click in "Remove" button in "Cart" or "Product" page

 @focus
  Scenario: 03 - User remove "product" from cart through "Cart" page

    Given the user visit "Sauce Demo" main page
    When the user types valid "Standard" user credentials in "Login" page
    And the user click in "Login" button in "Login" page
    And the user is redirected to the "Product" page
    Then the user add "product" to cart in "Product" page
    And the user click in "Cart" icon in "Product" page
    And the user is redirected to the "Cart" page
    Then the user click in "Remove" button in "Cart" or "Product" page
    