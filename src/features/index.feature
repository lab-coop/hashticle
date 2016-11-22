Feature: Index page

  As a user I want to be able to see
  the welcome page

  Background:
  Given the news site is provide these news
    | Title | Content  |
    | Item1 | Content1 |
    | Item2 | Content2 |

  Scenario: I check the index page
  When I navigate to the index page
  Then I see the "# ticle" text on the page
   And I see the "Read news by tags" text on the page
   And I see the "2" news on the page
