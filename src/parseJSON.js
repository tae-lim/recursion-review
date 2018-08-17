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
    } else if (isBoolean(json[i])) {
      return parseBoolean();
   } //else if (isArray(json[i])) {
    //   return parseArray();
    // } else {
    //   return `you got to the else part of parseController.`;
    // }
  };

  var isBoolean = function() {
    return json.slice(i, i + 4) === 'true' || json.slice(i, i + 5) === 'false';
  };

  var isString = function(char) {
    return char === '"';
  };

  var isNumber = function(char) {
    return !isNaN(char);
  };

  var isArray = function(char) {
    return char === '[';
  };

  var parseBoolean = function() {
    if (json.slice(i, i + 4) === 'true') {
      i += 4;
      return true;
    } else {
      i += 5;
      return false;
    }
  };

  var parseString = function() {
    var result = '';
    i++;

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

  // var parseArray = function() {
  //   var result = [];
  //   i++;

  //   while(json[i] !== ']') {
  //     if (json[i] === ',') {
  //       i++;
  //     }

  //     result.push(parseController());
  //   }

  //   return result;
  // };

  return parseController();
};

