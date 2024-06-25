// const myVehicles = ['mustang', 'f-150', 'expedition'];

// const [car, truck, suv] = myVehicles;
// console.log(car);
// console.log(truck);
// console.log(suv);
// function calculate(a , b){
//     const add = a + b; 
//     const subtract = a - b; 
//     const multiply = a * b; 
//     const divide = a / b; 

//     return[add, subtract, multiply, divide];
// }

// const [add, subtract, multiply, divide] = calculate( 5, 5);

// console.log(add);
// console.log(subtract);
// console.log(multiply);
// console.log(divide);

// Destructuring Objects

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    return message;

  }

  console.log( vehicleO);

