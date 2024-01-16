// Refactor to ES 2015
/*
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  */

// ES2015
const double = (arr) => {
  return arr.map((val) => {
    return val * 2;
  });
};

console.log(double([1, 2, 3]));

// Refactor to ES 2015
/*
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
  */

const squareAndFindEvens = (numbers) => {
  let squares = numbers.map((num) => {
    return num ** 2;
  });
  let evens = squares.filter((square) => {
    return square % 2 === 0;
  });
  return evens;
};

console.log(squareAndFindEvens([1, 2, 3, 4, 5]));
