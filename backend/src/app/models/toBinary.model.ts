import express, { Application, Request, Response, NextFunction } from "express";

interface data {
  data: string;
}



const randomFunction = () =>{
  return 5;
}


export default class Tobinary{
    private variable: string;

    constructor(variable:data){
        this.variable = variable.data; 
    }

    // create method:
    static fromDecimal(thenumber : any, result:any) {
      // code here: //
      let newNumber:number = parseInt(thenumber); // convert the number from string to Integer

      randomFunction(); // call another function here if you wish

      // .. do some computation
      let num= 110111; // finally return a binary number after computation
       result(null, { result: num }); // use 'result' as a return statement and pass it as an object
    };

    static fromHexidecimal(newadmin : any, result:any) {
       // code here: //
    };    

    static fromOctal(newadmin : any, result:any) {
       // code here: //
    };    

}


