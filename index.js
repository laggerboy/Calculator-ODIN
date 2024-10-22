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
let oper = ["", "", ""];
let i = 0;
buttons.addEventListener("click", function () {
  switch (event.target.className) {
    //numbers

    case "1":
      oper[i] += "1";
      break;
    case "2":
      oper[i] += "2";
      break;
    case "3":
      oper[i] += "3";
      break;
    case "4":
      oper[i] += "4";
      break;
    case "5":
      oper[i] += "5";
      break;
    case "6":
      oper[i] += "6";
      break;
    case "7":
      oper[i] += "7";
      break;
    case "8":
      oper[i] += "8";
      break;
    case "9":
      oper[i] += "9";
      break;
    case "0":
      oper[i] += "0";
      break;
    case "point":
      if (!oper[i].includes(".")) oper[i] += ".";
      break;

    //operators

    case "add":
      if (oper[i]) {
        i++;
        oper[i] = "+";
        i++;
      } else if (i === 1) {
        oper[i] = "+";
        i++;
      }
      break;
    case "subtract":
      if (oper[i]) {
        i++;
        oper[i] = "-";
        i++;
      } else if (i === 1) {
        oper[i] = "-";
        i++;
      } else if (!oper[i]) {
        oper[i] += "-";
      }
      break;
    case "multiply":
      if (oper[i]) {
        i++;
        oper[i] = "*";
        i++;
      } else if (i === 1) {
        oper[i] = "*";
        i++;
      }
      break;
    case "devide":
      if (oper[i]) {
        i++;
        oper[i] = "/";
        i++;
      } else if (i === 1) {
        oper[i] = "/";
        i++;
      }
      break;

    //other

    case "clear":
      oper = ["", "", ""];
      i = 0;
      break;
    case "remove":
      if (oper[i]) {
        oper[i] = oper[i].slice(0, -1);
      } else {
        i--;
        oper[i] = oper[i].slice(0, -1);
      }
      break;

    case "equal":
      solve(oper);
  }
  if (oper[3]) {
    let temp = oper[3];
    solve();
    i = 2;
    oper[1] = temp;
  }
  console.log(oper);
  console.log(i);
  screen.textContent = oper.join(" ");
});

function solve(array) {
  while (oper[0] && oper[1] && oper[2]) {
    if (oper[1] === "/" && oper[2] === "0") {
      alert("Can't devide by zero");
      oper = ["", "", ""];
      i = 0;
    } else {
      x = parseFloat(oper[0]);
      y = parseFloat(oper[2]);
      operator = oper[1];
      oper = [`${operate(operator, x, y)}`, "", ""];
      i = 0;
    }
  }
}
