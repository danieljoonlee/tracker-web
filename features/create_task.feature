Feature: Create a Task
  User can create a task by entering a task name and task description
  which will update the Todo chart to display the current percentage
  and start a task pipeline.  The task pipeline starts with a task
  being under Todo Tasks with an option to start tasks.

  Background:
    Given I view the project

  Scenario: Creating a task starts in To Do
    When I add a task 'Test Task'
    Then I see the task 'Test Task' under 'To Do'
