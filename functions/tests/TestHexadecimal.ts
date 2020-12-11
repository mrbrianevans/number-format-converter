import { expect } from 'chai'
import { converter } from '../src/controllers/corrospondingFunctions'
import HexadecimalModel from '../src/models/HexadecimalModel'

describe('hexadecimal', () => {
    it('encode', () => {
        expect(HexadecimalModel.encode(300)).to.equal('12C')
    })
    it('decode', () => {
        expect(HexadecimalModel.decode('12C')).to.equal(300)
        expect(HexadecimalModel.decode('12c')).to.equal(300)
    })
    it('decode with 0x', async () => {
        expect(HexadecimalModel.decode('0x12C')).to.equal(300)
    })
    it('convert', () => {
        expect(converter('300', 'decimal', 'hexadecimal')).to.equal('12C')
        expect(converter('12C', 'hexadecimal', 'decimal')).to.equal('300')
    })
    it('should revert to itself', () => {
        for (let i = 0; i < 1000; i++) {
            const input = Math.round(Math.random() * 1_000_000).toString()
            const output = converter(input, 'decimal', 'hexadecimal')
            expect(converter(output, 'hexadecimal', 'decimal')).to.equal(input)
        }
    })
})
