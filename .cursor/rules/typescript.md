# TypeScript/JavaScript Rules

## Typing

- Use TypeScript for all new files
- Add types for all functions and variables
- Use interface for objects
- Use type for union types and aliases
- Avoid any, use unknown when needed

## Imports and Exports

- Use named exports instead of default exports when possible
- Group imports: external → internal
- Sort imports alphabetically within groups
- Use absolute paths for internal imports

## Functions

- Use arrow functions for short functions
- Use function declarations for main functions
- Add JSDoc comments for public functions
- Limit number of parameters (maximum 3-4)

## Async Code

- Use async/await instead of promises
- Handle errors with try/catch
- Add typing for async functions
- Use Promise.all for parallel operations

## TypeScript Best Practices

- Prefer explicit types over inference when it improves clarity
- Use const assertions for immutable data
- Leverage utility types (Pick, Omit, Partial, etc.)
- Avoid type assertions unless absolutely necessary
