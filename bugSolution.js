function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  // ... rest of the function
}
//Alternative solution
function foo(a, b) {
  a = a || 0; // or any default value
  b = b || 0; // or any default value
  // ... rest of the function
}