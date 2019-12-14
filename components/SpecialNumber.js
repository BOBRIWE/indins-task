export default class SpecialNumber {
  constructor(rawNumber) {
    this.rawNumber = rawNumber;
  }

  update(number) {
    this.rawNumber = number;
  }

  getNumerator() {
    if (!this.isSupportedNumber()) {
      return NaN;
    }

    if (this.isFractional()) {
      return parseInt(this.rawNumber.split('/')[0], 10);
    }

    return parseInt(this.rawNumber, 10);
  }

  getEvaluated() {
    return this.getNumerator() / this.getDenominator();
  }

  getDenominator() {
    if (!this.isSupportedNumber()) {
      return 1;
    }

    if (this.isFractional()) {
      return parseInt(this.rawNumber.split('/')[1], 10);
    }

    return 1;
  }

  isFractional() {
    return !!this.rawNumber.includes('/');
  }

  isSupportedNumber() {
    const regex = /^((-?\d+)|((-?\d+)(\/)(-?\d+)))$/;
    return regex.test(this.rawNumber);
  }
}
