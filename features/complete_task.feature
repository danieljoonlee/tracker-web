Feature: Complete a task
  User can Complete Task which removes the view of the task, and
  updates the charts accordingly.

  Background:
    Given I view the project
    And I add a task 'Task #1'
    And I see the task 'Task #1' under 'In Progress'

  Scenario: Completing the In Progress task moves to Complete
    When I see the task 'Task #1' under 'In Progress'
    Then I complete the task 'Task #1' to update the charts
