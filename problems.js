const logBetween = (lowNum, highNum) => {
  // Define a function logBetween(lowNum, highNum) that will return a new array with every number from lowNum to highNum,
  // inclusive. Inclusive means that the range includes lowNum and highNum.
  // Your code goes here
  let contains = []

  for (let i = 1; i < highNum; i++){
    if (i >= lowNum && i <= highNum){
      contains.push(i)
    }
  }
  return contains
};

console.log(logBetween(2, 6));

const printFives = (max) => {
  // Write a function printFives(max) that return a new array with the multiples of 5 that are less than max.
  // Your code goes here
  let contains = []

  for (let i = 1; i < max; i++){

    if (i % 5 === 0 && i < max){
      contains.push(i)
    
    }
  }
  return contains
};

console.log(printFives(30));

const logBetweenStepper = (min, max, step) => {
  // Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters.
  // The function should return a new array with numbers between min and max at step intervals.
  // Example logBetweenStepper(1, 10, 2) should return => [3,5,7,9]
  // Your code goes here
  let contains = []

  for (let i = min; i < max; i+= step){
    if (i >= min && i <= max){
      contains.push(i)
    }
  }
  return contains

};

console.log(logBetween(0, 10, 3))

module.exports = {
  logBetween,
  printFives,
  logBetweenStepper,
};
