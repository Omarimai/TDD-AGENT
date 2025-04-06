# tests/unit/features/calculator-subtract.feature
Feature: Calculator Subtraction Function
  As a developer
  I want a subtraction function
  So that I can perform subtraction operations

  Scenario: Subtracting a smaller number from a larger number
    Given the calculator subtract function is available
    When I pass 10 and 4 to the subtract function
    Then it should return 6

  Scenario: Subtracting a larger number from a smaller number
    Given the calculator subtract function is available
    When I pass 5 and 8 to the subtract function
    Then it should return -3