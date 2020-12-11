import { expect } from 'chai'
import { converter } from '../src/controllers/corrospondingFunctions'
import BinaryModel from '../src/models/BinaryModel'

describe('binary', () => {
    it('encode', () => {
        expect(BinaryModel.encode(300)).to.equal('100101100')
        expect(BinaryModel.encode(314)).to.equal('100111010')
        expect(BinaryModel.encode(159)).to.equal('10011111')
        expect(BinaryModel.encode(265)).to.equal('100001001')
        expect(BinaryModel.encode(357)).to.equal('101100101')
    })
    it('decode', () => {
        expect(BinaryModel.decode('100101100')).to.equal(300)
        expect(BinaryModel.decode('100111010')).equal(314)
        expect(BinaryModel.decode('10011111')).equal(159)
        expect(BinaryModel.decode('100001001')).equal(265)
        expect(BinaryModel.decode('101100101')).equal(357)
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
