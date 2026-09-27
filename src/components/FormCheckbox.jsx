import React from 'react'

const FormCheckbox = ({ name, label, defaultChecked }) => {
  return (
    <label className="flex flex-col items-center gap-2">
      <span className="text-base capitalize">{label}</span>

      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        className="checkbox"
      />
    </label>
  )
}

export default FormCheckbox
