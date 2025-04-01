Overview
This repo is a part of a project that automates the TDD cycle by detecting new test files in your GitHub repository and using AI to progressively build an implementation that satisfies all tests. The system automatically:

Detects new test files pushed to your repository
Analyzes and prioritizes test cases
Uses Anthropic's Claude to generate implementation code
Runs tests and iteratively improves code until all tests pass
Offers refactoring suggestions with validation

![TDD Automation Workflow](mermaid-diagram-2025-04-01-175842.svg)

