var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(element, array) {
  var new_array = [element, array[0]]
  return new_array
}

function destructivelyAddElementToBeginningOfArray (element, array) {
  var new_array = [array.unshift(element)]
  return new_array
}
