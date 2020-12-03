import {IModel} from "./IModel";

// convert between decimal and decimal
const DecimalModel: IModel = {
    encode: (decimal: number) => {
        return decimal.toString()
    },
    decode: (representation: string) => {
        return Number(representation)
    },
}

export default DecimalModel
