import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [targetCount, setTargetCount] = useState(33);
  const [showTargetReached, setShowTargetReached] = useState(false);

  // Presets for common dhikr counts
  const presets = [
    { name: "Subhanallah", count: 33 },
    { name: "Alhamdulillah", count: 33 },
    { name: "Allahu Akbar", count: 34 },
    { name: "Astaghfirullah", count: 100 },
    { name: "La ilaha illallah", count: 100 }
  ];

  useEffect(() => {
    if (count === targetCount && count > 0) {
      setShowTargetReached(true);
      const timer = setTimeout(() => {
        setShowTargetReached(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [count, targetCount]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleTargetChange = (e) => {
    const value = parseInt(e.target.value);
    setTargetCount(isNaN(value) ? 0 : value);
  };

  const applyPreset = (presetCount) => {
    setTargetCount(presetCount);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        {/* Target count selector */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Target Count:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              value={targetCount}
              onChange={handleTargetChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => applyPreset(preset.count)}
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold py-1 px-2 rounded transition-colors"
              >
                {preset.name} ({preset.count})
              </button>
            ))}
          </div>
        </div>

        {/* Counter display */}
        <div className="relative mb-8 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-full shadow-lg border-4 border-blue-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-sm text-blue-700 mb-2">Current Count</h2>
            <div
              className={`text-7xl md:text-8xl font-bold transition-all duration-300 ${
                count === targetCount ? "text-blue-600 scale-110" : "text-blue-800"
              }`}
            >
              {count}
            </div>
            <div className="text-xs text-blue-600 mt-2">
              Target: {targetCount}
            </div>
          </div>

          {showTargetReached && (
            <div className="absolute top-0 left-0 right-0 -mt-10 bg-blue-500 text-white py-2 px-4 rounded-full text-center animate-bounce shadow-md">
              Target reached! 🎉
            </div>
          )}
        </div>

        {/* Control buttons */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={decrement}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            <span className="text-2xl">-</span>
          </button>

          <button
            onClick={increment}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            <span className="text-2xl">+</span>
          </button>

          <button
            onClick={reset}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            <span className="text-sm">Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
