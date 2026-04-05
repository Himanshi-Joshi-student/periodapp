import React from 'react'
import UpperCard from '../UpperCard'
import Middle from './Middle'
const NextPeriod = () => {
      const data={
        heading:"Next Period Calculator:",
        img:"https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-1000x-inset/04/9914-02_1006x755.jpg?v=1-0",
        about:"A Next Period Calculator is a tool (usually digital or web-based) that predicts the start date of your next menstrual cycle based on your previous period and your average cycle length.",
    }
  return (
    <div className=" pt-2 p-2 mt-10">
          <UpperCard heading={data.heading} about={data.about} img={data.img}  /> 
          <Middle />
    </div>
  )
}

export default NextPeriod