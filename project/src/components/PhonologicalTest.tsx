import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mic, Volume2, Play, Pause } from 'lucide-react';

interface PhonologicalTestProps {
  onBack: () => void;
}

const PhonologicalTest: React.FC<PhonologicalTestProps> = ({ onBack }) => {
  const [recordings, setRecordings] = useState<Record<number, string>>({});
  const [isRecording, setIsRecording] = useState<number | null>(null);
  const [timer, setTimer] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});

  const rhymeWords = ['cut', 'bun', 'but', 'bud', 'sun', 'run', 'tub', 'nut'];
  const [selectedRhymes, setSelectedRhymes] = useState<string[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
      setIsRecording(null);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleRecordClick = (questionId: number) => {
    if (isRecording === questionId) {
      setIsRecording(null);
      setIsTimerRunning(false);
    } else {
      setIsRecording(questionId);
      if (questionId === 0) {
        setTimer(10);
        setIsTimerRunning(true);
      }
    }
  };

  const handleRhymeClick = (word: string) => {
    setSelectedRhymes((prev) => {
      if (prev.includes(word)) {
        return prev.filter((w) => w !== word);
      }
      return [...prev, word];
    });
  };

  const handleAnswerSubmit = (questionId: number) => {
    setShowFeedback((prev) => ({ ...prev, [questionId]: true }));
  };

  const getFeedback = (questionId: number, answer: string) => {
    switch (questionId) {
      case 1:
        return answer === '3' ? 'Correct! "But-ter-fly" has 3 syllables!' : 'Try again! Clap along: But-ter-fly';
      case 2:
        return answer === '8' ? 'Correct! E-L-E-P-H-A-N-T has 8 letters!' : 'Count the letters again!';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-pink-500 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="p-2 hover:bg-pink-600 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white ml-4">Phonological Test</h1>
        </div>

        <div className="bg-pink-200 rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-pink-800 mb-4">Rhyme with the word "gut"</h2>
          
          <div className="grid grid-cols-4 gap-2 mb-8">
            {rhymeWords.map((word) => (
              <button
                key={word}
                onClick={() => handleRhymeClick(word)}
                className={`${
                  selectedRhymes.includes(word)
                    ? 'bg-pink-500 text-white'
                    : 'bg-white text-pink-700'
                } rounded-lg p-2 text-center transition-all transform hover:scale-105 active:scale-95`}
              >
                {word}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 text-pink-700 mb-2">
                <Volume2 className="w-5 h-5" />
                <span>Name as many colors as you can in {timer} seconds</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={answers[0] || ''}
                  onChange={(e) => setAnswers({ ...answers, 0: e.target.value })}
                  placeholder={isRecording === 0 ? 'Recording...' : 'Start recording to speak'}
                  className="flex-1 p-2 border border-pink-200 rounded-lg"
                  disabled={isRecording === 0}
                />
                <button
                  onClick={() => handleRecordClick(0)}
                  className={`${
                    isRecording === 0 ? 'bg-red-500' : 'bg-pink-500'
                  } text-white p-2 rounded-lg transition-colors hover:opacity-90`}
                >
                  {isRecording === 0 ? <Pause className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
              </div>
              {isRecording === 0 && (
                <div className="mt-2 text-center text-pink-700">
                  Recording... {timer} seconds left
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 text-pink-700 mb-2">
                <span>👏</span>
                <span>Clap out the syllables in "butterfly". Write the number of claps you did?</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={answers[1] || ''}
                  onChange={(e) => setAnswers({ ...answers, 1: e.target.value })}
                  placeholder="Enter number of syllables"
                  className="flex-1 p-2 border border-pink-200 rounded-lg"
                />
                <button
                  onClick={() => handleAnswerSubmit(1)}
                  className="bg-pink-500 text-white px-4 rounded-lg hover:bg-pink-600"
                >
                  Check
                </button>
              </div>
              {showFeedback[1] && (
                <div className={`mt-2 text-sm ${
                  answers[1] === '3' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {getFeedback(1, answers[1] || '')}
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 text-pink-700 mb-2">
                <span>📝</span>
                <span>How many letters are in the word "elephant"?</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={answers[2] || ''}
                  onChange={(e) => setAnswers({ ...answers, 2: e.target.value })}
                  placeholder="Enter number of letters"
                  className="flex-1 p-2 border border-pink-200 rounded-lg"
                />
                <button
                  onClick={() => handleAnswerSubmit(2)}
                  className="bg-pink-500 text-white px-4 rounded-lg hover:bg-pink-600"
                >
                  Check
                </button>
              </div>
              {showFeedback[2] && (
                <div className={`mt-2 text-sm ${
                  answers[2] === '8' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {getFeedback(2, answers[2] || '')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonologicalTest;