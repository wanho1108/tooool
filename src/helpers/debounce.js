const debounce = (fn, time) => {
  let timeout;
  // eslint-disable-next-line func-names
  return function (...args) {
    const fnCall = () => {
      return fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, time);
  };
};

export default debounce;