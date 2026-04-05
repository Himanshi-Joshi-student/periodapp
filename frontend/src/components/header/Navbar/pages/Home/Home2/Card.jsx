import React from 'react'

const Card = (props) => {
  return (

    <div className=' md:p-10 max-[500]:p-2  sm:p-2 md:m-2  rounded-2xl  text-center 
        p-2 shadow-md transform transition-all duration-500 ease-out
        hover:-translate-y-4 hover:shadow-xl  border border-neutral-800
      ' >
                  <h1 className=' m-2 font-bold lg:text-2xl text-white '>{props.Heading}</h1>
        <p className=' leading-relaxed lg:text-xl  m-2   text-gray-400'>{props.Para}</p>

    </div>
  ) 

}

export default Card

