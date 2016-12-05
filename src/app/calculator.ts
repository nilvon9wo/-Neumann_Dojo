/*
Create a simple String calculator with the method: Int add(numbers: String)
The method can take 0, 1 or 2 numbers in a single string argument
It returns the sum of the numbers
For an empty string it will return 0
Examples:
  add(„”) returns 0
add(„1”) returns 1
add(„1,2”) returns 3
*/


import Any = jasmine.Any;
class Calculator {
  public add(numbers: String): Integer {
    if (!numbers) {
      return 0;
    }

    const [delimiter, isCustom] = this.findDelimiter(numbers);
    const revisedString = numbers.replace('\n',',');
    let numberList = revisedString.split(delimiter);
    if (isCustom) {
      numberList.pop();
    }

    let sum = 0;
    numberList.forEach((x: Integer) => {
      sum += +x.trim();
    });

    return sum;
  }

  public findDelimiter (input: String): [String,Boolean] {
    const inputList = input.split('/n');
    if (inputList[0].startsWith('/')) {
      return [inputList[0].substr(2), true];
    }
    return [',', false];
  }
}

export default Calculator;
