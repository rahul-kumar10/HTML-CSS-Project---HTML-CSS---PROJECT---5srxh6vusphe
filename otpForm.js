const input0 = document.querySelector("#zero");
const input1 = document.querySelector("#one");
const input2 = document.querySelector("#two");
const input3 = document.querySelector("#three");
const input4 = document.querySelector("#four");
const input5 = document.querySelector("#five");

const inputs = [input0, input1, input2, input3, input4, input5];

const moveFocusToNextInput = (eventOriginationInputNumber) => {
    if (eventOriginationInputNumber === 5) {
      return;
    }
  
    inputs[eventOriginationInputNumber + 1].focus();
  };
  
  const moveFocusToPreviousInput = (eventOriginationInputNumber) => {
    if (eventOriginationInputNumber === 0) {
      return;
    }
  
    inputs[eventOriginationInputNumber - 1].focus();
  };
  
  const onInputChange = (event) => {
    const inputNumber = parseInt(event.target.getAttribute("data-number"));
  
    if (event.key === "Backspace") {
      moveFocusToPreviousInput(inputNumber);
      return;
    }
  
    moveFocusToNextInput(inputNumber);
  };
  
  inputs.forEach((input) => {
    input.addEventListener("keyup", onInputChange);
  });
