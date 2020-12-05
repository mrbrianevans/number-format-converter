import { IModel } from './IModel'

// convert between octal and decimal
const OctalModel: IModel = {
    encode: (decimal: number) => {
        return '657'
    },
    decode: (representation: string) => {
        return 0
    },
}

export default OctalModel
