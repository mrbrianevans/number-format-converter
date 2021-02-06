import { expect } from 'chai'
// import { converter } from '../src/controllers/corrospondingFunctions'
import EnglishModel from '../src/models/EnglishModel'

describe('english', () => {
    it('encode', () => {
        // expect(EnglishModel.encode(1)).to.equal('one')
        // expect(EnglishModel.encode(2)).to.equal('two')
        // expect(EnglishModel.encode(3)).to.equal('three')
        // expect(EnglishModel.encode(4)).to.equal('four')
        // expect(EnglishModel.encode(5)).to.equal('five')
    })
    it('decode', () => {
        expect(EnglishModel.decode('one')).to.equal(1)
        expect(EnglishModel.decode('two')).to.equal(2)
        expect(EnglishModel.decode('three')).to.equal(3)
        expect(EnglishModel.decode('four')).to.equal(4)
        expect(EnglishModel.decode('five')).to.equal(5)
        expect(EnglishModel.decode('six')).to.equal(6)
        expect(EnglishModel.decode('seven')).to.equal(7)
        expect(EnglishModel.decode('eight')).to.equal(8)
        expect(EnglishModel.decode('nine')).to.equal(9)
        expect(EnglishModel.decode('ten')).to.equal(10)
        expect(EnglishModel.decode('eleven')).to.equal(11)
        expect(EnglishModel.decode('twelve')).to.equal(12)
        expect(EnglishModel.decode('thirteen')).to.equal(13)
        expect(EnglishModel.decode('fourteen')).to.equal(14)
        expect(EnglishModel.decode('fifteen')).to.equal(15)
        expect(EnglishModel.decode('sixteen')).to.equal(16)
        expect(EnglishModel.decode('seventeen')).to.equal(17)
        expect(EnglishModel.decode('eighteen')).to.equal(18)
        expect(EnglishModel.decode('nineteen')).to.equal(19)
        expect(EnglishModel.decode('twenty')).to.equal(20)
        expect(EnglishModel.decode('twenty one')).to.equal(21)
        expect(EnglishModel.decode('twenty two')).to.equal(22)
        expect(EnglishModel.decode('twenty three')).to.equal(23)
        expect(EnglishModel.decode('thirty nine')).to.equal(39)
        expect(EnglishModel.decode('forty eight')).to.equal(48)
        expect(EnglishModel.decode('fifty')).to.equal(50)
        expect(EnglishModel.decode('sixty five')).to.equal(65)
        expect(EnglishModel.decode('seventy six')).to.equal(76)
        expect(EnglishModel.decode('eighty four')).to.equal(84)
        expect(EnglishModel.decode('ninety nine')).to.equal(99)
        expect(EnglishModel.decode('one hundred')).to.equal(100)
        expect(EnglishModel.decode('one hundred and one')).to.equal(101)
        expect(EnglishModel.decode('one hundred and two')).to.equal(102)
        expect(EnglishModel.decode('one hundred and ten')).to.equal(110)
        expect(EnglishModel.decode('one hundred and twenty one')).to.equal(121)
        expect(EnglishModel.decode('one hundred and thirty')).to.equal(130)
        expect(EnglishModel.decode('two hundred and fifty six')).to.equal(256)
        expect(EnglishModel.decode('five hundred and twelve')).to.equal(512)
        expect(EnglishModel.decode('seven hundred and seventy seven')).to.equal(
            777
        )
        expect(EnglishModel.decode('nine hundred and nineteen')).to.equal(919)
    })
    it('convert', () => {
        // expect(converter('5', 'decimal', 'english')).to.equal('five')
        // expect(converter('five', 'english', 'decimal')).to.equal('5')
    })
    it('should revert to itself', () => {
        // for (let i = 0; i < 1000; i++) {
        //     const input = Math.round(Math.random() * 1_000_000).toString()
        //     const output = converter(input, 'decimal', 'english')
        //     expect(converter(output, 'english', 'decimal')).to.equal(input)
        // }
    })
})
