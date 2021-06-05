
let categories = {
  1: "sport",
  2: "luxury",
  3: "offRoad"
}

/// Get category
let getCategory = function() {
  let category;
do {
  category =  parseInt(prompt(`Please make your choice  \n 1 - sport 2 -luxury 3 - off`));
} while(category < 0 || category > 3 );
return category;
}
category = getCategory();



// Get items from category
let getItems = function() { 
  let carsData = carsStore[categories[category]].items;
  for(let i = 0; i < carsData.length; i++) {
    let car = carsData[i];
    console.log(`#${i + 1} ${car.name} | Price: ${car.price}`);
  }
  return carsData;
}
carsData = getItems();

// Chose the car
let choseCar = function() {
  let userChoice;
  
do {
  userChoice =  parseInt(prompt(`Please make your choice (1 - ${carsData.length})`));
} while( isNaN(userChoice) || userChoice > carsData.length || userChoice === null)
// console.log(userChoice);
return userChoice;
}
userChoice = choseCar();

// Get count
let getCount = function() {
  let count;
  
  do {
    count =  parseInt(prompt("Please enter the count"));
  } while( isNaN(count) || count < 1 || userChoice === null)
  return count;
  console.log(count);
}
count = getCount();


// Get price

let price = 0;
let chosenCar = carsData[userChoice - 1];
let carsPrice = chosenCar.price;
let totalPrice = carsPrice * count;
let discount = 0;

let getPrice = function() { 
if(totalPrice > 100000) {
  discount = totalPrice * 0.05;
  console.log(`Your discount: ${discount}`);
  console.log(`Your total price: ${totalPrice}`);
  console.log(`Your bill: ${totalPrice - discount}`);
} else {
  console.log(`Your total price: ${totalPrice}`)
}
return totalPrice;
}
totalPrice = getPrice();