const time = (target, name, descriptor) => {
  const originalFn = descriptor.value;
  if (typeof originalFn === 'function') {
    // if it's a function, assign the descriptor value to a new decorated function
    descriptor.value = function(...args) {
      console.log(`Arguments: ${args}`);
      try {
        console.time();
        const result = originalFn.apply(this, args);
        console.timeEnd();
        console.log(`Result: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    };
  }
  return descriptor; // return the descriptor
};

export { time };
