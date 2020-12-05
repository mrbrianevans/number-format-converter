import React, { useEffect, useState } from 'react'
import './css/app.css'
import { convert } from './components/convertFunction'
import Footer from './components/footer'
import { DropDown } from './components/DropDown'

const App: React.FC = () => {
  const [inputNumber, updateInputNumber] = useState<string>('')
  const [outputNumber, setOutputNumber] = useState<string>('')

  const [fromFormat, setFromFormat] = useState<string>('decimal')
  const [toFormat, setToFormat] = useState<string>('base64')

  useEffect(() => {
    if (inputNumber !== undefined)
      convert(inputNumber, fromFormat, toFormat).then((response) => {
        if (response.answer) setOutputNumber(response.answer)
        else if (response.errors) console.log(response.errors)
      })
  }, [inputNumber, fromFormat, toFormat])

  const handleTextAreaChange = (e: any) => {
    updateInputNumber(e.target.value)
  }

  // in future, this list should be retrieved from the API
  const formats: { value: string; label: string }[] = [
    {
      value: 'binary',
      label: 'Binary'
    },
    {
      value: 'octal',
      label: 'Octal'
    },
    {
      value: 'decimal',
      label: 'Decimal'
    },
    {
      value: 'duodecimal',
      label: 'Duodecimal (base 12)'
    },
    {
      value: 'hexadecimal',
      label: 'Hexadecimal'
    },
    {
      value: 'base64',
      label: 'Base 64'
    },
    {
      value: 'roman',
      label: 'Roman numerals'
    },
    {
      value: 'english',
      label: 'English words'
    }
  ]

  return (
    <div className='app'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <h1 className='text'>Number-Format-Converter</h1>
        </div>
      </div>

      <hr />

      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <form>
              <div className='form-group'>
                <label className='text'>From {fromFormat}</label>
                <DropDown
                  value={fromFormat}
                  onChange={(selected) => setFromFormat(selected)}
                  options={formats}
                />
              </div>

              <div className='form-group'>
                <textarea
                  className='form-control'
                  rows={1}
                  value={inputNumber}
                  onChange={(e) => handleTextAreaChange(e)}
                />
              </div>
            </form>
          </div>

          <div className='col-md-1'>
            <div className='container'>
              <div className='d-flex justify-content-center'>
                <h3 className='text'>to</h3>
              </div>
            </div>
          </div>

          <div className='col-md-5'>
            <form>
              <div className='form-group'>
                <label className='text'>To {toFormat}</label>
                <DropDown
                  value={toFormat}
                  onChange={(selected) => setToFormat(selected)}
                  options={formats}
                />
              </div>

              <div className='form-group'>
                <textarea
                  className='form-control'
                  disabled
                  rows={1}
                  value={outputNumber}
                  onChange={(e) => {
                    handleTextAreaChange(e)
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        {/*end of the row*/}
      </div>
      {/*end of the container*/}

      <Footer />
    </div>
  )
}

export default App
