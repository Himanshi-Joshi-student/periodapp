import React from 'react'
import UppperCard from '../UpperCard'
import Middle from './Middle'
import UpperCard from '../UpperCard'
const ConceptionCal = () => {
  const data={
    heading:"Conception Calculator:",
    about:"A Conception Calculator estimates the likely date of conception based on your menstrual cycle.It’s basically asking:“If I had ovulation and intercourse, when did fertilization probably happen?”",
    img:"https://www.indiraivf.com/sites/default/files/styles/wide/public/2024-09/Pregnancy-Conception-Calculator_0.jpg.webp",
  }
  return (
   <section className='pt-2 p-2 mt-10' >
    <UpperCard heading={data.heading} about={data.about} img={data.img} />
    <Middle />
   </section>
  )
}

export default ConceptionCal