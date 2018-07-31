// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var elements = document.body;
  var getClassNameResults = function (element) {
    if (element.nodeType === 1 && element.classList.contains(className)) {
      results.push(element);
    }

    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        getClassNameResults(element.childNodes[i]);
      }
    }
  };

  getClassNameResults(elements);
  return results;
};
