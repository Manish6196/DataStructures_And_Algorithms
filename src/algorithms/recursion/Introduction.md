## Recursive functions
A recursive function is a **function that calls itself**. This technique is commonly used in programming to solve problems that can be broken down into smaller, more manageable sub-problems.

## Recursion components
Recursive functions can be thought of as being broken down into a few components.

```js
function Sum(n) {
  if (n <= 0) return 0; // ...(1) called 2nd
  const s = Sum(n - 1); // ...(2) called 1st
  return s + n;         // ...(3) called 3rd
}
```

1. The first is the **base case** which is the terminating condition for the recursion. Every recursive function has a base case, either implicit or explicit, otherwise the recursion never ends.

2. The next component of a recursive function is the **recursive call** to the same function. A crucial part about the recursive call is the transition to the smaller subproblem that gets you closer to the base case.

3. The last part of the recursion is the **body of the function**, or the work being done in the function itself to solve the problem.
