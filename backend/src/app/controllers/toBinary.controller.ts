// const Admin:any = require("../models/admin.model.ts");
import Tobinary from "../models/toBinary.model";



exports.fromDecimal = (req:any, res: any) => {
    console.log("ran");
    // Validate request(make sure that the user didnt just send an empty object)
    if (!req.body) {
            res.status(400).send({
            message: "Content can not be empty!"
        });
        console.log("empty")
    }

    const variable = new Tobinary({
        // data: req.body.data,
        data: "6000" // passing in a fake string for sake of testing
    });


    // here i call the method in the [class model (toBinary.model.ts) file ]
    Tobinary.fromDecimal(variable, (err: any, data: any) => {
        if (err)
            res.status(500).send({message: err.message || "Some error occurred while converting to binary." });
        else res.send(data);
    });
};



exports.fromHexidecimal =(req:any, res:any) =>{
    // same thing here
    // 1. start by validating the users request
    // 2. then create an instance of the class
    // 3. then call the function from the class, in this case Tobinary.fromHexidecimal()

    const variable = new Tobinary({
        // data: req.body.data,
        data: req.body.data
    });


    // here i call the method in the [class model (toBinary.model.ts) file ]
    Tobinary.fromHexidecimal(variable, (err: any, data: any) => {
        if (err)
            res.status(500).send({message: err.message || "Some error occurred while converting to binary." });
        else res.send(data);
    });
}


