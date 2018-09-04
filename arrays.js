var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){	function addElementToBeginningOfArray(array, element){
  var array = "foo"	  var new_array = [element, array[0]]
  var element = 1	  return new_array
return [array, element]	
}	}

function descructivelyAddElementToBeginningOfArray(array, element){	
 return array, element	function descructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
