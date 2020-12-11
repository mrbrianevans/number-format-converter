import { IModel } from './IModel'

// convert between hexadecimal and decimal
const HexadecimalModel: IModel = {
    encode: (decimal: number) => {
        return decimal.toString(16).toUpperCase()
    },
    decode: (representation: string) => {
        if (!representation.startsWith('0x')) {
            representation = '0x' + representation
        }
        return Number(representation)
    }
}

export default HexadecimalModel
