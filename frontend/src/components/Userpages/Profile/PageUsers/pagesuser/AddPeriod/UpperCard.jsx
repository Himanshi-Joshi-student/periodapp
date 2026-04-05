import React, {useState } from 'react'

const UpperCard = ({firstDay,lastDay,SetFirstday,SetLastday}) => {
  return (
    <div>
        <form>
          <div className=" flex flex-col p-1 m-2">
              <label className="bg-white p-2 text-xl m-2 ">first date of period:</label>
          <input
           type="date" 
           value={firstDay}
           className="px-2 ml-5 text-xl border border-gray-500 rounded-xl p-2"
           onChange={(e)=>SetFirstday(e.target.value)}
           />
          </div>
          <div className=" flex flex-col p-1 m-2">
              <label className="bg-white p-2 text-xl m-2 ">Last date of period:</label>
          <input
          type="date"
          value={lastDay}
          className="px-2 ml-5 text-xl border border-gray-500 rounded-xl p-2"
          onChange={(e)=>SetLastday(e.target.value)}
          />
          </div>
        </form>
    </div>
  )
}

export default UpperCard