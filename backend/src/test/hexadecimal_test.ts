import 'mocha'
import {it} from "mocha"
import {expect} from "chai"
import HexadecimalModel from "../app/models/HexadecimalModel";

// Hex conversion test suite, encoding to hexadecimal
describe('Convert decimal to hexadecimal', () => {
    it('Convert 13 to hexadecimal', () => {
        expect(HexadecimalModel.encode(13)).to.equal('D')
    })
    it('Convert 27 to hexadecimal', () => {
        expect(HexadecimalModel.encode(27)).to.equal('1B')
    })
    it('Convert 4 to hexadecimal', () => {
        expect(HexadecimalModel.encode(4)).to.equal('4')
    })
})

// Decoding hexadecimal to decimal
describe('Convert hexadecimal to decimal', () => {
    it('Convert 1B to decimal', () => {
        expect(HexadecimalModel.decode('1B')).to.equal(27)
    })
    it('Convert D to decimal', () => {
        expect(HexadecimalModel.decode('13')).to.equal(13)
    })
    it('Convert 4 to decimal', () => {
        expect(HexadecimalModel.decode('4')).to.equal(4)
    })
})