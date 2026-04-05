import React from 'react'
import Card from './Card.jsx';

const Home2 = () => {
    const cardData=[
        {
            Heading:"Cycle Tracking",
            Para:"Cute and accurate calendar to predict your next flow, ovulation, and fertile window."
        },
        {
            Heading:"Symptom logging",
            Para:"Track fertility, moods, cravings, and cramps with adorable stickers and easy logging."
        },
        {
            Heading:"Share Luna with your partner",
            Para:"…Share your cycle with your special someone so they can bring you chocolate!"
        },
        {
            Heading:"Follow your pregnancy week by week",
            Para:"See how your body and baby are changing with our pregnancy tracker."
        },
        {
            Heading:"Gentle Reminders",
            Para:"Set Sweet notifications so that your period never catches you by surprise again."
        },
        {
            Heading:"Body Insights",
            Para:"Simple, colorful charts that helps you understand your unique beautiful rhythm."
        }
        
    ];
  return (
        <div className='lg:m-10 m-2 p-2 rounded-2xl max-[500]:m-2  border-4 border-fuchsia-800 border-y-fuchsia-300   '>
           <div className=' lg:m-2 rounded-2xl' >
             <div className='  flex flex-col p-5 items-center '>
                 <span  class="inline-block bg-pink-100 text-pink-600 px-3 w-fit py-1 rounded-full text-sm font-medium">Features</span>
                <h1 className='text-2xl md:text-4xl font-bold text-white'>Everything you need to feel <span className='text-pink-700 font-bold'>good</span></h1>
                <p className='text-gray-600 leading-relaxed m-3 text-lg max-w-md'>We made tracking fun, simple, and super cute</p>
                 </div>
          
            <div className=' grid  lg:grid-cols-3 max-[500]:gap-2 max-[500]:p-2 gap-4 justify-around lg:p-5 p-2 transition '>
                {cardData.map(function (elem,idx) {
                    return <div key={idx}>
                         <Card Heading={elem.Heading}  Para={elem.Para}/>
                    </div>
                })}
            </div>
           </div>
        </div>
  )
}

export default Home2