import 'mocha'
import {it} from "mocha"
import {expect} from "chai"
import BinaryModel from "../src/app/models/BinaryModel";

// Binary conversion test suite, encoding to binary
describe('Convert decimal to binary', () => {
    it('Convert 13 to binary', () => {
        expect(BinaryModel.encode(13)).to.equal('10111')
    })
    it('Convert 27 to binary', () => {
        expect(BinaryModel.encode(27)).to.equal('10111')
    })
    it('Convert 4 to binary', () => {
        expect(BinaryModel.encode(4)).to.equal('10111')
    })
})

// Decoding binary to decimal
describe('Convert binary to decimal', () => {
    it('Convert 10111 to decimal', () => {
        expect(BinaryModel.decode('10111')).to.equal(0)
    })
    it('Convert 10111 to decimal', () => {
        expect(BinaryModel.decode('10111')).to.equal(0)
    })
    it('Convert 10111 to decimal', () => {
        expect(BinaryModel.decode('10111')).to.equal(0)
    })
})