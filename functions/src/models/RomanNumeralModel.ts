import { IModel } from './IModel'

// convert between roman numerals and decimal
const RomanNumeralModel: IModel = {
    encode: (decimal: number) => {
        let arrayOfLetters = [];
		let num: number = decimal;
		let largestBase: number ;
		let quotient: number;
		let remainder: number;
		
		const arr = [
			 {I : 1},{IV: 4},{V : 5},{VI : 9},{X : 10},{XL : 40},{L : 50},{XC : 90},{C : 100},{CD : 400},{D : 500},{CM : 900},{M : 1000}
		];

		const getKey = function(value: number){ 
     
			for (let j = 0; j < arr.length; j++) {
				if(Object.values(arr[j])[0] == value){
					return Object.keys(arr[j])[0];
				}
				continue;
			}
			return;
		}
		
		for (let i = 0; i < arr.length; i++) {
			let objectsValue ;
			objectsValue = Object.values(arr[i])[0]; 
			// if the num is exaclty a letter, then return that letter:	
			if(objectsValue != undefined &&  (objectsValue  /  decimal) == 1 ){
				return Object.keys(arr[i])[0];
			}else{
				continue;
			}
		}

		for (let i = arr.length - 1; i >= 0; i--) {
			let objectsValue ;
			objectsValue = Object.values(arr[i])[0]; 


			if(objectsValue != undefined && (objectsValue) <= num ){
				largestBase = objectsValue;  
				quotient = num /largestBase;
        quotient = Math.floor(quotient)
				remainder = num - (quotient *largestBase);
				for (let k = 0; k < quotient; k++) {
          arrayOfLetters.push( getKey(largestBase));
				}
				num = remainder;
			}			
		}		
		return arrayOfLetters.join('');
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
