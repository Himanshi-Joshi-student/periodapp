import React from 'react'
import Middle from './Middle'
import UpperCard from '../UpperCard'
const PregWeekCal = () => {
  const data={
    heading:"Pregnancy Week Calculator:",
    about:"A Pregnancy Week Calculator tells you how far along you are in your pregnancy in weeks and days.It basically calculates:“From the first day of your last menstrual period (LMP) → how many weeks/days pregnant am I?”",
    img:"https://media.istockphoto.com/id/2170502320/vector/pregnant-woman-makes-an-appointment-in-the-calendar-notes-the-intake-of-vitamins-doctors.jpg?s=612x612&w=0&k=20&c=nTFH0k2UtbT_mlU0NLaC2UWufsUqZfsxG3dlkzKb6m4=",
  }
  return (
   <section className='pt-2 p-2 mt-10'>
    <UpperCard heading={data.heading} about={data.about} img={data.img} />
    <Middle />
   </section>
  )
}

export default PregWeekCal