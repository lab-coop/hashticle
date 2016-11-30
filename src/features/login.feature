@only
Feature: Login
  As any kind of user I am able to login into the application
  Background:
    Given these user credentials
      | username | password |
      | userA    | test1    |
      | userB    | test2    |
    Given I'm logged out
    Given I open the site

  Scenario: Successful Login
    Given I see the "Lab.coop" text on the page
    When I login as "userA" with password "test1"
    Then I see the "# ticle" text on the page

