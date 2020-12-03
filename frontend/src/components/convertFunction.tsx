export interface apiResponseFormat {
    answer?: string;
    errors?: string[];
}

export const convert: (inputNumber: number, inputFormat: string, outputFormat: string) => Promise<apiResponseFormat>
    = (inputNumber, inputFormat, outputFormat) => {
    console.log("calling api")
    const productionURL = "https://us-central1-number-format-converter-19ca7.cloudfunctions.net/convert"
    const testURL = "http://localhost:5001/number-format-converter-19ca7/us-central1/convert"
    const url = (mode: "test" | "production") => {
        return mode === "test" ? testURL : productionURL
    }

    // const httpRequest = new XMLHttpRequest()
    // httpRequest.open("post", url("test"), false)
    // httpRequest.setRequestHeader("Content-Type", "application/json")
    // httpRequest.send(JSON.stringify({inputNumber: 50}))
    // console.log("Synchronous response: ")
    // console.log(httpRequest.response)

    return fetch(url("production"),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "inputNumber": inputNumber,
                "inputFormat": inputFormat,
                "outputFormat": outputFormat
            }),
            // body: '{"inputNumber":"50"}',
            mode: "no-cors",
        })
        .then(r => {
            console.log(r)
            console.log(r.body) // log response
            return r
        })
        .then(r => {
            if (r === null)
                return ({errors: ["Null returned from API?"]})
            else
                return r.json()
        })
        .catch(r => {
            console.log(r)
            return ({errors: [r.toString()]})
        })
}

