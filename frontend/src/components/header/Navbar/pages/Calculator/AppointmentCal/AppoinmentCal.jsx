import React from 'react'
import Middle from './Middle'
import UpperCard from '../UpperCard'
const AppoinmentCal = () => {
  const data={
    heading:" Appointment Calculator:",
    about:"An Appointment Calculator helps you schedule future appointments based on : A start date and A gap or interval (number of days, weeks, or months)",
    img:"https://www.shutterstock.com/image-vector/family-planning-concept-man-woman-260nw-2197830467.jpg",
  }
  return (
   <section className='pt-2 p-2 mt-10' >
    <UpperCard heading={data.heading} about={data.about} img={data.img} />
    <Middle />
   </section>
  )
}

export default AppoinmentCal