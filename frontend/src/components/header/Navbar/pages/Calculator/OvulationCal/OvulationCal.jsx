import React from 'react'
import MiddleCard from './MiddleCard'
import UpperCard from '../UpperCard'
const OvulationCal = () =>{ 
    const data={
        heading:"Ovualtion Calculator",
        img:"https://pcosweightloss.org/wp-content/uploads/2024/10/2-3.jpg",
        about:"An ovulation calendar helps you track your menstrual cycle and predict when you’re most likely to ovulate (release an egg). This is super helpful whether you're trying to plan pregnancy, avoid pregnancy, or just understand your body better. ",
    }
    return(

        <section className=" mt-5 text-white text-sm">
                <UpperCard className="text-white" heading={data.heading} about={data.about} img={data.img}  />
                <MiddleCard />
        </section>
    )
}

export default OvulationCal