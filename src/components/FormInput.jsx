import React from 'react'

const FormInput = ({ label, name, type, defaultValue = '' }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-base capitalize">{label}</legend>
      <input
        type={type}
        className={`input -input-bordered`}
        name={name}
        defaultValue={defaultValue}
      />
    </fieldset>
  )
}

export default FormInput
