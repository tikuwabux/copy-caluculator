// 1式（以下の一行）
let string = 'return ' + "1*2+3+4/2" + ";";

console.log(string);
console.log(typeof(string));

// 2式（以下の一行）
let number1 = new Function(string)();

console.log(number1);
console.log(typeof(number1));

//3式（以下の）
let number2 = equal_calc();
function equal_calc() {
  return 1*2+3+4/2;
}

console.log(number2);
console.log(typeof(number2));