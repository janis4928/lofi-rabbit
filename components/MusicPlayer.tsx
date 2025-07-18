'use client';

import React, { useState, useRef, useEffect } from 'react';

const tracks = [
  {
    title: 'Rainy Day Vibes',
    url: 'https://filesamples.com/samples/audio/mp3/sample3.mp3',
  },
  {
    title: 'Morning Light',
    url: 'https://filesamples.com/samples/audio/mp3/sample1.mp3',
  },
  {
    title: 'Midnight Chill',
    url: 'https://filesamples.com/samples/audio/mp3/sample2.mp3',
  },
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = loop;
    }
  }, [loop]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
  };

  const toggleLoop = () => setLoop(!loop);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-lg p-4 rounded-2xl shadow-lg w-96 text-center">
      <h2 className="text-lg font-semibold mb-2">{tracks[currentTrack].title}</h2>
      <audio
        ref={audioRef}
        src={tracks[currentTrack].url}
        onEnded={playNext}
        preload="auto"
      />
      <div className="flex justify-center gap-4 mt-3">
        <button
          onClick={togglePlay}
          className="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={playNext}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Next
        </button>
        <button
          onClick={toggleLoop}
          className={`px-4 py-2 rounded-xl ${loop ? 'bg-green-600' : 'bg-gray-500'} text-white hover:bg-green-700`}
        >
          Loop {loop ? 'On' : 'Off'}
        </button>
      </div>
    </div>
  );
}
