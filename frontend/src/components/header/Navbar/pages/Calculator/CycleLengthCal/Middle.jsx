// import React from 'react'
// import { useState } from 'react'
// const Middle = () => {
//   const [length, setLength] = useState(28)
//   const [date, setDate] = useState("")
//   const [result, setResult] = useState(null)
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     if (!date) {
//       alert("Please select your last period date")
//       return
//     }
//     // fdp is first day of period 
//         const Fdp = new Date(date)
//     //fpp is first day of previous period
//         const fpp= new Date(date)
//   }
//   return (
//     <div className='bg-white/10 backdrop-blur-md m-15 rounded-2xl  p-3'>

//       <form onSubmit={handleSubmit}>

//         {/* Date Field */}
//         <div className='p-2 m-5'>
//           <label className='text-white text-2xl'>
//             First day of current period
//           </label>
//           <div className='text-white md:text-xl p-4 rounded-2xl text-4xl m-2'>
//             <input
//               type='date'
//               className='block w-full rounded-md border-gray-900 shadow-sm md:text-2xl p-5'
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className='p-2 m-5'>
//           <label className='text-white text-2xl'>
//             First day of previous period
//           </label>
//           <div className='text-white md:text-xl p-4 rounded-2xl text-4xl m-2'>
//             <input
//               type='date'
//               className='block w-full rounded-md border-gray-900 shadow-sm md:text-2xl p-5'
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className='flex justify-center'>
//           <button
//             className='bg-neutral-600 text-white text-2xl p-4 rounded-2xl font-semibold hover:text-purple-300'
//             type='submit'
//           >
//             Calculate
//           </button>
//         </div>
//       </form>



//     </div>
//   )
// }
// export default Middle

import React, { useState } from 'react'
import Button from '../Btn'
const Middle = () => {
  const [currentDate, setCurrentDate] = useState("")
  const [previousDate, setPreviousDate] = useState("")
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!currentDate || !previousDate) {
      alert("Please select both dates")
      return
    }

    const current = new Date(currentDate)
    const previous = new Date(previousDate)

    // difference in milliseconds
    const diffTime = current - previous

    // convert into days
    const diffDays = diffTime / (1000 * 60 * 60 * 24)

    if (diffDays <= 0) {
      alert("Current period date must be after previous period date")
      return
    }

    setResult(diffDays)
  }

  return (
    <div className='bg-white/10 backdrop-blur-md m-15 rounded-2xl p-3'>

      <form onSubmit={handleSubmit}>

        {/* Current Period */}
        <div className='p-2 m-5'>
          <label className='text-white text-2xl'>
            First day of current period
          </label>
          <div className='p-4 m-2'>
            <input
              type='date'
              className='block w-full rounded-md p-5'
              onChange={(e) => setCurrentDate(e.target.value)}
            />
          </div>
        </div>

        {/* Previous Period */}
        <div className='p-2 m-5'>
          <label className='text-white text-2xl'>
            First day of previous period
          </label>
          <div className='p-4 m-2'>
            <input
              type='date'
              className='block w-full rounded-md p-5'
              onChange={(e) => setPreviousDate(e.target.value)}
            />
          </div>
        </div>

        <div className='flex justify-center'>
             <Button>
            Calculate
          </Button>
          {/* <button
            className='bg-neutral-600 text-white text-2xl p-4 rounded-2xl font-semibold hover:text-purple-300'
            type='submit'
          >
            Calculate
          </button> */}
        </div>
      </form>

      {/* Result Section */}
      {result && (
        <div className='text-white text-center text-3xl mt-6'>
          Your Cycle Length is <span className='text-purple-300 font-bold'>{result} days</span>
        </div>
      )}

    </div>
  )
}

export default Middle
