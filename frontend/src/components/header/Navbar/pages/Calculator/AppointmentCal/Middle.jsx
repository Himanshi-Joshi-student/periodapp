import React from 'react'
import { useState } from 'react';
import Button from '../Btn'
const Middle = () => {
  const [lastDate, setLastDate] = useState("");
  const [interval, setInterval] = useState(""); // interval in days
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lastDate || !interval) {
      alert("Please fill both fields");
      return;
    }

    const lastAppointment = new Date(lastDate);
    const intervalDays = Number(interval);

    if (intervalDays <= 0) {
      alert("Interval must be greater than 0");
      return;
    }

    const nextAppointment = new Date(lastAppointment);
    nextAppointment.setDate(lastAppointment.getDate() + intervalDays);

    setResult({
      nextAppointment: nextAppointment.toDateString(),
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md m-10 rounded-2xl p-5 max-w-lg mx-auto">
      <h2 className="text-3xl text-white font-semibold mb-5 text-center">
        📅 Appointment Calculator
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="text-white text-xl">Last Appointment Date:</label>
          <input
            type="date"
            className="block w-full rounded-md shadow-sm p-3 mt-2"
            onChange={(e) => setLastDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="text-white text-xl">Interval (days):</label>
          <input
            type="number"
            min="1"
            className="block w-full rounded-md shadow-sm p-3 mt-2"
            placeholder="Enter interval in days"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <Button>Calculate Next Appointment</Button>
          {/* <button
            type="submit"
            className="bg-neutral-700 text-white text-2xl p-3 rounded-2xl hover:text-pink-300"
          >
            Calculate Next Appointment
          </button> */}
        </div>
      </form>

      {result && (
        <div className="mt-10 text-center border border-purple-500 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold text-purple-400 mb-2">
            🗓 Next Appointment
          </h3>
          <p className="text-white text-xl">{result.nextAppointment}</p>
        </div>
      )}
    </div>
  );
}

export default Middle