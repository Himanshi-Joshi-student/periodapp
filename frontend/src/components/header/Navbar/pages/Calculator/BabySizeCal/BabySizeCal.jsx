import React from 'react'
import Middle from './Middle'
import UpperCard from '../UpperCard'
const BabySizeCal = () => {
  const data={
    heading:"Pregnancy Baby Size Calculator:",
    about:"A Pregnancy Baby Size Calculator estimates the approximate size and weight of your baby according to visual or descriptive idea of how big oyour baby is, usually compared to fruits and vegetables or evevryday Objets at a given week of pregnancy.",
    img:"https://iowapregnancysupport.com/wp-content/uploads/sites/2/et_temp/Fetal-Development-1043708_1080x675.jpg",
  }
  return (
   <section className='pt-2 p-2 mt-10' >
    <UpperCard heading={data.heading} about={data.about} img={data.img} />
    <Middle />
   </section>
  )
}

export default BabySizeCal