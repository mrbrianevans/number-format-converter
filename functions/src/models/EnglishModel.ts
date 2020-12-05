import { IModel } from './IModel'

// convert between english words and decimal
const EnglishModel: IModel = {
    encode: (decimal: number) => {
        return 'Three'
    },
    decode: (representation: string) => {
        return 0
    },
}

export default EnglishModel
