import { IModel } from './IModel'

// convert between roman numerals and decimal
const RomanNumeralModel: IModel = {
    encode: (decimal: number) => {
        if (decimal >= 4000)
            throw new Error('Exceeded maximum roman numeral size')
        const numbers: number[] = [
            1000,
            900,
            500,
            400,
            100,
            90,
            50,
            40,
            10,
            9,
            5,
            4,
            1
        ]
        const letters: string[] = [
            'M',
            'CM',
            'D',
            'CD',
            'C',
            'XC',
            'L',
            'XL',
            'X',
            'IX',
            'V',
            'IV',
            'I'
        ]

        let final: string = ''

        for (let index: number = 0; index < numbers.length; index++) {
            //compare the paramater number and the numbers in the array
            while (numbers[index] <= decimal) {
                final += letters[index]
                decimal -= numbers[index]
            }
        }
        return final
    },

    decode: (representation: string) => {
		let inputString = representation.toUpperCase()
        const legend = 'IVXLCDM'
        const arr = [1, 5, 10, 50, 100, 500, 1000]
        let sum = 0

        while (inputString) {
            if (
                inputString.length > 1 &&
                legend.indexOf(inputString[0]) <
                    legend.indexOf(inputString[1])
            ) {
                sum +=
                    arr[legend.indexOf(inputString[1])] -
                    arr[legend.indexOf(inputString[0])]
                inputString = inputString.substring(
                    2,
                    inputString.length
                )
            } else {
                sum += arr[legend.indexOf(inputString[0])]
                inputString = inputString.substring(
                    1,
                    inputString.length
                )
            }
        }
        if (sum >= 4000) throw new Error('Exceeded maximum roman numeral size')
        return sum
    }
}

export default RomanNumeralModel
