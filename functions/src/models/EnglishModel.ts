import { IModel } from './IModel'

// convert between english words and decimal
const EnglishModel: IModel = {
    encode: (decimal: number) => {
        const decimalString = decimal.toString()
        if (DecimalDigitToEnglishWord.has(decimal))
            return DecimalDigitToEnglishWord.get(decimal) || 'not found'
        else if (decimalString.length === 2) {
            const tens =
                DecimalDigitToEnglishWord.get(
                    Number(decimalString.charAt(0)) * 10
                ) || 0
            const units =
                DecimalDigitToEnglishWord.get(
                    Number(decimalString.charAt(1))
                ) || 0
            if (tens === 'ten') return units + 'teen'
            else return tens + ' ' + units
        } else if (decimalString.length === 3) {
            const hundreds = DecimalDigitToEnglishWord.get(
                Number(decimalString.charAt(0))
            )
            const tensunits = EnglishModel.encode(
                Number(decimalString.slice(1))
            )
            return (
                hundreds +
                ' hundred' +
                (decimalString.slice(1) === '00' ? '' : ' and ' + tensunits)
            )
        }
        return 'Three'
    },
    decode: (representation: string) => {
        if (EnglishWordToDecimalDigit.has(representation))
            return EnglishWordToDecimalDigit.get(representation) || 0

        let result: RegExpMatchArray | null
        result = representation.match(
            /^(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fifteen|eighteen)$/i
        )
        if (result) {
            const [, singleWord] = result
            if (EnglishWordToDecimalDigit.has(singleWord))
                return EnglishWordToDecimalDigit.get(singleWord) || 0
        }
        result = representation.match(/^(four|six|seven|nine)teen$/i)
        if (result) {
            const [, singleWord] = result
            if (EnglishWordToDecimalDigit.has(singleWord))
                //plus 10 for teen
                return (EnglishWordToDecimalDigit.get(singleWord) || 0) + 10
        }
        result = representation.match(
            /^(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)( (one|two|three|four|five|six|seven|eight|nine))?$/i
        )
        if (result) {
            let sum = 0
            const [, tens, , units] = result
            if (EnglishWordToDecimalDigit.has(tens))
                sum += EnglishWordToDecimalDigit.get(tens) || 0
            if (units && EnglishWordToDecimalDigit.has(units))
                sum += EnglishWordToDecimalDigit.get(units) || 0
            return sum
        }
        result = representation.match(
            /^(one|two|three|four|five|six|seven|eight|nine) hundred( and ((twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)[ ]?(one|two|three|four|five|six|seven|eight|nine)?|((one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fifteen|eighteen)(teen)?)?))?$/i
        )
        if (result) {
            let sum = 0
            const [, hundreds, , rest] = result
            if (hundreds && EnglishWordToDecimalDigit.has(hundreds))
                sum += (EnglishWordToDecimalDigit.get(hundreds) || 0) * 100
            if (rest) sum += EnglishModel.decode(rest) // recursive call
            return sum
        }
        return 0
    }
}

const DecimalDigitToEnglishWord = new Map<number, string>()
DecimalDigitToEnglishWord.set(1, 'one')
DecimalDigitToEnglishWord.set(2, 'two')
DecimalDigitToEnglishWord.set(3, 'three')
DecimalDigitToEnglishWord.set(4, 'four')
DecimalDigitToEnglishWord.set(5, 'five')
DecimalDigitToEnglishWord.set(6, 'six')
DecimalDigitToEnglishWord.set(7, 'seven')
DecimalDigitToEnglishWord.set(8, 'eight')
DecimalDigitToEnglishWord.set(9, 'nine')
DecimalDigitToEnglishWord.set(10, 'ten')
DecimalDigitToEnglishWord.set(11, 'eleven')
DecimalDigitToEnglishWord.set(12, 'twelve')
DecimalDigitToEnglishWord.set(13, 'thirteen')
DecimalDigitToEnglishWord.set(15, 'fifteen')
DecimalDigitToEnglishWord.set(18, 'eighteen')
DecimalDigitToEnglishWord.set(20, 'twenty')
DecimalDigitToEnglishWord.set(30, 'thirty')
DecimalDigitToEnglishWord.set(40, 'forty')
DecimalDigitToEnglishWord.set(50, 'fifty')
DecimalDigitToEnglishWord.set(60, 'sixty')
DecimalDigitToEnglishWord.set(70, 'seventy')
DecimalDigitToEnglishWord.set(80, 'eighty')
DecimalDigitToEnglishWord.set(90, 'ninety')

const EnglishWordToDecimalDigit = new Map<string, number>()
EnglishWordToDecimalDigit.set('one', 1)
EnglishWordToDecimalDigit.set('two', 2)
EnglishWordToDecimalDigit.set('three', 3)
EnglishWordToDecimalDigit.set('four', 4)
EnglishWordToDecimalDigit.set('five', 5)
EnglishWordToDecimalDigit.set('six', 6)
EnglishWordToDecimalDigit.set('seven', 7)
EnglishWordToDecimalDigit.set('eight', 8)
EnglishWordToDecimalDigit.set('nine', 9)
EnglishWordToDecimalDigit.set('ten', 10)
EnglishWordToDecimalDigit.set('eleven', 11)
EnglishWordToDecimalDigit.set('twelve', 12)
EnglishWordToDecimalDigit.set('thirteen', 13)
EnglishWordToDecimalDigit.set('fifteen', 15)
EnglishWordToDecimalDigit.set('eighteen', 18)
EnglishWordToDecimalDigit.set('twenty', 20)
EnglishWordToDecimalDigit.set('thirty', 30)
EnglishWordToDecimalDigit.set('forty', 40)
EnglishWordToDecimalDigit.set('fifty', 50)
EnglishWordToDecimalDigit.set('sixty', 60)
EnglishWordToDecimalDigit.set('seventy', 70)
EnglishWordToDecimalDigit.set('eighty', 80)
EnglishWordToDecimalDigit.set('ninety', 90)
export default EnglishModel
