// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  // create class list to store all the elements in the class
  var classList = [];
  // iterate over the dom to pull each element with the class name
  // parent node
  var body = document.body;
  if (body.classList.contains(className)) {
    classList.push(body);
  }

  body.childNodes.forEach(function (child) {
    // child node
    // helper func definition
    var iterator = function (child) {

      if (child.nodeType === 1 ) {
        // if the element contains the className
        if (child.classList.contains(className) || child.hasChildNodes()) {
          var subChild = child.childNodes;
          // if the child does not have children
          if (subChild.length > 0) {
            // iterate over each child node
            child.childNodes.forEach(function(subChild) {
              iterator(subChild);
            });
          }
          if (child.classList.contains(className) ) {
            classList.push(child);
          }
        }
      }
    };
    // invoke iterator
    // if the body contains className
    // push into class list
    iterator(child);
    // return iterator(child);
  });

  return classList;
};

