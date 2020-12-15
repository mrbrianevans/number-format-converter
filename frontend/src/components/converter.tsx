import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { convert } from './helpers/convertFunction'
import { DropDown } from './DropDown'

// in future, this list should be retrieved from the API
import { formats } from './helpers/utilities'

const Converter: React.FC = () => {
  const [inputNumber, updateInputNumber] = useState<string>('')
  const [outputNumber, setOutputNumber] = useState<string>('')

  const [fromFormat, setFromFormat] = useState<string>('decimal')
  const [toFormat, setToFormat] = useState<string>('base64')

  useEffect(() => {
    if (inputNumber !== undefined)
      convert(inputNumber, fromFormat, toFormat).then((response) => {
        if (response.answer) setOutputNumber(response.answer)
        // else if (response.errors) console.log(response.errors) - line is only needed in dev-debug mode
      })
  }, [inputNumber, fromFormat, toFormat])

  const handleTextAreaChange = (e: any) => {
    updateInputNumber(e.target.value)
  }

  return (
    <>
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
    </>
  )
}

export default Converter
