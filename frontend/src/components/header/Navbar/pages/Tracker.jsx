import React from 'react'

  const data=[
    {
      img:"https://pcosweightloss.org/wp-content/uploads/2024/10/2-3.jpg",
      heading:"Ovulation Calculator :",
      about:" Estimates your ovulation day based on cycle length",
      link:"/OvulationCal"
    },
    {
      img:"https://www.indiraivf.com/sites/default/files/styles/wide/public/2024-09/Period-Calculator_0.jpg.webp",
      heading:"Cycle length calculator: ",
      about:"Tracks start/end dates of each period",
      link:"/Cyclelength"
    },
    {
      img:"https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-1000x-inset/04/9914-02_1006x755.jpg?v=1-0",
      heading:"Next Period Calculator:",
      about:"Estimates the date your next period will begin",
      link:"/NextPeriod"
    },
    {
      img:"https://www.parenteam.com.ph/sites/default/files/inline-images/a_vector_image_of_the_female_menstrual_cycle_that_shows_the_maturation_of_the_egg.jpeg",
      heading:"Fertile Days Calculator:",
      about:"Estimates days with the highest chance of conception",
      link:"/FertileCal"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsymJ4mM20DhJ6wzcXePG4AwJSzAp3TwmDLLiVLz0WJo1r_LSZTaCidu1Qj7nig2dDQc&usqp=CAU",
      heading:"Luteal Phase Length:",
      about:"Estimates how long the post-ovulation phase lasts",
      link:"/LutealCal"
    },
    {
      img:"https://yoganahospital.com/static/site/img/blog/how-to-calculate-your-pregnancy-due-date.webp",
      heading:"D D Calculator:",
      about:" Estimates the expected delivery date based on the conception date",
      link:'/DDCal'
    },
    {
      img:"https://www.indiraivf.com/sites/default/files/styles/wide/public/2024-09/Pregnancy-Conception-Calculator_0.jpg.webp",
      heading:"Conception Calculator:",
      about:"Estimates the likely date of conception",
      link:"/ConceptionCal"
    },
    {
      img:"https://media.istockphoto.com/id/2170502320/vector/pregnant-woman-makes-an-appointment-in-the-calendar-notes-the-intake-of-vitamins-doctors.jpg?s=612x612&w=0&k=20&c=nTFH0k2UtbT_mlU0NLaC2UWufsUqZfsxG3dlkzKb6m4=",
      heading:"Pregnancy Week Calculator:",
      about:"Shows which week of pregnancy you’re in",
      link:"/PregWeekCal"
    },
    {
      img:"https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-1000x-inset/09/11179-Pregnancy%20weeks%20to%20months%20chart%20Flo.jpg?v=1-0",
      heading:"Trimester Calculator:",
      about:"Determines which trimester you’re currently in",
      link:"/TrimesterCal"
    },
    {
      img:"https://iowapregnancysupport.com/wp-content/uploads/sites/2/et_temp/Fetal-Development-1043708_1080x675.jpg",
      heading:"Pregnancy Calculator:",
      about:"Estimates baby’s size based on week of pregnancy",
      link:"/BabySizeCal"
    },
    {
      img:"https://www.shutterstock.com/image-vector/family-planning-concept-man-woman-260nw-2197830467.jpg",
      heading:" Appointment Calculator:",
      about:"Suggests recommended check-up timing",
      link:"/AppointmentCal"
    },
  ]

const Tracker = () => {
  return (
    <section className='py-16 md:py-24 border-t border-neutral-900'>
      <div className='max-w-6xl mx-auto px-4 md:px-6 lg:px-8'>
        <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'> Tools</h2>
           <div  className='mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.map((elem,idx)=>(
          <div key={idx} className='rounded-2xl overflow-hidden bg-neutral-900/70 border border-neutral-800'>
            <img src={elem.img} alt='' className='w-full h-44 object-cover' />
          <div className='p-5 space-y-3'>
            <p className='text-sm text-neutral-300'>{elem.heading}</p>
            <a href={elem.link} className='p-5 text-blue-400 hover:text-blue-800 underline'>{elem.about}</a>
          </div>
          </div>
        ))} 
        </div>
      </div>
    </section>
  )
}

export default Tracker