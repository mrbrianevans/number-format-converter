## Backend
Server operations are stored in the `functions` folder.

The endpoint to convert a number is 

`https://us-central1-number-format-converter-19ca7.cloudfunctions.net/convert`

The method must be POST, and the request body must be JSON.

A valid request looks like this:
```http request
POST https://us-central1-number-format-converter-19ca7.cloudfunctions.net/convert
Content-Type: application/json

{
  "inputNumber": "FF",
  "inputFormat": "hexadecimal",
  "outputFormat": "binary"
}
```
The typical response is in this format:
```json
{
  "answer":"10111"
}
```
If the request is a POST request with JSON body, 
but the actual values are not valid, an error list will be 
returned in this format:
```json
{
  "errors": [
    "Input number format not valid. Should be string"
  ]
}
```

If the request body is not valid JSON (or a `application/json` header is absent), the API will respond with a 400 error.
