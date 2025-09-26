Feature: Test di Livrea

  Scenario: Accedere alla Piattaforma
    Given I have a web browser open
    When I navigate to "https://smartpeg.livrea.eu/account/login"
    Then I should see a Login Page
    Insert the Login data on the Login Page
    Given I Login
    Then I should see "Analisys" Section on the left menu
    Given I clicked on "Analisys"
    Then I should see "Relationships" Section on the left menu
    Given I clicked on "Relationships"
    I should see a graph