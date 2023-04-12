class Calculation {
  constructor(firstValue, operator, secondValue) {
    this._firstValue = firstValue;
    this._operator = operator;
    this._secondValue = secondValue;
  }

  get firstValue() {
    return this._firstValue;
  }
  get operator() {
    return this._operator;
  }
  get secondValue() {
    return this._secondValue;
  }

  set firstValue(value) {
    if (typeof value !== 'number') {
      console.log('Error value is not a number')
      return false;
    }
    this._firstValue = value;
  }
  set operator(value) {
    this._operator = value;
  }
  set secondValue(value) {
    if (typeof value !== 'number') {
      console.log('Error value is not a number')
      return false;
    }
    this._firstValue = value;
  }

}