import {IModel} from "./IModel";

// convert between binary and decimal
const BinaryModel: IModel = {
    encode: (decimal: number) => {

        return "10111"
    },
    decode: (representation: string) => {

        return 0
    },
}

export default BinaryModel
