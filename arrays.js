var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
   var new_array = [element, ...array]
   return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
 array = array.unshift('element')
  return array
}