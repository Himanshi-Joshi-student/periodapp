import React from 'react'
import UpperCard from '../UpperCard'
import Middle from './Middle'
const FertileCal = () => {
    const data={
        heading:"Fertile Days Calculator:",
        about:"A Fertile Days Calculator is used to estimate the days in a woman’s menstrual cycle when she is most likely to conceive. These are the days around ovulation, when an egg is released from the ovary and can be fertilized by sperm.",
        img:"https://www.parenteam.com.ph/sites/default/files/inline-images/a_vector_image_of_the_female_menstrual_cycle_that_shows_the_maturation_of_the_egg.jpeg"
    }
  return (
    <section className=" pt-2 p-2 mt-10">
    <UpperCard heading={data.heading} about={data.about} img={data.img} />
    <Middle />
    </section>
  )
}

export default FertileCal