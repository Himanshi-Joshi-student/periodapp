import React from 'react'
import UpperCard from '../UpperCard'
import Middle from './Middle'
const DDCal = () => {
    const data={
        heading:"Due Date Calculator:",
        about:"A Due Date Calculator estimates the expected delivery date of a baby through first day of Last Menstrual Period (LMP)",
        img:"https://yoganahospital.com/static/site/img/blog/how-to-calculate-your-pregnancy-due-date.webp",
    }
  return (
    <section className='pt-2 p-2 mt-10'>
        <UpperCard heading={data.heading} about={data.about} img={data.img} />
        <Middle />
    </section>
  )
}

export default DDCal