let x = "";
let y = "";
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
  x = parseFloat(x);
  y = parseFloat(y);
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

const screen = document.querySelector(".screen-text");
const buttons = document.querySelector(".buttons");
let text = ["", "", ""];
let i = 0;
buttons.addEventListener("click", function () {
  switch (event.target.className) {
    //numbers

    case "1":
      text[i] += "1";
      break;
    case "2":
      text[i] += "2";
      break;
    case "3":
      text[i] += "3";
      break;
    case "4":
      text[i] += "4";
      break;
    case "5":
      text[i] += "5";
      break;
    case "6":
      text[i] += "6";
      break;
    case "7":
      text[i] += "7";
      break;
    case "8":
      text[i] += "8";
      break;
    case "9":
      text[i] += "9";
      break;
    case "0":
      text[i] += "0";
      break;

    //operators

    case "add":
      break;
    case "subtract":
      break;
    case "multiply":
      break;
    case "devide":
      break;

    //misc

    case "clear":
      text = ["", "", ""];
      i = 0;
      break;
    case "remove":
      while (i >= 0 && text[0]) {
        if (text[i]) {
          text[i] = text[i].slice(0, -1);
        } else if (!text[i]) {
          i--;
          text[i] = text[i].slice(0, -1);
        }
        break;
      }
    case "operate":
      while (text[0] && text[1] && text[2]) {
        x = parseFloat(text[0]);
        y = parseFloat(text[2]);
        operator = text[1];
        text = [`${operate(operator, x, y)}`, "", ""];
        i = 0;
      }
  }
  console.log(text);
  console.log(i);
  screen.textContent = text.join(" ");
});
