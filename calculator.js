class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    const resultAdd = this.num1 + this.num2;
    return resultAdd;
  }

  substract() {
    const resultSubs = this.num1 - this.num2;
    return resultSubs;
  }

  divide() {
    if (this.num1 === 0 && this.num2 === 0) {
      return 'undefined, it is no posible to divide 0/0';
    } if (this.num2 === 0) {
      return 'undefined, It is no posible to divide by 0';
    } else {
      const resultDiv = this.num1 / this.num2;
      return resultDiv;
    }
  }

  multiply() {
    const resultMult = this.num1 * this.num2;
    return resultMult;
  }
}

module.exports = Calculator;
