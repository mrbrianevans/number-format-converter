import React from 'react'

export const DropDown: (props: {
  label: string
  options: { value: string; label: string }[]
}) => JSX.Element = () => {
  return (
    <>
      <label className='text'>From {fromFormat}</label>
      <select
        onChange={(e) => handleSelectChange1(e)}
        name='select'
        className='form-control'
        id='select1'
      >
        <option className='dropdown-item' value='binary'>
          Binary
        </option>
        <option className='dropdown-item' value='octal'>
          Octal
        </option>
        <option className='dropdown-item' value='decimal'>
          Decimal
        </option>
        <option className='dropdown-item' value='hexadecimal'>
          Hexadecimal
        </option>
        <option className='dropdown-item' value='duodecimal'>
          Base12
        </option>
        <option className='dropdown-item' value='base64'>
          Base64
        </option>
        <option className='dropdown-item' value='roman'>
          Roman Numeral
        </option>
        <option className='dropdown-item' value='english'>
          English
        </option>
      </select>
    </>
  )
}
