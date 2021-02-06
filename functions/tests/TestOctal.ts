import { expect } from 'chai'
import { converter } from '../src/controllers/corrospondingFunctions'
import OctalModel from '../src/models/OctalModel'

describe('octal', function () {
    this.timeout(20_000)
    it('encode', () => {
        expect(OctalModel.encode(644)).to.equal('1204')
    })
    it('decode', () => {
        expect(OctalModel.decode('7126')).to.equal(3670)
    })
    it('convert', () => {
        expect(converter('3670', 'decimal', 'octal')).to.equal('7126')
        expect(converter('7126', 'octal', 'decimal')).to.equal('3670')
    })
    it('should revert to itself', () => {
        for (let i = 0; i < 1_000_000; i++) {
            const input = i.toString()
            const output = converter(input, 'decimal', 'octal')
            expect(converter(output, 'octal', 'decimal')).to.equal(input)
        }
    })
})
