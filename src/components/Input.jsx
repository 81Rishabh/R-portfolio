import React from 'react'

function Input({
    type,
    name,
    placeholder,
    style
}) {
  return (
    <div className="grow p-[1px] bg-gradient-to-r from-[#08203e] to-[#557c93] rounded-md">
     <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="h-14 w-full border-0 outline-0 pl-2 bg-black rounded-md text-white"
    />
  </div>
  )
}

export default Input