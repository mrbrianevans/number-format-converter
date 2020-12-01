import React, {useEffect, useState} from 'react';
import './css/app.css';
import {convert} from './components/convertFunction';
import Footer from './components/footer';

const App: React.FC = () => {
    const [inputNumber, updateInputNumber] = useState<string>("")
    const [outputNumber, setOutputNumber] = useState<string>("")
    useEffect(() => {
            if (inputNumber !== undefined)
                convert(Number(inputNumber), "binary", "hexadecimal")
                    .then(response => setOutputNumber(response.answer))
        }, [inputNumber]
    )

    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <input type={"text"} onChange={(inputEvent) => {
                        updateInputNumber(inputEvent.target.value)
                    }} value={inputNumber}/>
                    <p>
                        The converted number is: {outputNumber || " not worked out yet"}
                    </p>
                </div> {/*end of teh row*/}
           
                
            </div>{/*end of the container*/}
           
             <Footer />
        </div>
  );
}

export default App;
