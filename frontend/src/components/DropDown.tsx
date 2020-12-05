import React from 'react'

export const DropDown: (props: {
  value: string
  onChange: (selected: string) => void
  options: { value: string; label: string }[]
}) => JSX.Element = (props) => {
  return (
    <>
      <select
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
      </select>
    </>
  )
}
