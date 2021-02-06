import { expect } from 'chai'
import { converter } from '../src/controllers/corrospondingFunctions'
import Base64Model from '../src/models/Base64Model'

describe('base64', function () {
    this.timeout(20_000)
    // test encoding decimal numbers into base64 with a known outcome
    it('encode', () => {
        expect(Base64Model.encode(300)).to.equal('4I')
    })

    //test decoding base64 into a decimal number with a known outcome
    it('decode', () => {
        expect(Base64Model.decode('4I')).to.equal(300)
    })

    // test using the converter function which is used by the API
    it('converter function', () => {
        expect(converter('300', 'decimal', 'base64')).to.equal('4I')
        expect(converter('4I', 'base64', 'decimal')).to.equal('300')
    })

    // test random numbers by encoding, and then decoding to get the initial value
    it('should revert to itself', () => {
        for (let i = 0; i < 1_000_000; i++) {
            const input = i.toString()
            const output = converter(input, 'decimal', 'base64')
            expect(converter(output, 'base64', 'decimal')).to.equal(input)
        }
    })
})
