Feature: Start a Task
  User has a current task under To Do with the option to start task, which
  moves the task into In Progress.

  Background:
    Given I view the project
    And I add a task 'Task #1'

  Scenario: Starting the task moves to In Progress
    When I start the task
    Then I see the task 'In Progress Task #1' under 'In Progress'
