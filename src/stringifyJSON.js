// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //example input: {'a': [], 'c': {}, 'b': true}
  //example output: "{"a":[],"c":{},"b":true}"

  //strings : return the string
  //number : coerce to string and return
  //boolean : coerce to string and return
  //null:
  //array : iterate and for each value call stringifyJSON on each
  //objects: iterate through key/values and call stringifyJSON on each
  //functions: skip it
  //undefined: skip it
  //wrap entire result in string


  if (Array.isArray(obj)) {
    var results = [];
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }

    return '[' + results.join(',') + ']';
  }

  if (typeof obj === 'object' && obj) {
    var results = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }

    return '{' + results.join(',') + '}';
  }

  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }

  //base case for numbers and booleans
  return '' + obj;

};