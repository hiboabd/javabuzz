class Javabuzz{
  constructor(){};

  isDivisibleByThree(number) {
    return number % 3 === 0;
  }

  isDivisibleByFive(number) {
    return number % 5 === 0;
  }

  _isDivisibleBy(number, divisor){
    return number % divisor === 0;
  }

  isDivisibleByFifteen(number){
    return this._isDivisibleBy(number, 15);
  }

  says(number){
    if (this.isDivisibleByFifteen(number)) {
      return "Javabuzz";
    }

    if (this.isDivisibleByThree(number)) {
      return "Java";
    }

    if (this.isDivisibleByFive(number)){
      return "Buzz";
    }
    return number 
  }
}
