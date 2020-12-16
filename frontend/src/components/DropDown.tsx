import React from 'react'
import styled from 'styled-components'

export const DropDown: (props: {
  value: string
  onChange: (selected: string) => void
  options: { value: string; label: string }[]
}) => JSX.Element = (props) => {
  return (
    <>
      <Select
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        name='select'
        className='form-control'
        id='select1'
      >
        {props.options.map((option) => (
          <option
            key={option.value}
            className={'dropdown-item'}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>
    </>
  )
}

const Select = styled.select`
  display: block;
  font-size: 1rem;
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
  margin: 5px auto 20px auto;
`
