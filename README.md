# Number format converter
Open source project to convert numbers between different formats.

## Tech summary
**Backend:** nodeJS , firebase-functions

**Frontent:** ReactJS , Bootstrap

## Formats
- binary
- octal
- decimal
- hexadecimal
- base 12
- base 64
- roman numerals
- english words

## Project directory structure
 - frontend
    - src
    - build
 - functions
    - src
    - lib

`build` and `lib` are the only folders uploaded to firebase. 

To deploy, run `npm run deploy` in either `frontend` or `functions` to only deploy either the frontend or the backend


## Backend
Server operations are stored in the `functions` folder.

The endpoint to convert a number is 

`https://us-central1-number-format-converter-19ca7.cloudfunctions.net/convert`

The expected `POST` request body is in this format:
```json
{
  "inputNumber": "100011",
  "inputFormat": "binary",
  "outputFormat": "hex"
}
```
