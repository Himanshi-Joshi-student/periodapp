import React from 'react'
import Box from './Box'
const Home3 = () => {
    const data=[
        {
            heading:"Privacy-first & end-to-end encrypted"
        },
        {
            heading:"No annoying popup ads"
        },
        {
            heading:"Medical-grade predictions"
        },
        {
            heading:"Support for irregular cycles & PCOS"
        },
        {
            heading:"Cute printable health reports"
        },
        {
            heading:"A supportive community of sisters"
        },
    ]
  return (
  <div className=' p-2'>
    <div className=' m-1 p-2'>
        <span className='inline-block bg-purple-100 text-purple-800 px-3 w-fit py-1 rounded-full text-sm font-medium'>Why Luna?</span>
        <h1 className='text-2xl md:text-4xl font-bold text-white m-2'>Trusted by <span className='text-purple-700'>happy users</span></h1>
    </div>
      <div className='p-1'>
     <p className='text-gray-600 leading-relaxed  text-lg m-4'>We built Luna because health apps shouldn't be boring or scary. They should be as unique and lovely as you are!</p>
         {data.map(function(elem,idx){
                return(
                <div key={idx}>
                    <Box heading={elem.heading} />
                </div>
            )
            })}
        </div>
  </div>
  )
}

export default Home3