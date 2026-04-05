import React from 'react'

const Button = ({children,onclick,className="",type="button"}) => {
  return (
    <button 
    type={type}
    onclick={onclick}
    className={`border border-pink-400 text-pink-500 hover:bg-pink-50 px-6 py-3 rounded-xl font-semibold transition
${className}`}
    >
        {children}
    </button>
  )
}

export default Button