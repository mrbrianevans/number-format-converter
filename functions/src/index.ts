import * as functions from 'firebase-functions';
import {converter, functionsMapper} from "./controllers/corrospondingFunctions";

// // Backend code must be called like this to respond to requests
// // Firebase Functions Docs:
// // https://firebase.google.com/docs/functions/typescript


export const convert = functions.https.onRequest((request, response) => {
  functions.logger.info("Convert number function called with " + request.method, {structuredData: true});
  response.setHeader("Access-Control-Allow-Origin", "*")
  if (request.method.toLowerCase() !== "post") response.status(405).send("Only POST method allowed")
  else if (!request.is("json")) {
    functions.logger.error("JSON header missing.", {structuredData: true});
    response.status(400).send("JSON header missing. Add to you request headers Content-Type: application/json")
  } else if (typeof request.body !== "object") {
    functions.logger.error("Could not interpret JSON: " + JSON.stringify(request.body), {structuredData: true});
    response.status(400).send("Could not interpret JSON: " + JSON.stringify(request.body))
  } else { // valid request format POST JSON
    //futher validation:
    const errorMessages: string[] = []
    if (!request.body.inputNumber) {
      errorMessages.push("Input number not specified")
    } else if (typeof request.body.inputNumber !== "string") {
      errorMessages.push("Input number format not valid. Should be string")
    }
    if (!request.body.inputFormat) {
      errorMessages.push("Input format not specified")
    } else if (!functionsMapper[request.body.inputFormat]) {
      errorMessages.push("Input format not valid")
    }
    if (!request.body.outputFormat) {
      errorMessages.push("Output number not specified")
    } else if (!functionsMapper[request.body.outputFormat]) {
      errorMessages.push("Output format not valid")
    }
    if (errorMessages.length === 0) {
      try {
        //calculate answer
        const answer: string = converter(request.body.inputNumber, request.body.inputFormat, request.body.outputFormat)
        // Send response
        response.send(JSON.stringify({answer: answer}))
      } catch (e) {
        // error occurred in calculation or sending a response. Probably in calculation
        errorMessages.push("Unexplained error occured during calculation")
      }
    }
    if (errorMessages.length !== 0) {
      functions.logger.error("Errors occurred: " + JSON.stringify(errorMessages), {structuredData: true});
      response.send(JSON.stringify({errors: errorMessages}))
    }
  }
});
