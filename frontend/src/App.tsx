import React, {useEffect, useState} from 'react';
import './css/app.css';
import {convert} from './components/convertFunction';
import Footer from './components/footer';

const App: React.FC = () => {
    const [inputNumber, updateInputNumber] = useState<string>("");
    const [outputNumber, setOutputNumber] = useState<string>("");

    const [fromFormat, setFromFormat] = useState<string>("");
    const [toFormat, setToFormat] = useState<string>("");

    useEffect(() => {
            if (inputNumber !== undefined)
                convert(Number(inputNumber), "binary", "hexadecimal")
                    .then(response => setOutputNumber(response.answer))
        }, [inputNumber]
    )

    const handleTextAreaChange = (e: any) =>{
        updateInputNumber(e.target.value);
    }

    const handleSelectChange1 = (e: any) =>{
        setFromFormat(e.target.value);
    }

    const handleSelectChange2 = (e: any) =>{
        setToFormat(e.target.value);
    }

    return (
        <div className="app">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h1 className="text">Number-Format-Converter</h1>
                </div>
            </div>

            <hr />

            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <form>
                             <div className="form-group">
                                <label className="text" >From {fromFormat}</label>
                                <select onChange={e => handleSelectChange1(e)} name="select" className="form-control" id="select1">
                                    <option className="dropdown-item" value="binary">Binary</option>
                                    <option className="dropdown-item" value="octal">Octal</option>
                                    <option className="dropdown-item" value="decimal">Decimal</option>
                                    <option className="dropdown-item" value="hexadecimal">Hexadecimal</option>
                                    <option className="dropdown-item" value="base12">Base12</option>
                                    <option className="dropdown-item" value="base64">Base64</option>
                                    <option className="dropdown-item" value="romannumeral">Roman Numeral</option>
                                    <option className="dropdown-item" value="english">English</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <textarea className="form-control" rows={1} value={inputNumber} onChange={e => handleTextAreaChange(e)}></textarea>
                              </div>
                        </form>
                    </div>

                    <div className="col-md-1">
                        <div className="container">
                            <div className="d-flex justify-content-center">
                                <h3 className="text">to</h3>
                            </div>
                        </div>    
                    </div>

                    <div className="col-md-5">
                        <form>
                             <div className="form-group">
                                <label className="text" >To {toFormat}</label>
                                <select name="select" onChange={e => {handleSelectChange2(e);}} className="form-control" id="select2">
                                    <option className="dropdown-item" value="binary">Binary</option>
                                    <option className="dropdown-item" value="octal">Octal</option>
                                    <option className="dropdown-item" value="decimal">Decimal</option>
                                    <option className="dropdown-item" value="hexadecimal">Hexadecimal</option>
                                    <option className="dropdown-item" value="base12">Base12</option>
                                    <option className="dropdown-item" value="base64">Base64</option>
                                    <option className="dropdown-item" value="romannumeral">Roman Numeral</option>
                                    <option className="dropdown-item" value="english">English</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <textarea className="form-control" disabled rows={1} value={outputNumber} onChange={ e=> {handleTextAreaChange(e);} }></textarea>
                              </div>
                        </form>
                    </div>

               
                    {/*
                        <p>
                            The converted number is: {outputNumber || " not worked out yet"}
                        </p>
                    */}
                </div> {/*end of the row*/}
           
                
            </div>{/*end of the container*/}
           
             <Footer />
        </div>
  );
}

export default App;
