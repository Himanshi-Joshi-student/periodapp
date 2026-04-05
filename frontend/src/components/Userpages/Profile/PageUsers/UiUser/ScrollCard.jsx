import React from "react";
import { useUserAuth } from "../../../../../../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const ScrollCard = () => {
  const { periods } = useUserAuth();
  const navigate = useNavigate();

  // ✅ Function to calculate cycle length and fertile window
  const calculateFertileWindow = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Cycle length in days
    const cycleLength = Math.round(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Ovulation approx = start + 14 days
    const ovulation = new Date(start);
    ovulation.setDate(start.getDate() + 14);

    // Fertile window = 5 days before ovulation
    const fertileStart = new Date(ovulation);
    fertileStart.setDate(ovulation.getDate() - 5);

    return {
      cycleLength,
      ovulationDate: ovulation.toDateString(),
      fertileStart: fertileStart.toDateString(),
    };
  };

  // ✅ If periods not loaded yet
  if (!periods) {
    return <div className="text-center p-10">Loading...</div>;
  }

  // ✅ If new user (no periods added)
  if (periods.length === 0) {
    return (
      <div className="min-h-[300px] flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-3xl p-8 text-center max-w-md w-full border border-pink-200">
          <h2 className="text-2xl font-bold text-pink-600 mb-3">
            No Period Data Found 🌸
          </h2>

          <p className="text-gray-600 mb-6">
            You haven’t added your period details yet.
            Start tracking now to understand your cycle better 💖
          </p>

          <button
            onClick={() => navigate("/Profile/add-period")}
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full shadow-md hover:scale-105 transition duration-300"
          >
            + Add Period
          </button>
        </div>
      </div>
    );
  }

  // ✅ If period exists
  const latestPeriod = periods[periods.length - 1];

  const result = calculateFertileWindow(
    latestPeriod.startDate,
    latestPeriod.endDate
  );

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-gradient-to-br from-pink-400 via-rose-200 to-purple-300 
                      p-10 rounded-3xl shadow-xl w-full max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Cycle Length */}
          <div className="bg-white/60 rounded-2xl p-10 text-center shadow-md hover:scale-105 transition duration-300">
            <h1 className="text-3xl font-bold text-pink-600">
              {result.cycleLength}
            </h1>
            <p className="text-gray-600 mt-2 text-xl font-medium">
              Cycle Length (Days)
            </p>
          </div>

          {/* Ovulation */}
          <div className="bg-white/60 rounded-2xl p-10 text-center shadow-md hover:scale-105 transition duration-300">
            <h1 className="text-xl font-semibold text-purple-600">
              {result.ovulationDate}
            </h1>
            <p className="text-gray-600 mt-2 text-xl font-medium">
              Ovulation Day
            </p>
          </div>

          {/* Fertile Window */}
          <div className="bg-white/60 rounded-2xl p-10 text-center shadow-md hover:scale-105 transition duration-300">
            <h1 className="text-xl font-semibold text-rose-500">
              {result.fertileStart}
            </h1>
            <p className="text-gray-600 mt-2 text-xl font-medium">
              Fertile Window Start
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScrollCard;