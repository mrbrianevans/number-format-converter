// each model needs a function to encode to that format, and decode from that format to decimal
export interface IModel {
    // function to convert a decimal number into the specified format
    encode: (decimal: number) => string
    // function to convert a number in the specified format to a decimal number
    decode: (representation: string) => number
}
