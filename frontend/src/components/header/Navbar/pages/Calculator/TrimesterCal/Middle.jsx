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
  // Current Pregnancy Week
    const today = new Date();
    const diffTime = today - lmp;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    let trimester =""
    if (weeks >= 1 && weeks <= 12) trimester = "1st Trimester"
    else if (weeks >= 13 && weeks <= 26) trimester = "2nd Trimester"
    else if (weeks >= 27 && weeks <= 40) trimester = "3rd Trimester"
    else trimester = "Outside typical pregnancy range"
  setResult({
      weeks:weeks >= 0 ?weeks : 0,
      trimester:trimester
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
            Calculate Trimester
          </Button>
          {/* <button
            type="submit"
            className="bg-neutral-700 text-white text-2xl p-4 rounded-2xl hover:text-pink-300"
          >
            Calculate Trimester
          </button> */}
        </div>
      </form>
      {result && (
        <div className="mt-10 grid md:grid-cols-2  gap-5 text-center p-5">
          <div className="border border-purple-500 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-purple-400">
              Trimester :
            </h3>
            <p className="text-white mt-2 text-lg">
              {result.trimester}
            </p>
          </div>
          <div className="border border-blue-500 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-blue-400">
              📅 Current Week
            </h3>
            <p className="text-white mt-2 text-lg">
              {result.weeks}th
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Middle