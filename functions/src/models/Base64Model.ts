import {IModel} from './IModel';

// convert between base64 and decimal
const Base64Model: IModel = {
  encode: (decimal: number) => {
    const order: string =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'
    const base: number = order.length
    let str: string = ''
    let r: number
    while (decimal) {
      r = decimal % base;
      decimal -= r
      decimal /= base
      str = order.charAt(r) + str
    }
    return str;
  },
  decode: (representation: string) => {
    const order: string =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'
    const base: number = order.length
    let num: number = 0
    let r: number
    while (representation.length) {
      r = order.indexOf(representation.charAt(0))
      representation = representation.substr(1)
      num *= base
      num += r
    }
    return num
  },
}

export default Base64Model;
