import Test from './test';

describe ('Test', () => {
  it ('should return hello', () => {
    // Arrange
    const test = new Test();

    // Act
    const result = test.hello();

    // Assert
    expect (result).toEqual(true);
  });
});
