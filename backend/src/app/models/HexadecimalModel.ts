import {IModel} from "./IModel";

// convert between hexadecimal and decimal
export const HexadecimalModel: IModel = {
    encode: (decimal: number) => {

        return "F55A01"
    },
    decode: (representation: string) => {

        return 0
    }
}
