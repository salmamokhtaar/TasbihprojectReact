import React from 'react';
import Counter from './counter/Counter';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Digital Tasbih Counter
          </h1>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Use this digital counter for your daily dhikr and remembrance.
            Set your target count, track your progress, and focus on your worship.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <Counter />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">About Digital Tasbih</h2>
          <p className="text-gray-700 mb-4">
            This digital tasbih (counter) application helps Muslims keep track of their dhikr (remembrance of Allah)
            counts during various forms of worship. It's designed to be simple, beautiful, and easy to use.
          </p>
          <p className="text-gray-700">
            You can use it for counting Subhanallah (Glory be to Allah), Alhamdulillah (Praise be to Allah),
            Allahu Akbar (Allah is the Greatest), and other forms of dhikr.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
