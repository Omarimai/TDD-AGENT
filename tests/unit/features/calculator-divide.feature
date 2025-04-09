# tests/unit/features/calculator-divide.feature
Feature: Calculator Division Function
  As a developer
  I want a division function
  So that I can perform division operations

  Scenario: Dividing two positive numbers
    Given the calculator divide function is available
    When I pass 10 and 2 to the divide function
    Then it should return 5

  Scenario: Dividing a positive number by a negative number
    Given the calculator divide function is available
    When I pass 10 and -2 to the divide function
    Then it should return -5

  Scenario: Dividing two negative numbers
    Given the calculator divide function is available
    When I pass -10 and -2 to the divide function
    Then it should return 5

  Scenario: Dividing a number by zero
    Given the calculator divide function is available
    When I pass 10 and 0 to the divide function
    Then it should raise a divide by zero error
