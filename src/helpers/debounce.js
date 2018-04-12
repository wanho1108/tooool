// eslint-disable-next-line func-names
const Debounce = function (func, time) {
  let timeout;
  // eslint-disable-next-line func-names
  return function (...args) {
    const funcCall = () => func.apply(this, ...args);
    clearTimeout(timeout);
    timeout = setTimeout(funcCall, time);
  };
};

export default Debounce;