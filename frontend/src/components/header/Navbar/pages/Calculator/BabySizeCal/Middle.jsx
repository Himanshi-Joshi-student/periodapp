import React, { useState } from 'react';
import Button from '../Btn'
const Middle = () => {
  const [date, setDate] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please select your last period date");
      return;
    }

    const lmp = new Date(date);

    // 3️⃣ Current Pregnancy Week
    const today = new Date();
    const diffTime = today - lmp;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);

    // 4️⃣ Baby Size Logic
    let babySize = {};
    if (weeks <= 4) babySize = { size: "Poppy seed", weight: "<0.1 g" };
    else if (weeks <= 8) babySize = { size: "Raspberry", weight: "1 g" };
    else if (weeks <= 12) babySize = { size: "Lime", weight: "14 g" };
    else if (weeks <= 16) babySize = { size: "Avocado", weight: "100 g" };
    else if (weeks <= 20) babySize = { size: "Banana", weight: "300 g" };
    else if (weeks <= 24) babySize = { size: "Corn cob", weight: "600 g" };
    else if (weeks <= 28) babySize = { size: "Eggplant", weight: "1000 g" };
    else if (weeks <= 32) babySize = { size: "Squash", weight: "1.7 kg" };
    else if (weeks <= 36) babySize = { size: "Honeydew melon", weight: "2.5 kg" };
    else babySize = { size: "Small pumpkin", weight: "3.2–3.5 kg" };

    // ✅ Set all results together
    setResult({
      currentWeek: weeks >= 0 ? weeks : 0,
      babySize
    });
  };

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
            Calculate
          </Button>
          {/* <button
            type="submit"
            className="bg-neutral-700 text-white text-2xl p-4 rounded-2xl hover:text-pink-300"
          >
            Calculate
          </button> */}
        </div>
      </form>

      {result && (
        <div className="mt-10 grid md:grid-cols-2 gap-5 text-center p-5">

          <div className="border border-blue-500 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-blue-400">
              📅 Current Week
            </h3>
            <p className="text-white mt-2 text-lg">Week {result.currentWeek}</p>
          </div>

          <div className="border border-green-500 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-green-400">
              👶 Baby Size
            </h3>
            <p className="text-white mt-2 text-lg">
              {result.babySize.size} ({result.babySize.weight})
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

export default Middle;
