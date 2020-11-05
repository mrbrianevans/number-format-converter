"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corrospondingFunctions_1 = require("../controllers/corrospondingFunctions");
module.exports = (app) => {
    // this should validate the request data
    // make sure the two formats are both valid, and the input number is valid
    app.post('/convert', ((req, res, next) => {
        console.log(`Convert ${req.body.inputNumber} from ${req.body.inputForm} to ${req.body.outputForm}`);
        next();
    }));
    // this should perform the calculation, and return the result
    app.post('/convert', ((req, res) => {
        console.log("The calculation should happen here");
        const representation = req.body.inputNumber;
        const inputForm = req.body.inputForm;
        const outputForm = req.body.outputForm;
        const convertedNumber = corrospondingFunctions_1.convert(representation, inputForm, outputForm);
        res.send(convertedNumber);
    }));
};
