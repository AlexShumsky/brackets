
module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.map(val => val.join(''));
  let result;

  function getResult(str) {
    let newStr = str;
    config.forEach(brackets => {
      str = str.replace(brackets, '');
    });
    if (newStr.length === str.length) {
      result = str;
    } else getResult(str);
  }
  getResult(str);
  return !result;
}