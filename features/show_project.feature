Feature: Display a Project
  User should be able to display multiple projects in order to keep
  track of their tasks.  Within the Sample Project Page, users will
  have the ability to create tasks, start tasks, and complete tasks,
  while giving them feedback with data visualization charts.

  Scenario: The initial project page
    When I view the project
    Then I see 'Sample Project'
