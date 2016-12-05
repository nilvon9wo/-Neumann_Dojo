import Calculator from "./calculator";
import iit = testing.iit;

describe ('Calculator', () => {
  describe ('add', () => {
    it ('should return 0 for empty', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add('');

      // Assert
      expect (result).toEqual(0);
    });

    it ('should return the value for a single number', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add('1');

      // Assert
      expect (result).toEqual(1);
    });

    it ('should return the sum of two numbers', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add('1,2');

      // Assert
      expect (result).toEqual(3);
    });

    it ('should return the sum of three numbers', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add('1,2,3');

      // Assert
      expect (result).toEqual(6);
    });

    it ('should return the sum of tem numbers', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add('1,2,3 ,1,2,3,1,2,3,1');

      // Assert
      expect (result).toEqual(19);
    });

    it ('should return the sum when separated by new lines', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add('1\n2');

      // Assert
      expect (result).toEqual(3);
    });

    it ('should return the sum when separators are mixed', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add('1\n2,3');

      // Assert
      expect (result).toEqual(6);
    });

    it ('should support delimteds defined before the first new line', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const result = calculator.add('//#\n1#2');

      // Assert
      expect (result).toEqual(3);
    });
  });
  describe ('findDelimiter', () => {
    it ('should return a , false tuple when the string does not start with //y', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const [resultDelimiter, resultIsCustom] = calculator.findDelimiter('');

      // Assert
      expect (resultDelimiter).toEqual(',');
      expect (resultIsCustom).toEqual(false);
    });
    it ('should give isCustom a value of true when the string does starts with //y', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const [resultDelimiter, resultIsCustom] = calculator.findDelimiter('//');

      // Assert
      expect (resultIsCustom).toEqual(true);
    });
    it ('should return correct delimiter when the value of true when the string does starts with //y', () => {
      // Arrange
      const calculator = new Calculator();

      // Act
      const [resultDelimiter, resultIsCustom] = calculator.findDelimiter('//#');

      // Assert
      expect (resultDelimiter).toEqual('#');
    });
  });
});
