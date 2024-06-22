document.getElementById("bt").addEventListener("click", function () {
    var sidebar = document.getElementById("sidebar");
    var button = document.getElementById("bt");
    if (sidebar.style.left === "-30%") {
      sidebar.style.left = "0";
      button.innerHTML = "&#9664;"; // 오른쪽 화살표
      button.style.transform = "translateX(30%)"; // 버튼을 사이드바 오른쪽으로 이동
    } else {
      sidebar.style.left = "-30%";
      button.innerHTML = "&#9654;"; // 왼쪽 화살표
      button.style.transform = "translateX(0)"; // 버튼을 원래 위치로 이동
    }
  });
  
  class clcl {
    constructor(calculatorScreen) {
      this.calculatorScreen = calculatorScreen;
      this.reset();
    }
  
    reset() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
      this.updateScreen();
    }
  
    appendNumber(number) {
      if (number === "." && this.currentOperand.includes(".")) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
      this.updateScreen();
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === "" && operation !== '(' && operation !== ')') return;
      if (this.previousOperand !== "" && operation !== '(' && operation !== ')') {
        this.compute();
      }
      if (operation === '%') {
        this.currentOperand = (parseFloat(this.currentOperand) / 100).toString();
        this.updateScreen();
        return;
      }
      if (operation === '(' || operation === ')') {
        this.currentOperand += operation;
        this.updateScreen();
        return;
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }
  
    compute() {
      try {
        let computation = eval(this.previousOperand + this.operation + this.currentOperand);
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = "";
        this.updateScreen();
      } catch {
        this.currentOperand = "Error";
        this.updateScreen();
      }
    }
  
    updateScreen() {
      this.calculatorScreen.value = this.currentOperand;
    }
  }
  
  const calculator = new clcl(document.querySelector(".clcl-screen"));
  
  const keys = document.querySelector(".clcl-keys");
  keys.addEventListener("click", (event) => {
    const { target } = event;
    const { value } = target;
    if (!target.matches("button")) return;
  
    switch (value) {
      case "all-clear":
        calculator.reset();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
      case "(":
      case ")":
        calculator.chooseOperation(value);
        break;
      case "=":
        calculator.compute();
        break;
      default:
        calculator.appendNumber(value);
        break;
    }
  });
  