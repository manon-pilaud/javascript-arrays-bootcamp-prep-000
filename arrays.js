var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(element, array) {
  var new_array = [element, ... array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray (element, array) {
  var new_array = [element, array]
  return new_array
}
