import { IModel } from './IModel'

// convert between roman numerals and decimal
const RomanNumeralModel: IModel = {
    encode: (decimal: number) => {
        let numbers: number[] = [
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
        let letters: string[] = [
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

        var final: string = ''

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
        const legend = 'IVXLCDM'
        const arr = [1, 5, 10, 50, 100, 500, 1000]
        let sum = 0

        while (representation) {
            if (
                !!representation[1] &&
                legend.indexOf(representation[0]) <
                    legend.indexOf(representation[1])
            ) {
                sum +=
                    arr[legend.indexOf(representation[1])] -
                    arr[legend.indexOf(representation[0])]
                representation = representation.substring(
                    2,
                    representation.length
                )
            } else {
                sum += arr[legend.indexOf(representation[0])]
                representation = representation.substring(
                    1,
                    representation.length
                )
            }
        }
        return sum
    }
}

export default RomanNumeralModel
