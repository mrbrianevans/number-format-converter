import {BinaryModel} from "../models/BinaryModel";
import {HexadecimalModel} from "../models/HexadecimalModel";
import {IModel} from "../models/IModel";

// this object maps each number type to the model associated with it
export const functionsMapper: { [key: string]: IModel } = {
    "binary": BinaryModel,
    "hexadecimal": HexadecimalModel
}

// this function takes the input string, and the two formats, and returns a converted number
export const convert: (representation: string, inputFormat: string, outputFormat: string) => string
    = (representation, inputFormat, outputFormat) => {
    // convert whatever form is input into a decimal number
    const decimalForm: number = functionsMapper[inputFormat].decode(representation)
    // return the decimal converted into the target form
    return functionsMapper[outputFormat].encode(decimalForm)
}
