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
      <Container>
        <Form>
          <label>From {fromFormat}:</label>
          <DropDown
            value={fromFormat}
            onChange={(selected) => setFromFormat(selected)}
            options={formats}
          />

          <TextArea
            rows={1}
            value={inputNumber}
            onChange={(e) => handleTextAreaChange(e)}
          />
        </Form>

        <Form>
          <label>To {toFormat}:</label>
          <DropDown
            value={toFormat}
            onChange={(selected) => setToFormat(selected)}
            options={formats}
          />

          <TextArea
            disabled
            rows={1}
            value={outputNumber}
            onChange={(e) => {
              handleTextAreaChange(e)
            }}
          />
        </Form>
      </Container>
    </>
  )
}

const Form = styled.form`
  box-shadow: rgba(169, 174, 183, 0.5) 0px 1px 2px 0px;
  background-color: rgb(255 255 255 / 0.7);
  padding: 10px;
  border-radius: 8px;
  width: 400px;

  Label {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.95rem;
  }
`

const TextArea = styled.textarea`
  display: block;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  width: 98%;
  height: 40px;
  resize: vertical;
  margin: 20px auto;
  font-size: 1.5rem;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 50px 0;
`

export default Converter
