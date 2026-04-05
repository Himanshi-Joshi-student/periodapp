import React from 'react'
import homenav from './homenav.png'
const Home1 = () => {
  return (
    <section class=" text-neutral-100 selection:bg-brand-500/30 max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
  <div class="space-y-6">
    
    <span class="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-medium">
      Your body is magic ⚡
    </span>

    <h1 class="text-4xl md:text-5xl font-bold text-white-900">
      Flow with Luna
    </h1>
    <p class="text-gray-600 text-lg leading-relaxed max-w-md">
      Luna is your cozy corner for health tracking.
      Predict your periods, understand your moods,
      and feel amazing every day.
    </p>

    <div class="flex flex-col sm:flex-row gap-4">
      <button
        class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        Start Tracking Periods
      </button>

      <button
        class="border border-pink-400 text-pink-500 hover:bg-pink-50 px-6 py-3 rounded-xl font-semibold transition"
      >
        See How It Works
      </button>
    </div>
  </div>
  <div class="flex justify-center md:justify-end">
    <img
      src={homenav}
      alt="Ui pic"
      class="w-90  rounded-2xl border-[9px] border-[rgba(241,233,233,0.79)] shadow-lg"
    />
  </div>

</section> 
 
  // <div className='bg-pink-200 flex p-15 m-5 justify-between  h-fit '>
  //   <div className='w-3/6 bg-purple-300  flex flex-col gap-3 h-auto  p-3'>
  //   <div className='bg-white text-pink-400 rounded-xl w-fit h-auto p-1 '>Your Body is Magic⚡</div>
  //   <div className='bg-amber-50'>
  //     <h1 class="text-4xl md:text-5xl font-bold text-gray-900" >Flow with Luna</h1>
  //     <p  class="text-gray-600 text-lg leading-relaxed max-w-md" >Luna is your cozy corner for health tracking. Predict your periods, understand your moods, and feel amazing every day.</p>
  //   </div>
  //   <div className=' bg-amber-400 flex flex-row justify-center gap-2 '>
  //     <button className='bg-pink-500 p-2 rounded-3xl w-full'>Start Tracking Periods </button>
  //     <button className='bg-pink-500 p-2 rounded-3xl w-full '>See How It Works</button>
  //   </div>
  //   </div>
  //   <div className='w-2/6 bg-purple-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis laudantium odio beatae alias, impedit incidunt saepe aspernatur aperiam deleniti dicta.</div>
  // </div>
  )
}

export default Home1