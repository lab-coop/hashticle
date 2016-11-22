Feature: Index page

  As a user I want to be able to see
  the welcome page

  Background:
  Given the news site is provide these news
    | Title | Content  | Date                 |
    | Item1 | Content1 | 2016-05-02T12:34:00Z |
    | Item2 | Content2 | 2016-05-02T09:54:00Z |

  Scenario: I check the index page
  When I navigate to the index page
  Then I see the "# ticle" text on the page
   And I see the "Read news by tags" text on the page
   And I see the "2" news on the page
