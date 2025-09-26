Feature: Test di Guru up

  Scenario: Accedere alla Piattaforma
    Given I have a web browser open
    When I navigate to "https://clienteprova2.guru-hrm.it/pages/login.aspx"
    Then I should see a Login Button
    Given I clicked the Login button
    Then I should see a Login Page
    Insert the Login data on the Login Page
    If I see a 2FA page
    Then I should ignore it and continue
    Then I should navigate to "https://clienteprova2.guru-hrm.it/pages/home.aspx"
    Then I should see a text "Valutazione" on the left menu
    If I don't see it I should look on the left for a handshake icon
    Given I click on it
    Then I should see a text "Sistemi di Valutazione"
    Given I click on it
    Then I should see a dropdown menu called "Stai operando come"
    Then I should select from the dropdown "Valutato - Area non it"
    Given I selected "Valutato - Area non it"
    Then I should see "pizzoli aurelio" under "Persona valutata"
    Then I should click on the arrow (input type=submit)
    Given I clicked on the arrow
    Then I should see a screen with 2 sections
    Given I clicked on the 2 sections
    Then I should see a list like this: "Impegno Concretezza Resilieneza Versatilità Fiducia Collaborazione Disponibilità Atteggiamento Efficacia"
    Then I should fill the form with the information provided
    Then I should press the "Salva Sezione" button in the bottom of the page
    Then I should press the "Chiudi Sezione" button on the right of the page