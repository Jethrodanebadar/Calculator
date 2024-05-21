let number_buttons = document.querySelectorAll(".number-buttons");
let displayfield = document.querySelector("#input-field");
let operation = document.querySelectorAll(".operation-buttons");
displayValue = "";
let n1 = "";
let n2 = "";
let operator = "";

function clearCalculator() {
    displayfield.value = "";
    displayValue = "";
    n1 = "";
    n2 = "";
    operator = "";
}

number_buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.textContent == "C") {
      clearCalculator();
    } else if (button.textContent == "=") {
        n2 = parseFloat(displayValue);
      operate(parseFloat(n1), parseFloat(n2), operator);
      
    } else {
      displayfield.value += button.textContent;
      displayValue = displayfield.value
    }
  })
);

operation.forEach((button) =>
  button.addEventListener("click", () => {
    if (displayValue !== "") {
      n1 = parseFloat(displayValue);
      operator = button.textContent;
      displayfield.value = ''
      displayValue = ""
    } else {
        console.log("please enter a number");
        displayValue = "please enter a number";
    } 
  })
);

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
    if(n2===0){
       return alert( n1 + "cannot be divided by zero")
    }
  return n1 / n2;
}

function operate(n1, n2, operator) {
    let result;

    switch(operator){
        case '+':
            result =  add(n1,n2);
            break;
        case '-':
            result = subtract(n1, n2);
            break;
        case 'x':
            result = multiply(n1,n2);
            break;
        case '%':
            result = divide(n1,n2);
            break;
    }
    final_result = result.toPrecision(10)
    displayValue = final_result
displayfield.value = final_result
    
}
