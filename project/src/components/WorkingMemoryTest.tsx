import React, { useState, useEffect } from 'react';
import { ArrowLeft, Volume2, Check, X, Play, Pause } from 'lucide-react';

interface WorkingMemoryTestProps {
  onBack: () => void;
}

interface WordTest {
  word: string;
  options: string[];
  image: string;
  color: string;
}

const tests: WordTest[] = [
  {
    word: 'Apple',
    options: ['Appll', 'Apple', 'Aple'],
    image: 'https://www.svgrepo.com/show/84264/apple.svg',
    color: 'red',
  },
  {
    word: 'Orange',
    options: ['Orng', 'Orange', 'Orang'],
    image: 'https://www.svgrepo.com/show/84284/orange.svg',
    color: 'orange',
  },
  {
    word: 'Banana',
    options: ['Banan', 'Banana', 'Banane'],
    image: 'https://www.svgrepo.com/show/84266/banana.svg',
    color: 'yellow',
  },
];

const WorkingMemoryTest: React.FC<WorkingMemoryTestProps> = ({ onBack }) => {
  const [feedback, setFeedback] = useState<string[]>(Array(tests.length).fill(''));
  const [scores, setScores] = useState<number[]>(Array(tests.length).fill(0));
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (isPlaying !== null) {
      const timer = setTimeout(() => {
        setIsPlaying(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const handlePronunciation = (testIndex: number, optionIndex: number) => {
    const isCorrect = optionIndex === 1;
    const newFeedback = [...feedback];
    const newScores = [...scores];

    if (isCorrect) {
      newFeedback[testIndex] = 'Great job! You pronounced it correctly! 🎉';
      newScores[testIndex] += 1;
    } else {
      newFeedback[testIndex] = 'Not quite right. Try again! 💪';
      if (newScores[testIndex] > 0) newScores[testIndex] -= 1;
    }

    setFeedback(newFeedback);
    setScores(newScores);
  };

  const playWord = (index: number) => {
    setIsPlaying(index);
    // Here you would normally trigger text-to-speech
    setTimeout(() => setIsPlaying(null), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-yellow-400 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="p-2 hover:bg-yellow-500 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white ml-4">Working Memory Test</h1>
        </div>

        <div className="space-y-6">
          {tests.map((test, testIndex) => (
            <div key={testIndex} className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-yellow-800">
                  Try to pronounce the word "{test.word}"
                </h2>
                <button
                  onClick={() => playWord(testIndex)}
                  className={`p-2 rounded-full ${
                    isPlaying === testIndex ? 'bg-green-100' : 'bg-yellow-100'
                  } transition-colors`}
                >
                  {isPlaying === testIndex ? (
                    <Pause className="w-5 h-5 text-green-600" />
                  ) : (
                    <Play className="w-5 h-5 text-yellow-600" />
                  )}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                {test.options.map((option, index) => (
                  <button
                    key={index}
                    className={`relative bg-${test.color}-100 p-4 rounded-xl flex flex-col items-center transform transition-all hover:scale-105 ${
                      index === 1 ? 'ring-2 ring-green-500' : 'ring-2 ring-red-500'
                    }`}
                    onClick={() => handlePronunciation(testIndex, index)}
                  >
                    <img
                      src={test.image}
                      alt={test.word}
                      className="w-12 h-12 mb-2"
                    />
                    <span className={`text-sm text-${test.color}-700`}>{option}</span>
                    {index === 1 ? (
                      <Check className="absolute top-2 right-2 w-4 h-4 text-green-500" />
                    ) : (
                      <X className="absolute top-2 right-2 w-4 h-4 text-red-500" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between gap-2 text-yellow-800">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5" />
                  <span>Auditory Feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Score:</span>
                  <span className="font-bold text-lg">{scores[testIndex]}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg mt-2 ${
                feedback[testIndex].includes('Great') ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
              }`}>
                {feedback[testIndex] || 'Click a card to test pronunciation'}
              </div>
            </div>
          ))}

          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600 transition-colors"
          >
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>

          {showHint && (
            <div className="bg-white rounded-xl p-4 mt-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Tips for Better Pronunciation</h3>
              <ul className="list-disc list-inside text-yellow-700 space-y-2">
                <li>Listen to the word first by clicking the play button</li>
                <li>Break down the word into syllables</li>
                <li>Practice each syllable separately</li>
                <li>Try to mirror the sound you heard</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkingMemoryTest;