export const convert = (inputNumber: number, inputFormat: string, outputFormat: string) => {
    console.log("calling api")
    return fetch("https://us-central1-number-format-converter-19ca7.cloudfunctions.net/convert",
        {
            method: "POST",
            body: JSON.stringify({
                "inputNumber": inputNumber,
                "inputFormat": inputFormat,
                "outputFormat": outputFormat
            }),
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(r => {
            console.log(r.body) // log response
            return r
        })
        .then(r => r.json())
    //// uncomment for dev testing without api response
    // .then(()=> ({
    //   "answer": "hexa"
    // }))
}

// export { convert }