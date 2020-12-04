import { IModel } from './IModel';

// convert between base64 and decimal
const Base64Model: IModel = {
  encode: (decimal: number) => {
    var order =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
    var base = order.length;
    var str = '',
      r;
    while (decimal) {
      r = decimal % base;
      decimal -= r;
      decimal /= base;
      str = order.charAt(r) + str;
    }
    return str;
  },
  decode: (representation: string) => {
    const order =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
    const base = order.length;
    let num = 0,
      r;
    while (representation.length) {
      r = order.indexOf(representation.charAt(0));
      representation = representation.substr(1);
      num *= base;
      num += r;
    }
    return num;
  },
};

export default Base64Model;
