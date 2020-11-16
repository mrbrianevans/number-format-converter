import * as functions from 'firebase-functions';
import {converter} from "./controllers/corrospondingFunctions";

// // Backend code must be called like this to respond to requests
// // Firebase Functions Docs:
// // https://firebase.google.com/docs/functions/typescript
//

export const convert = functions.https.onRequest((request, response) => {
  functions.logger.info("Convert number function called", {structuredData: true});
  response.setHeader("Access-Control-Allow-Origin", "*")
  if (request.method === "post" && request.is("json")) { // valid request format POST JSON

    //calculate answer
    const answer: string = converter(request.body.inputNumber, request.body.inputFormat, request.body.outputFormat)
    // Send response
    response.send(JSON.stringify({answer: answer}))
  } else {
    response.send("Invalid request")
  }
});
