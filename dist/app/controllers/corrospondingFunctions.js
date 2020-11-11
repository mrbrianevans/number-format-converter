"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.convert = exports.functionsMapper = void 0;
const BinaryModel_1 = __importDefault(require("../models/BinaryModel"));
const HexadecimalModel_1 = __importDefault(require("../models/HexadecimalModel"));
// this object maps each number type to the model associated with it
exports.functionsMapper = {
    "binary": BinaryModel_1.default,
    "hexadecimal": HexadecimalModel_1.default
};
// this function takes the input string, and the two formats, and returns a converted number
exports.convert = (representation, inputFormat, outputFormat) => {
    // convert whatever form is input into a decimal number
    const decimalForm = exports.functionsMapper[inputFormat].decode(representation);
    // return the decimal converted into the target form
    return exports.functionsMapper[outputFormat].encode(decimalForm);
};
