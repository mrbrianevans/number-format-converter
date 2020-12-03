import {IModel} from "./IModel";

// convert between base64 and decimal
const Base64Model: IModel = {
    encode: (decimal: number) => {

        return "Mw=="
    },
    decode: (representation: string) => {

        return 0
    },
}

export default Base64Model
