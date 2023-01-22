// let multiply = function (x, y) {
//   console.log(x * y);
// }

// let multiplybytwo = multiply.bind(this, 2);

// multiplybytwo(5);

// let multiplybythree = multiply.bind(this, 3);

// multiplybythree(5);


let multiply = function(x){
  return function (y) {
    console.log(x*y)  
  }
}
let multiplybytwo = multiply(2);

multiplybytwo(3);

let multiplybythree = multiply(3);

multiplybythree(10);