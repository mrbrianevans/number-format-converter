import { IModel } from "./IModel";

// convert between base 12 (duodecimal) and decimal
const DuodecimalModel: IModel = {
    encode: (decimal: number) => {
        return '3AB'
    },
    decode: (representation: string) => {
        return 0
    }
}

export default DuodecimalModel
