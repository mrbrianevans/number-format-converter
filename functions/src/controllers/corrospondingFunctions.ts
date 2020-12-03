import BinaryModel from "../models/BinaryModel";
import HexadecimalModel from "../models/HexadecimalModel";
import {IModel} from "../models/IModel";
import OctalModel from "../models/OctalModel";
import DecimalModel from "../models/DecimalModel";
import DuodecimalModel from "../models/DuodecimalModel";
import Base64Model from "../models/Base64Model";
import RomanNumeralModel from "../models/RomanNumeralModel";
import EnglishModel from "../models/EnglishModel";

// this object maps each number type(string) to the model associated with it
export const functionsMapper: { [key: string]: IModel } = {
    "binary": BinaryModel,
    "octal": OctalModel,
    "decimal": DecimalModel,
    "duodecimal": DuodecimalModel,
    "hexadecimal": HexadecimalModel,
    "base64": Base64Model,
    "roman": RomanNumeralModel,
    "english": EnglishModel,
}

// this function takes the input string, and the two formats, and returns a converted number
export const converter: (representation: string, inputFormat: string, outputFormat: string) => string
    = (representation, inputFormat, outputFormat) => {
    // convert whatever form is input into a decimal number
    const decimalForm: number = functionsMapper[inputFormat].decode(representation)
    // return the decimal converted into the target form
    return functionsMapper[outputFormat].encode(decimalForm)
}
