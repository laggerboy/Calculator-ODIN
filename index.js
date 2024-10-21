let x;
let y;
let operator = "";

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function devide(x, y) {
  if (y !== 0) return x / y;
  else return "Can't devide by zero";
}
function multiply(x, y) {
  return x * y;
}
function operate(operator, x, y) {
  let result;
  switch (operator) {
    case "+":
      result = add(x, y);
      break;
    case "-":
      result = subtract(x, y);
      break;
    case "*":
      result = multiply(x, y);
      break;
    case "/":
      result = devide(x, y);
      break;
  }
  return result;
}
