import { IModel } from './IModel'

function isDecimalNumber(charCode: number) {
    return charCode >= 48 && charCode <= 57
}

// convert between hexadecimal and decimal
const HexadecimalModel: IModel = {
    encode: (decimal: number) => {
        let result: string = ''
        let r = 0
        while (decimal !== 0) {
            r = decimal & 0xf

            if (r >= 10 && r <= 15) {
                result += String.fromCharCode(65 + (r - 10))
            } else {
                result += String.fromCharCode(48 + r)
            }

            decimal >>= 4
        }

        return result.split('').reverse().join('')
    },
    decode: (representation: string) => {
        if (representation.startsWith('0x')) {
            representation = representation.substr(2)
        }

        let result: number = 0
        let number: number

        for (const element of representation) {
            const charCode = element.charCodeAt(0)

            if (isDecimalNumber(charCode)) {
                number = charCode - 48
            } else {
                number = charCode - 65 + 10
            }

            result = (result << 4) | (number & 0xf)
        }

        return result
    }
}

export default HexadecimalModel
