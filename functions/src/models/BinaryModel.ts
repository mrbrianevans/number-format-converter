import { IModel } from './IModel'

// convert between binary and decimal
const BinaryModel: IModel = {
    encode: (decimal: number) => {
        let result: string = ''
        while (decimal > 0) {
            result = String.fromCharCode((decimal % 2) + 48) + result
            decimal = Math.floor(decimal / 2)
        }
        return result
    },
    decode: (representation: string) => {
        let result: number = 0
        for (let i = 0; i < representation.length; i++) {
            const bit = representation.charCodeAt(i) - 48
            result |= bit
            result <<= 1
        }
        return result >> 1
    }
}

export default BinaryModel
