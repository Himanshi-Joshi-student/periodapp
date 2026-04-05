import React from 'react'

const UpperCard = (props) => {
  return (
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-items-center px-3 p-5 '>
        <div className='m-2'>
            <h1 className=' text-white font-bold text-2xl leading-relaxed'>{props.heading}</h1>
            <p className='sm:text-sm m-2 text-md leading-loose'>{props.about}</p>
        </div>
        <div>
            <img src={props.img} alt='' className='h-55 w-70' />
        </div>
    </div>
  )
}

export default UpperCard