import React from 'react'

const FormCheckbox = ({ label, defaultChecked }) => {
  return (
    <label className="flex flex-col items-center gap-2">
      <span className="text-base capitalize">{label}</span>

      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="checkbox"
      />
    </label>
  )
}

export default FormCheckbox
