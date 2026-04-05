import React from 'react'
import { useState } from 'react'
import Button from '../Btn'
const Middle = () => {
  const [date,setDate]=useState("")
  const [result,setResult]=useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (!date) {
      alert("Please select your last period date");
      return;
    }
      const lmp=new Date(date)
  // //DUE DATE =LMP+280 DAYS 
  // const dueDate=new Date(lmp)
  // dueDate.setDate(lmp.getDate()+280)
  // Estimated Conception Date = LMP + 14 days
    const conceptionDate = new Date(lmp);
    conceptionDate.setDate(lmp.getDate() + 14);

  // Current Pregnancy Week
    const today = new Date();
    const diffTime = today - lmp;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const currentWeek = Math.floor(diffDays / 7);

  setResult({
    // dueDate:dueDate.toDateString(),
      conceptionDate: conceptionDate.toDateString(),
      currentWeek: currentWeek >= 0 ? currentWeek : 0
  })
  }

  return (
      <div className="bg-white/10 backdrop-blur-md m-15 rounded-2xl p-5">
      <form onSubmit={handleSubmit}>

        <div className="p-4">
          <label className="text-white text-2xl">
            First day of your last period:
          </label>

          <input
            type="date"
            className="block w-full rounded-md shadow-sm p-4 mt-3"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex justify-center mt-5">
             <Button>
            Calculate Conception Date
          </Button>
          {/* <button
            type="submit"
            className="bg-neutral-700 text-white text-2xl p-4 rounded-2xl hover:text-pink-300"
          >
            Calculate Conception Date
          </button> */}
        </div>
      </form>

      {result && (
        <div className="mt-10 grid md:grid-cols-2 gap-5 text-center p-5">

          {/* <div className="border border-pink-500 p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-pink-400">
              🤰 Due Date
            </h3>
            <p className="text-white mt-2 text-lg">
              {result.dueDate}
            </p>
          </div> */}

          <div className="border border-purple-500 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-purple-400">
              🍼 Conception Date
            </h3>
            <p className="text-white mt-2 text-lg">
              {result.conceptionDate}
            </p>
          </div>

          <div className="border border-blue-500 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-blue-400">
              📅 Current Week
            </h3>
            <p className="text-white mt-2 text-lg">
              Week {result.currentWeek}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export default Middle