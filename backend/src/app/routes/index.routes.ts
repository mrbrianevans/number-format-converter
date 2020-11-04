/* 
This file holds all routes. 
Only made use of one file because there wont be too many routes to keep track of.
*/

import {Application} from "express";

module.exports = (app: Application) => {
  const tobinary = require("../controllers/toBinary.controller.ts");

  // example of routes:
  // a route that calls the decimal to binary method:
  app.post("/decimaltobinary", tobinary.fromDecimal);

  // an example of a possible get method:
  // app.get("/admins", Admin.findAll);
 
  
  
};
