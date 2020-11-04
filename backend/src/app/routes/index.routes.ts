/*
This file holds all routes.
Only made use of one file because there wont be too many routes to keep track of.
*/

import {Application} from "express";
import {convert} from "../controllers/corrospondingFunctions";

module.exports = (app: Application) => {

  // this should validate the request data
  // make sure the two formats are both valid, and the input number is valid
  app.post('/convert', ((req, res, next) => {
    console.log(`Convert ${req.body.inputNumber} from ${req.body.inputForm} to ${req.body.outputForm}`)
    next()
  }))

  // this should perform the calculation, and return the result
  app.post('/convert', ((req, res) => {
    console.log("The calculation should happen here")
    const representation: string = req.body.inputNumber
    const inputForm: string = req.body.inputForm
    const outputForm: string = req.body.outputForm
    const convertedNumber: string = convert(representation, inputForm, outputForm)
    res.send(convertedNumber)
  }))

};
