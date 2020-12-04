export interface apiResponseFormat {
    answer?: string;
    errors?: string[];
}

export const convert: (inputNumber: string, inputFormat: string, outputFormat: string) => Promise<apiResponseFormat>
    = (inputNumber, inputFormat, outputFormat) => {
    console.log("calling api")
    const productionURL = "https://us-central1-number-format-converter-19ca7.cloudfunctions.net/convert"
    const testURL = "http://localhost:5001/number-format-converter-19ca7/us-central1/convert"
    const url = (mode: "test" | "production") => {
        return mode === "test" ? testURL : productionURL
    }


    return fetch(url("test"),
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text/html"
            },
            body: JSON.stringify({
                "inputNumber": inputNumber,
                "inputFormat": inputFormat,
                "outputFormat": outputFormat
            })
        })
        .then(r => r.json())
        .then(r => {
            console.log(r)
            // console.log(r.body) // log response
            return r
        })
        // .then(r => {
        //     if (r === null)
        //         return ({errors: ["Null returned from API?"]})
        //     else
        //         return r.json()
        // })
        .catch(r => {
            console.log(r)
            return ({errors: [r.toString()]})
        })
}

