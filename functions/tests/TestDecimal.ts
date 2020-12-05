import { expect } from 'chai'
import { converter } from '../src/controllers/corrospondingFunctions'
import DecimalModel from '../src/models/DecimalModel'

describe('decimal', () => {
    it('encode', () => {
        expect(DecimalModel.encode(300)).to.equal('300')
    })
    it('decode', () => {
        expect(DecimalModel.decode('300')).to.equal(300)
    })
    it('convert', () => {
        expect(converter('300', 'decimal', 'decimal')).to.equal('300')
        expect(converter('400', 'decimal', 'decimal')).to.equal('400')
    })
    it('should revert to itself', () => {
        for (let i = 0; i < 1000; i++) {
            const input = Math.round(Math.random() * 1_000_000).toString()
            const output = converter(input, 'decimal', 'decimal')
            expect(converter(output, 'decimal', 'decimal')).to.equal(input)
        }
    })
})
