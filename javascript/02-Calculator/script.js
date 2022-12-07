const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const historyValue = document.getElementById("history-value");
const outputValue = document.getElementById("output-value");

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.id === "clear") {
      displayHistory("");
      displayOutput("");
    }
    if (operator.id === "backspace") {
      let output = reverseNumberFormat(outputValue.innerText).toString();
      if (output) {
        output = output.substring(0, output.length - 1);
        displayOutput(output);
      }
    } else {
      let output = outputValue.innerText;
      let history = historyValue.innerText;
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substring(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (operator.id == "=") {
          let result = eval(history);
          displayOutput(result);
          displayHistory("");
        } else {
          history = history + operator.id;
          displayHistory(history);
          displayOutput("");
        }
      }
    }
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    var output = reverseNumberFormat(outputValue.innerText);
    if (output != NaN) {
      output = output + number.id;
      displayOutput(output);
    }
  });
});

function displayHistory(num) {
  return (historyValue.innerText = num);
}

function displayOutput(num) {
  if (num === "") {
    return (outputValue.innerText = num);
  } else {
    return (outputValue.innerText = getFormattedNumber(num));
  }
}
function getFormattedNumber(num) {
  return num === "" ? 0 : Number(num).toLocaleString("en");
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
