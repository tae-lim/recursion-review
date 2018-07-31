// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var i = 0;

  var parseController = function() {
    if (isString(json[i])) {
      return parseString();
    } else if (isNumber(json[i])) {
      return parseNumber();
    }
  };

  var isString = function(char) {
    return char === '"';
  };

  var isNumber = function(char) {
    return !isNaN(char);
  };

  var parseString = function() {
    var result = '';
    while (json[i] !== '"') {
      result += json[i];
      i++;
    }
    return result;
  };

  var parseNumber = function() {
    var result = '';
    while (isNumber(json[i]) || json[i] === '.' || json[i] === '-') {
      result += json[i];
      i++;
    }

    return Number(result);
  };

  return parseController();
};

