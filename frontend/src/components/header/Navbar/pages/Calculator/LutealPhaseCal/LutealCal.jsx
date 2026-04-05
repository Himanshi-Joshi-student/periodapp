import React from 'react'
import UpperCard from '../UpperCard'
import Middle from './Middle'
const LutealCal = () => {
  const data={
    heading:"Luteal Phase Length Calculator",
    about:"The luteal phase is the second half of your menstrual cycle, starting right after ovulation and ending the day before your next period begins.",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsymJ4mM20DhJ6wzcXePG4AwJSzAp3TwmDLLiVLz0WJo1r_LSZTaCidu1Qj7nig2dDQc&usqp=CAU"
  }
  return (
    <section className='pt-2 p-2 mt-10'>
      <UpperCard heading={data.heading} about={data.about} img={data.img}/>
    <Middle />
    </section>
    
  )
}

export default LutealCal