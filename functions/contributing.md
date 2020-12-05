# Contributing to backend

## General notes
Please make sure to run eslint and prettier before commiting. This ensures code style consistency, and removes potential bugs.
You can do this by running `npm run predeploy` in the `functions` folder, or individually running the scripts in `package.json`.

## Conversion models
This is a guide for writing functions for the number format converter API.

The way the API converts between all the formats, is to first convert the input into decimal, 
and then convert the decimal into the output format.

Therefore each number format needs a function to encode from decimal, and decode to decimal.

Each number format has a conversion model that follows this standard:
```typescript
interface IModel {
    // function to convert a decimal number into the specified format
    encode: (decimal: number) => string,
    // function to convert a number in the specified format to a decimal number
    decode: (representation: string) => number
}
```
This interface can be found in [src/models/IModel.ts](src/models/IModel.ts "IModel")

The structure of each model is already done for you, you just need to fill in the 
logic to make it functional.

## Encoding and decoding
For extra clarity sake:

The `encode` function must take a `Number` as an argument, and return the value of that number
encoded in the format of the model.

The `decode` function must take a string representation of a number in the format of the model
and return the decimal value as a `Number`

## Test cases
Please write test cases if you are writing a new model. 
The structure of the test suite can be seen in [TestBase64](tests/TestBase64.ts "Tests for Base64 model").

For each model (octal, binary, hex etc) there should be a test suite that checks that the conversions are correct.
This is done in two ways:
1. known outcomes
2. reverse conversion

For known outcomes, you can find some correct conversions online. For example, you could search 300 in roman numerals to find it should be CCC, and then write a test case that checks if the roman numeral model encoding of 300 is equal to CCC.
You should do at least one of these for the `encode` function and the `decode` function.

Another way of testing is to generate a random number, encode it using the model, and then decode the output to test if it gives the original random number.
This can be written once, and then looped through a thousand times.

Please make sure your test cases are passing before you pull request, as they are not checked by continuous integration actions. 
