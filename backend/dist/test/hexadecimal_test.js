"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const HexadecimalModel_1 = __importDefault(require("../app/models/HexadecimalModel"));
// Hex conversion test suite, encoding to hexadecimal
describe('Convert decimal to hexadecimal', () => {
    mocha_1.it('Convert 13 to hexadecimal', () => {
        chai_1.expect(HexadecimalModel_1.default.encode(13)).to.equal('D');
    });
    mocha_1.it('Convert 27 to hexadecimal', () => {
        chai_1.expect(HexadecimalModel_1.default.encode(27)).to.equal('1B');
    });
    mocha_1.it('Convert 4 to hexadecimal', () => {
        chai_1.expect(HexadecimalModel_1.default.encode(4)).to.equal('4');
    });
});
// Decoding hexadecimal to decimal
describe('Convert hexadecimal to decimal', () => {
    mocha_1.it('Convert 1B to decimal', () => {
        chai_1.expect(HexadecimalModel_1.default.decode('1B')).to.equal(27);
    });
    mocha_1.it('Convert D to decimal', () => {
        chai_1.expect(HexadecimalModel_1.default.decode('13')).to.equal(13);
    });
    mocha_1.it('Convert 4 to decimal', () => {
        chai_1.expect(HexadecimalModel_1.default.decode('4')).to.equal(4);
    });
});
