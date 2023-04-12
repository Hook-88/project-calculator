const calculation = {
  firstValueString: '',
  firstValueNumber: 0,
  operator: false,
  secondValueString: '',
  secondValueNumber: 0,

  numberButtons: Array.from(document.querySelectorAll('.numberButton')),
  operatorButtons: Array.from(document.querySelectorAll('.operator-button')),

  addCharToString (char) {
    if (!this.operator) {
      this.firstValueString += char;
    } else {
      this.secondValueString += char;
    }
  },
  handleNumberButtons() {
    this.numberButtons.forEach(function (numberButton) {
      numberButton.addEventListener('click', function (e) {
        calculation.addCharToString(e.target.value);
      })
    })
  },
  handleClearButton() {
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', function () {
      calculation.firstValueString = '';
      calculation.operator = false;
    })
  },
  setFirstValueNumber(){
    this.firstValueNumber = parseFloat(this.firstValueString);
    this.firstValueString = ''; 
  },

  handleOperatorButtons() {
    this.operatorButtons.forEach(function (operatorButton) {
      operatorButton.addEventListener('click', function (e) {
        calculation.operator = e.target.value;
        calculation.setFirstValueNumber();
      })
    })
  },
  startCalculator() {
    this.handleNumberButtons();
    this.handleClearButton();
    this.handleOperatorButtons();
  }
}

calculation.startCalculator();
