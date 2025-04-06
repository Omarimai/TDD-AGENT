# tests/unit/features/calculator-add.feature
Feature: Calculator Addition Function
  As a developer
  I want an addition function
  So that I can perform addition operations

  Scenario: Adding two positive numbers
    Given the calculator add function is available
    When I pass 5 and 7 to the add function
    Then it should return 12

  Scenario: Adding a positive and negative number
    Given the calculator add function is available
    When I pass 5 and -3 to the add function
    Then it should return 2

  Scenario: Adding two negative numbers
    Given the calculator add function is available
    When I pass -2 and -3 to the add function
    Then it should return -5