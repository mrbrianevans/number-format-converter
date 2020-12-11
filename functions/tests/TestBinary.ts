import { expect } from 'chai'
import { converter } from '../src/controllers/corrospondingFunctions'
import BinaryModel from '../src/models/BinaryModel'

describe('binary', () => {
    it('encode', () => {
        expect(BinaryModel.encode(300)).to.equal('100101100')
    })
    it('decode', () => {
        expect(BinaryModel.decode('100101100')).to.equal(300)
    })

    it('convert', () => {
        expect(converter('300', 'decimal', 'binary')).to.equal('100101100')
        expect(converter('100101100', 'binary', 'decimal')).to.equal('300')
    })
    it('should revert to itself', () => {
        for (let i = 0; i < 1000; i++) {
            const input = Math.round(Math.random() * 1_000_000).toString()
            const output = converter(input, 'decimal', 'binary')
            expect(converter(output, 'binary', 'decimal')).to.equal(input)
        }
    })
})
