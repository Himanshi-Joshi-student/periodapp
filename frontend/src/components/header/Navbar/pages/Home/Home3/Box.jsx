import React from 'react'

const box = (props) => {
  return (
    <div className=' m-3 lg:p-5 p-3 bg-neutral-900/60 text-white rounded-2xl rounded-s-lg   '>
        <h1 className='lg:text-xl leading-relaxed'>{props.heading}</h1>
    </div>
  )
}

export default box
// border-2 border-indigo-200 border-y-indigo-500