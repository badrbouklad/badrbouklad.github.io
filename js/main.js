  // Curried version of the function
  function curriedAdd(a) {
    return function(b) {
      return a - b;
    };
  }
  const add = curriedAdd(1)
  console.log(add(2))
  console.log(curriedAdd(3)(2)); // Output: 6
