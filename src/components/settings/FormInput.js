import React from 'react'

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-1 text-[13px] text-[#232323] font-normal leading-normal font-[Inter]"
      >
        {label}
      </label>
      <input
        id={name}
        className="w-full h-[50px] px-3 py-2 border border-lightBorder rounded-[10px] bg-white focus:outline-none focus:border-blue-500 text-[#718EBF] font-[Inter] text-[12px] md:text-[15px] font-normal leading-normal"
        {...{ required, error, onChange, value, name, type, placeholder }}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default FormInput
