const calculation = {
  firstValueString: '',
  firstValueNumber: 0,
  operator: false,
  secondStringValue: '',
  secondValueNumber: 0,

  numberButtons: Array.from(document.querySelectorAll('.numberButton')),
  operatorButtons: [],

  addCharToString (char) {
    if (!this.operator) {
      this.firstValueString += char;
    } else {
      this.secondStringValue += char;
    }
  },
  handleNumberButtons() {
    this.numberButtons.forEach(function (numberButton) {
      numberButton.addEventListener('click', function (e) {
        calculation.addCharToString(e.target.value);
        console.log(calculation.firstValueString);
      })
    })
  },
  handleClearButton() {
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', function () {
      calculation.firstValueString = '';
      console.log(calculation.firstValueString);
    })
  },
  startCalculator() {
    this.handleNumberButtons();
    this.handleClearButton();
  }
}

calculation.startCalculator();
