import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const convert = (inputNumber: number, inputFormat: string, outputFormat: string) => {
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

const App: React.FC = () => {
    const [inputNumber, updateInputNumber] = useState<string>()
    const [outputNumber, setOutputNumber] = useState<string>()
    useEffect(() => {
            if (inputNumber !== undefined)
                convert(Number(inputNumber), "binary", "hexadecimal")
                    .then(response => setOutputNumber(response.answer))
        }, [inputNumber]
    )
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://github.com/mrbrianevans/number-format-converter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Repository
                </a>
                <input type={"text"} onChange={(inputEvent) => {
                    updateInputNumber(inputEvent.target.value)
                }} value={inputNumber}/>
                <p>
                    The converted number is: {outputNumber || " not worked out yet"}
                </p>
            </header>
    </div>
  );
}

export default App;
