import { IModel } from "./IModel";

// convert between octal and decimal
const OctalModel: IModel = {
    encode: (decimal: number) => {
        let octal: string = ''
        const octalDigits = Math.floor(Math.log(decimal) / Math.log(8))
        for (let digit = octalDigits; digit >= 0; digit--) {
            const octalAddition = Math.floor(decimal / Math.pow(8, digit))
            decimal -= octalAddition * Math.pow(8, digit)
            octal += octalAddition
        }
        return octal
    },
    decode: (representation: string) => {
        let decimal: number = 0
        for (let i = 0; i < representation.length; i++) {
            const digit: number = Number(
                representation.charAt(representation.length - i - 1)
            )
            decimal += digit * Math.pow(8, i)
        }
        return decimal
    }
}

export default OctalModel
