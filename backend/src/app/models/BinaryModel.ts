import {IModel} from "./IModel";

// convert between binary and decimal
export const BinaryModel: IModel = {
    encode: (decimal: number) => {

        return "10111"
    },
    decode: (representation: string) => {

        return 0
    }
}
