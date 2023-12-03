function nameMenuItem(food) {
  // write a function with one parameter that takes in a name,
  // and spits out a string with interpolation.
var menuItemName = `Delicious ${food}`
return menuItemName
}

function createMenuItem(name, price, type){
  //this function should use three parameters and 
  //create an object
var menuItem1 = {
  name: name,
  price: price,
  type: type
  //The key is named name, price and type
  //because the object elements are not built in the test
  //so it needs to be built in the implementation.
  //The test is referencing menuItem.name
}
return menuItem1
}

function addIngredients(food, variable){
// function with 2 parameters
// array in the test file
if (variable.includes(food)){

}  else {
  variable.push(food)
}
// console.log('ingredients:', variable)

}

function formatPrice (format) {
//function should take in one parameter
//and return that parameter with a $

var dollarSign = `$${format}`
// console.log('format:', dollarSign)
return dollarSign
}

function decreasePrice (price) {
//function takes in one parameter and returns the 
//price at a 10% discount

var discount = price * .9
return discount
}


function createRecipe (title1, ingredients1, type1) {
//write a function with 3 parameters 
//that creates an object

var recipe1 = {
  title: title1,
  ingredients: ingredients1,
  type: type1
}
return recipe1
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


