import {sayHello} from "../hello.js";

test('valid string should return hello + string', () => {
  // arrange
  const stringToBeTested = "Manu";
  const expectedResult = "Hello Manu";

  // act
  const callResult = sayHello(stringToBeTested);

  // assert
  expect(callResult).toBe(expectedResult);
});

test('string as length of 0', () => {
  // arrange
  const stringToBeTested = new String;
  const expectedResult = "Name must have max 30 characters and min 1 character.";
  let error;

  // act
  try {
    sayHello(stringToBeTested);
  } catch (err) {
    error = err;
  }

  // assert
  expect(error).toBe(expectedResult);
});

test('string as length more than 30', () => {
    // arrange
    const stringToBeTested = "This string is longer than 30 characters";
    const expectedResult = "Name must have max 30 characters and min 1 character.";
    let error;
  
    // act
    try {
      sayHello(stringToBeTested);
    } catch (err) {
      error = err;
    }
  
    // assert
    expect(error).toBe(expectedResult);
});

test('value not string but integer', () => {
  // arrange
  const valueToBeTested = 666;
  const expectedResult = "Parameter name must be an instance of String.";
  let error;

  // act
  try {
    sayHello(valueToBeTested);
  } catch (err) {
    error = err;
  }

  // assert
  expect(error).toBe(expectedResult);
});

test('value not string but object', () => {
  // arrange
  const valueToBeTested = String.class;
  const expectedResult = "Parameter name must be an instance of String.";
  let error;

  // act
  try {
    sayHello(valueToBeTested);
  } catch (err) {
    error = err;
  }

  // assert
  expect(error).toBe(expectedResult);
});