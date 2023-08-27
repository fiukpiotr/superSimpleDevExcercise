/* 
const buttonElement = document.querySelector('.js-btn');


const eventListener = () => {
  console.log('click');
}

buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {
  console.log('click2');
}); */

/* function greeting() {
  console.log('hello');
}

greeting();

const num = 2;
const function1 = function() {
  console.log('hello2');
}

console.log(function1);
console.log(typeof function1);
function1();

const object1 = {
  num : 2,
  fun: function() {
    console.log('hello3');
  }
}

object1.fun();
console.log(object1.num);

function display(param) {
  console.log(param);
}

display(2);

function run(param) {
  param();
}

run(function() {
  console.log('hello4');
}); */

/* setTimeout(function() {
  console.log('timeout');
  console.log('timeout2');
},
3000);

console.log('next line');

setInterval(
  function() {
    console.log('interval');
    },
  10000  
);

console.log('next line 2'); */

/* [
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach((value, index) => {
  if (value === 'wash dishes') {
    return;
  }
  console.log(index + 1);
  console.log(value);
});

const regularFunction = function(param, param2) {
  console.log('hello');
  return 5;
}

const arrowFunction = (param, param2) => {
  console.log('hello');
  return 5;
};

arrowFunction();
regularFunction();

const oneParam = param => {
  console.log(param + 1);
};
oneParam(2);


// const oneLine = () => {
//   return 2 + 3
// }; 
//
// THIS ABOVE IS THE SAME AS THIS ONELINE THING BELOW
// `{}` and `return` statement are optional

console.log('arrowFunction oneLine:');
const oneLine = () => 2 + 3;

console.log(oneLine());

const object2 = {
  method: () => {

  },
  // SHORTHAND METHOD SYNTAX BELOW
  method(){

  }
} 
*/

console.log([1, -3, 5].filter((value, index) =>
{
  
//   if (value >= 0) {
//     return true;
//   } else {
//     return false;
//   }
//
// TO PONIŻEJ JEST SKRÓTEM TEGO CO POWYŻEJ, heh
  return value >= 0;
}));

console.log(
[1, 1, 3].map((value, index) => {
  return value * 2;  
}));
//SHORTEN BELOW
console.log( [1, 1, 3].map( value => value * 2 ) );
