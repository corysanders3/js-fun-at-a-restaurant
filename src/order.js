
function takeOrder (order, delivery) {
  //2 parameters

if (delivery.length < 3) {
    delivery.push(order)
  }
}

function refundOrder (orderNo, delivery){
  //2 parameters, need to remove order by first parameter
var array = delivery
for (var i = 0; i < array.length; i++){
if (array[i].orderNumber == orderNo){
  array.splice(i, 1)
    }
  }
}
//because we need to go through each key-value pair within all the objects,
//a for loop was needed so we could capture the position of i
//where the orderNo being passed matched the orderNumber in the object element


function listItems (food) {
  //1 parameter, to make variable array equal to
  //item value within each order variable
// console.log('food:', food)
var array = food
var newArray = []
for (var i = 0; i < array.length; i++){
  newArray.push(array[i].item)
  var newString = newArray.join(', ')
// console.log('newArray:', newString)
}
return newString
}

//extracted the array.item values into a new array
//joined those values into a new string using the join method

function searchOrder (delivery, food){
  //2 parameters
  //check if food parameter is in the delivery parameter array
  //if it is then come back with true
  // console.log ('delivery:', delivery)
for (var i = 0; i < delivery.length; i++){
  if (delivery[i].item == food) {
    return true
  }
  
  } return false
} 


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}