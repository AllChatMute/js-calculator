let a = ""; //first number
let b = ""; //second number
let sign = ""; //operation sign
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "*", "/"];

//screen
const output = document.querySelector(".output");
const calcBtns = document.querySelector(".calculator__buttons");

const clearAll = () => {
  //clear every variable
  a = "";
  b = "";
  sign = "";
  finish = false;
  output.textContent = 0;
};

calcBtns.addEventListener("click", (event) => {
  const targetClasses = event.target.classList;
  const key = event.target.textContent;

  if (targetClasses.contains("ac")) {
    clearAll();
  }

  output.textContent = "";

  //if pressed btns 0-9 or .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;

      output.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      output.textContent = b;
    } else {
      b += key;
      output.textContent = b;
    }
    return;
  }

  //if pressed action btn
  if (action.includes(key)) {
    sign = key;
    output.textContent = sign;
    return;
  }

  //if pressed equal button
  if (key === "=") {
    if (b === "") b = a;

    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "*":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          output.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
    }
    finish = true;
    output.textContent = a;
  }
});
