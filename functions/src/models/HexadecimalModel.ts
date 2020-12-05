import { IModel } from './IModel'

// convert between hexadecimal and decimal
const HexadecimalModel: IModel = {
    encode: (decimal: number) => {
        return 'F55A01'
    },
    decode: (representation: string) => {
        return 0
    }
}

export default HexadecimalModel
