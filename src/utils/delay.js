export const debounced = (func, delay) => {
  let timeoutId = null;
  // do something
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...args), delay)
  }
};
export const throttled = (func,delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(function() {
        timer = null;
        func(...args)
      }, delay);
    }
  }
}
