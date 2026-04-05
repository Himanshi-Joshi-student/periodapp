import React from 'react'
import UpperCard from '../UpperCard'
import Middle from './Middle'
const Cyclelength = () => {
   const data={
        heading:"Cycle length Calculator:",
        img:"https://www.indiraivf.com/sites/default/files/styles/wide/public/2024-09/Period-Calculator_0.jpg.webp",
        about:"A Cycle Length Calendar tracks the number of days from the first day of one period to the first day of the next period.",
    }
  return (
    <section className=" pt-2 p-2 mt-10">
                 <UpperCard heading={data.heading} about={data.about} img={data.img}  /> 
                <Middle />
        </section>
  )
}

export default Cyclelength