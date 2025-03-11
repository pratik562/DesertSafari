'use client'
import React from 'react'

const InputField = ({ label, type, name, placeholder, value, onChange, error }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-700 font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value} // ✅ Controlled component
        onChange={onChange} // ✅ Updating state
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
        required
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* ✅ Show error */}
    </div>
  )
}

export default InputField
