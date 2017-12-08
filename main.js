var FoodItem = function(name, calories, isVegan, isGlutenFree){
    this.name = name
    this.calories = calories
    this.isVegan = isVegan
    this.isGlutenFree = isGlutenFree
}

FoodItem.prototype.stringify = function(){
    return `${this.name} has ${this.calories} calories. It is ${this.isVegan ? '' : 'not'} vegan, and it is ${this.isGlutenFree ? '' : 'not'} gluten free.`
}

var beefPatty = new FoodItem('Beef Patty', 500, false, true).stringify()
var cheese = new FoodItem('cheese', 100, false, true).stringify()
var lettuce = new FoodItem('lettuce', 4, true, true).stringify()
var bun = new FoodItem('bun', 175, true, false).stringify()
var tomato = new FoodItem('tomato', 40, true, true).stringify()
var cucumber = new FoodItem('cucumber', -15, true, true).stringify()

var Dish = function(name, price, description, foodItems){
    this.name = name
    this.price = price
    this.description = description
    this.foodItems = foodItems
}

Dish.prototype.stringify = function(){
    var output = `${this.name}: ${this.description}. It contains: ${this.foodItems}`
    return output
}

var burgerIngredients = [beefPatty, cheese, lettuce, bun, tomato]
var manBurger = new Dish('The Man Burger', 11.99, "From the cow, for the man", burgerIngredients)


var healthSalad = new Dish('The Health Salad', 9.99, 'For the health nut in all of us.', [lettuce, tomato, cheese, cucumber])

// console.log(manBurger.stringify())
// console.log(healthSalad.stringify())


var Menu = function(name, dishes){
    this.name = name
    this.dishes = dishes
}
Menu.prototype.stringify = function(){
    var output = this.name + ': '
    for ( var i = 0; i < this.dishes.length; i++ ) {
        output += this.dishes[i].stringify()
    }
    return output
}

var happyHour = new Menu('Happy Hour', [manBurger, healthSalad])

var lunchMenu = new Menu('Lunch', [manBurger])

// console.log(happyHour.stringify())

var Restaurant = function(name, description, menus){
    this.name = name
    this.description = description
    this.menus = menus
}
Restaurant.prototype.stringify = function(){
    var output = `${this.name}: ${this.description}. Check out our menus! `
    for ( var i = 0; i < this.menus.length; i++ ) {
        output += this.menus[i].stringify()
    }
    return output
}

var esJoint = new Restaurant("E's Joint", "The best burger and salad you'll ever have.", [happyHour, lunchMenu])

console.log(esJoint.stringify())