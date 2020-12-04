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


    return fetch(url("production"),
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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
            return r
        })
        .catch(r => {
            console.log(r)
            return ({errors: [r.toString()]})
        })
}

