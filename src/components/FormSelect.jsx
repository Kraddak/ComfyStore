import React from 'react'

const FormSelect = ({ label, name, list, size, defaultValue }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-base capitalize">{label}</legend>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </fieldset>
  )
}

export default FormSelect
