'use client';
import { useState } from 'react';

const backgroundMap = {
  morning: '/images/morning.jpg',
  night: '/images/night.jpg',
  rain: '/images/rain.gif',
};

export default function Background() {
  const [mode, setMode] = useState<'morning' | 'night' | 'rain'>('morning');

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${backgroundMap[mode]})` }}
      />
      <div className="absolute top-4 right-4 space-x-2 z-10">
        {Object.keys(backgroundMap).map((key) => (
          <button
            key={key}
            className="bg-white/60 backdrop-blur px-3 py-1 rounded shadow"
            onClick={() => setMode(key as 'morning' | 'night' | 'rain')}
          >
            {key}
          </button>
        ))}
      </div>
    </>
  );
}
