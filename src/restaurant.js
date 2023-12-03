
function createRestaurant (name1) {
  //1 parameter passing an argument of a string
var pizzaRestaurant1 = {
  name: name1,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  }
}
return pizzaRestaurant1

}

function addMenuItem (restaurant, food) {
  //2 parameters, both arguments are variables
// console.log ('restaurant:', restaurant)
// console.log ('food:', food)
// console.log ('foodtype:', food)
if (food.type == 'lunch' && !restaurant.menus.lunch.includes(food)){
  restaurant.menus.lunch.push(food)
} else if (food.type == 'breakfast' && !restaurant.menus.breakfast.includes(food)) {
  restaurant.menus.breakfast.push(food)
} else if (food.type == 'dinner' && !restaurant.menus.dinner.includes(food)) {
  restaurant.menus.dinner.push(food)
}

// console.log ('lunch:', restaurant.menus.lunch)
//used the exclamation point before includes operator,
//to check if the breakfast array does not already include that object

}

function removeMenuItem (restaurant, foodName, foodType) {
//3 parameters, arguments being passed through are 
//a variable and two strings

var menu = restaurant.menus[foodType]
var index = -1

for (var i = 0; i < menu.length; i++){
  if (menu[i].name == foodName) {
    index =i
  }
}

if (index !== -1) {
  menu.splice(index, 1)
  return `No one is eating our ${foodName} - it has been removed from the ${foodType} menu!`
} else {
  return `Sorry, we don't sell ${foodName}, try adding a new recipe!`
}

}

function checkForFood (restaurant1, foodItems) {

  var menu = restaurant1.menus[foodItems.type]
  
  for (var i = 0; i < menu.length; i++){
    if (menu[i].name == foodItems.name) {
      return `Yes, we're serving ${foodItems.name} today!`
    } 
    }
    return `Sorry, we aren't serving ${foodItems.name} today.`
  }
  




module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}