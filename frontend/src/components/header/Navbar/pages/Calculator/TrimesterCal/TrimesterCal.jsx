import React from 'react'
import Middle from './Middle'
import UpperCard from '../UpperCard'
const TrimesterCal = () => {
  const data={
    heading:"Trimester Calculator:",
    about:"Determines which trimester you’re currently in...",
    img:"https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-1000x-inset/09/11179-Pregnancy%20weeks%20o%20months%20chart%20Flo.jpg?v=1-0",
  }
  return (
   <section className='pt-2 p-2 mt-10'>
    <UpperCard heading={data.heading} about={data.about} img={data.img} />
    <Middle />
   </section>
  )
}

export default TrimesterCal