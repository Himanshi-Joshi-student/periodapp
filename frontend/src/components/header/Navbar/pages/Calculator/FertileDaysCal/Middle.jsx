import React, { useState } from 'react'
import Button from '../Btn'
const Middle = () => {
    const [length,setLength]=useState(29)
    const [date,setDate]=useState("")
    const[result,setResult]=useState(null)
    const handleSubmit=(e)=>{
        e.preventDefault()
         if (!date) {
      alert("Please select your last period date")
      return
    }
    const lmp = new Date(date)

    // Ovulation = LMP + (cycleLength - 14)
    const ovulation = new Date(lmp)
    ovulation.setDate(lmp.getDate() + (length - 14))

         // // Fertile window
    const fertileStart = new Date(ovulation)
    fertileStart.setDate(ovulation.getDate() - 5)

    const fertileEnd = new Date(ovulation)
    fertileEnd.setDate(ovulation.getDate() + 1)
    setResult({
        fertileStart: fertileStart.toDateString(),
      fertileEnd: fertileEnd.toDateString(),
    })
    }
  return (
    <div className='bg-white/10 backdrop-blur-md m-15 rounded-2xl  p-3'>

      <form onSubmit={handleSubmit}>

        {/* Date Field */}
        <div className='p-2 m-5'>
          <label className='text-white text-2xl'>
            The first day of your last period:
          </label>
          <div className='text-white md:text-xl p-4 rounded-2xl text-4xl m-2'>
            <input
              type='date'
              className='block w-full rounded-md border-gray-900 shadow-sm md:text-2xl p-5'
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Cycle Length Field */}
        <div className='p-2 m-5 md:p-3'>
          <label className='text-white text-2xl'>
            Average cycle length (days):
          </label>

          <div className='bg-white rounded-2xl text-black p-1 m-4 flex flex-row w-fit justify-around items-center'>
            
            <button
              type="button"
              className='bg-black text-white py-3 px-5 rounded-2xl text-2xl'
              onClick={() => setLength(length + 1)}
            >
              +
            </button>

            <h2 className='text-2xl font-semibold m-3'>{length}</h2>

            <button
              type="button"
              className='bg-black text-white py-3 rounded-2xl px-6 text-2xl'
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
  <div className="mt-10  text-center">
    <div className=" border border-purple-500 p-10 rounded-2xl">
      <h3 className="text-xl font-semibold text-purple-700">
        💕 Fertile Window
      </h3>
      <p className="text-white mt-2 text-lg">
        {result.fertileStart} → {result.fertileEnd}
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

export default Middle