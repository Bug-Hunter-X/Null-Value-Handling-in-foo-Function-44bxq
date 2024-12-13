# JavaScript Bug: Unexpected Null Value Handling in foo Function

This repository demonstrates a common bug in JavaScript where a function doesn't handle null values gracefully. The `foo` function silently exits when null values are provided, leading to unexpected program behavior.

The bug is fixed by adding explicit checks for null and handling them appropriately, such as throwing an error or providing default values.

## Bug

The `bug.js` file demonstrates the bug. The function doesn't explicitly check for null, causing it to silently exit when null is passed.