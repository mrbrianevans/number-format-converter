import {IModel} from "./IModel";

// convert between roman numerals and decimal
const RomanNumeralModel: IModel = {
    encode: (decimal: number) => {

        return "XVI"
    },
    decode: (representation: string) => {

        return 0
    },
}

export default RomanNumeralModel
