const getMinValue = require('./getMinValue')

module.exports = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }