import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, RefreshCw } from 'lucide-react';

interface GrayOralTestProps {
  onBack: () => void;
}

const poems = [
  {
    text: `Twinkle, twinkle, little star,
Up above, so bright and far.
Winking softly in the night,
Sprinkling the sky with your light.
You guide the ships and make them sail,
Through every storm, wind, and gale.
With a sparkle, near or far,
You're the brightest little star!`,
    highlightWords: ['twinkle', 'Sprinkling', 'sparkle', 'brightest']
  },
  {
    text: `Rainbow colors in the sky,
Painted arches way up high.
Red and orange, yellow too,
Green and purple, indigo blue.
After rain comes sunny day,
Making colors bright and gay.
Nature's beauty on display,
Till the colors fade away.`,
    highlightWords: ['Rainbow', 'Painted', 'colors', 'bright']
  },
  {
    text: `Little butterfly in flight,
Dancing in the morning light.
Fluttering from flower to flower,
Playing in nature's bower.
Wings of gold and silver shine,
Moving in a graceful line.
Such a pretty sight to see,
Flying wild and flying free.`,
    highlightWords: ['butterfly', 'Dancing', 'Fluttering', 'graceful']
  }
];

const GrayOralTest: React.FC<GrayOralTestProps> = ({ onBack }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  const handleNewPoem = () => {
    setCurrentPoemIndex((prev) => (prev + 1) % poems.length);
    setSeconds(0);
    setIsRunning(false);
  };

  const currentPoem = poems[currentPoemIndex];

  const highlightText = (text: string) => {
    let highlightedText = text;
    currentPoem.highlightWords.forEach(word => {
      const regex = new RegExp(word, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="text-purple-500">$&</span>`);
    });
    return highlightedText;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-purple-500 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="p-2 hover:bg-purple-600 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white ml-4">Grey Oral Reading Test</h1>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="mb-6">
            <img
              src="https://img.freepik.com/free-vector/cute-girl-reading-book_138676-2074.jpg"
              alt="Reading girl"
              className="w-full h-48 object-contain rounded-xl"
            />
          </div>

          <h2 className="text-xl font-semibold text-purple-800 mb-4">Read the text below</h2>

          <div className="bg-purple-50 rounded-xl p-4 mb-6">
            <p 
              className="text-purple-800 text-center"
              dangerouslySetInnerHTML={{ __html: highlightText(currentPoem.text) }}
            />
          </div>

          <div className="text-center">
            <p className="text-purple-700 mb-2">Time Taken</p>
            <div className="bg-purple-100 rounded-lg p-4 inline-block">
              <span className="text-2xl font-bold text-purple-800">{formatTime(seconds)}</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
            >
              <Clock className="w-5 h-5" />
              {isRunning ? 'Stop' : 'Start'} Timer
            </button>
            <button
              onClick={handleNewPoem}
              className="bg-purple-100 text-purple-700 px-6 py-2 rounded-lg hover:bg-purple-200 transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              New Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrayOralTest;