import { expect } from 'chai'
import { converter } from '../src/controllers/corrospondingFunctions'
import RomanNumeralModel from '../src/models/RomanNumeralModel'

describe('roman numeral', () => {
    it('encode', () => {
        expect(RomanNumeralModel.encode(300)).to.equal('CCC')
    })
    it('decode', () => {
        expect(RomanNumeralModel.decode('CCC')).to.equal(300)
    })
    it('convert', () => {
        expect(converter('300', 'decimal', 'roman')).to.equal('CCC')
        expect(converter('CCC', 'roman', 'decimal')).to.equal('300')
    })
    it('should revert to itself', () => {
        for (let i = 0; i < 1000; i++) {
            const input = Math.round(Math.random() * 3_999).toString()
            const output = converter(input, 'decimal', 'roman')
            expect(converter(output, 'roman', 'decimal')).to.equal(input)
        }
    })
})
