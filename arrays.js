var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
   var new_array = [element, ...array]
   return new_array
}

function descructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}