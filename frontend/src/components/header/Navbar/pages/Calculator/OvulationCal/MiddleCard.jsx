// 

import React, { useState } from 'react'
import Button from '../Btn'
const MiddleCard = () => {
  const [length, setLength] = useState(28)
  const [date, setDate] = useState("")
  const [result, setResult] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!date) {
      alert("Please select your last period date")
      return
    }
//lmp last period first dATE
    const lmp = new Date(date)

    // Ovulation = LMP + (cycleLength - 14)
    const ovulation = new Date(lmp)
    ovulation.setDate(lmp.getDate() + (length - 14))

    // // Fertile window
    const fertileStart = new Date(ovulation)
    fertileStart.setDate(ovulation.getDate() - 5)

    const fertileEnd = new Date(ovulation)
    fertileEnd.setDate(ovulation.getDate() + 1)

    // Next period
    const nextPeriod = new Date(lmp)
    nextPeriod.setDate(lmp.getDate() + length)

    setResult({
      ovulation: ovulation.toLocaleDateString("en-GB"),
      fertileStart: fertileStart.toDateString(),
      fertileEnd: fertileEnd.toDateString(),
      nextPeriod: nextPeriod.toDateString(),
    })
  }

  return (
    <div className='bg-white/10 backdrop-blur-md m-5 rounded-2xl  p-2 '>

      <form onSubmit={handleSubmit}>

        {/* Date Field */}
        <div className='p-2 '>
          <label className='text-white text-2xl min-[360px]:text-sm'>
            The first day of your last period:
          </label>
          <div className='text-white  p-2 rounded-2xl text-2xl m-2'>
            <input
              type='date'
              className='block w-full rounded-md border-gray-900 shadow-sm md:text-2xl p-2'
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Cycle Length Field */}
        <div className='p-2  '>
          <label className='text-white text-2xl'>
            Average cycle length (days):
          </label>

          <div className='bg-white rounded-4xl text-black  m-4 flex flex-row w-fit justify-around items-center'>
            
            <button
              type="button"
              className='bg-black text-white py-2 px-5  text-2xl'
              onClick={() => setLength(length + 1)}
            >
              +
            </button>

            <h2 className='text-2xl font-semibold m-2'>{length}</h2>

            <button
              type="button"
              className='bg-black text-white py-2  px-5 text-2xl'
              onClick={() => length > 1 && setLength(length - 1)}
            >
              -
            </button>

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
  <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">

    <div className=" border border-pink-500 p-10 rounded-2xl ">
      <h3 className="text-xl font-semibold text-pink-400">
        🌸 Ovulation
      </h3>
      <p className="text-white mt-2 text-lg">
        {result.ovulation}
      </p>
    </div>

    <div className=" border border-purple-500 p-10 rounded-2xl">
      <h3 className="text-xl font-semibold text-purple-400">
        💕 Fertile Window
      </h3>
      <p className="text-white mt-2 text-lg">
        {result.fertileStart} → {result.fertileEnd}
      </p>
    </div>

    <div className=" border border-red-500 p-10 rounded-2xl">
      <h3 className="text-xl font-semibold text-red-400">
        🩸 Next Period
      </h3>
      <p className="text-white mt-2 text-lg">
        {result.nextPeriod}
      </p>
    </div>

  </div>
)}

     {/* {result && (
  <div className="mt-5 p-2 text-center">

    <div className=" border border-pink-500 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold text-white">
        🌸 Ovulation
      </h3>
      <p className="text-white mt-2 text-lg">
        {result.ovulation}
      </p>
    </div>
    </div>
)} */}


    </div>
  )
}

export default MiddleCard
