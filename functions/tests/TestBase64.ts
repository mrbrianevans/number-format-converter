import { expect } from 'chai'
import { converter } from '../src/controllers/corrospondingFunctions'
import Base64Model from '../src/models/Base64Model'

describe('base64', () => {
    it('encode', () => {
        expect(Base64Model.encode(300)).to.equal('4I')
    })
    it('decode', () => {
        expect(Base64Model.decode('4I')).to.equal(300)
    })
    it('convert', () => {
        expect(converter('300', 'decimal', 'base64')).to.equal('4I')
        expect(converter('4I', 'base64', 'decimal')).to.equal('300')
    })
    it('should revert to itself', () => {
        for (let i = 0; i < 1000; i++) {
            const input = Math.round(Math.random() * 1_000_000).toString()
            const output = converter(input, 'decimal', 'base64')
            expect(converter(output, 'base64', 'decimal')).to.equal(input)
        }
    })
})
