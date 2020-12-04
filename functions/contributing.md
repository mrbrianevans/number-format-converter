# Contributing to backend

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
