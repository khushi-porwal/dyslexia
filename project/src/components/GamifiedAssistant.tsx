import React, { useState } from 'react';
import { ArrowLeft, X, Mic, Play, Sparkles, Star } from 'lucide-react';

interface GamifiedAssistantProps {
  onBack: () => void;
}

interface Exercise {
  type: 'letters' | 'words' | 'memory' | 'sequence';
  instruction: string;
  content: string;
  target: string;
  background: string;
  image: string;
}

const exercises: Exercise[] = [
  {
    type: 'letters',
    instruction: "Circle all the b's",
    content: 'b d b q d b p d b b q b p d q b d d b b d p q b d',
    target: 'b',
    background: 'bg-purple-100',
    image: 'https://img.freepik.com/free-vector/cute-boy-playing-ball_1308-26822.jpg'
  },
  {
    type: 'words',
    instruction: 'Circle word on the right that matches',
    content: 'bab kid\ndad ded kid kid\ndad kib',
    target: 'dad',
    background: 'bg-yellow-100',
    image: 'https://img.freepik.com/free-vector/father-son-reading-book_1308-26822.jpg'
  },
  {
    type: 'memory',
    instruction: 'Remember the pattern and repeat',
    content: '🔵 🔴 🟡 🟢',
    target: 'pattern',
    background: 'bg-blue-100',
    image: 'https://img.freepik.com/free-vector/kids-playing-memory-game_23-2148690780.jpg'
  },
  {
    type: 'sequence',
    instruction: 'Put the story in order',
    content: 'Wake up,Brush teeth,Get dressed,Eat breakfast',
    target: 'sequence',
    background: 'bg-green-100',
    image: 'https://img.freepik.com/free-vector/daily-routine-concept_23-2148666159.jpg'
  }
];

const GamifiedAssistant: React.FC<GamifiedAssistantProps> = ({ onBack }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<number[]>([]);
  const [showMemoryGame, setShowMemoryGame] = useState(false);
  const [memoryPattern, setMemoryPattern] = useState<string[]>([]);
  const [userPattern, setUserPattern] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const exercise = exercises[currentExercise];

  const handleLetterClick = (index: number) => {
    if (selectedLetters.includes(index)) {
      setSelectedLetters(selectedLetters.filter(i => i !== index));
    } else {
      setSelectedLetters([...selectedLetters, index]);
    }
  };

  const handleNext = () => {
    setCurrentExercise((prev) => (prev + 1) % exercises.length);
    setSelectedLetters([]);
    setScore(score + 1);
  };

  const startMemoryGame = () => {
    setShowMemoryGame(true);
    const colors = ['🔵', '🔴', '🟡', '🟢'];
    const newPattern = Array(4).fill(0).map(() => colors[Math.floor(Math.random() * colors.length)]);
    setMemoryPattern(newPattern);
    setTimeout(() => {
      setMemoryPattern([]);
    }, 3000);
  };

  const handleColorClick = (color: string) => {
    const newUserPattern = [...userPattern, color];
    setUserPattern(newUserPattern);

    if (newUserPattern.length === memoryPattern.length) {
      if (newUserPattern.every((c, i) => c === memoryPattern[i])) {
        setScore(score + 5);
        setUserPattern([]);
        startMemoryGame();
      } else {
        setUserPattern([]);
        setMemoryPattern([]);
        setShowMemoryGame(false);
      }
    }
  };

  return (
    <div className={`min-h-screen ${exercise.background} p-4`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button onClick={onBack} className="p-2 hover:bg-opacity-20 hover:bg-black rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Gamified Assistant</h1>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-gray-800">{score}</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            {exercise.instruction}
          </div>

          <div className="mb-6">
            <img
              src={exercise.image}
              alt="Exercise illustration"
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>

          {exercise.type === 'memory' && showMemoryGame ? (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {['🔵', '🔴', '🟡', '🟢'].map((color, index) => (
                <button
                  key={index}
                  onClick={() => handleColorClick(color)}
                  className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-4xl"
                >
                  {color}
                </button>
              ))}
            </div>
          ) : exercise.type === 'sequence' ? (
            <div className="space-y-2 mb-6">
              {exercise.content.split(',').map((step, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                >
                  <span className="text-2xl">{index + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded-xl mb-6">
              {exercise.type === 'letters' ? (
                <div className="grid grid-cols-10 gap-2">
                  {exercise.content.split('').map((letter, index) => (
                    letter !== ' ' && (
                      <button
                        key={index}
                        onClick={() => handleLetterClick(index)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          selectedLetters.includes(index)
                            ? 'bg-purple-500 text-white'
                            : 'bg-white hover:bg-purple-100'
                        }`}
                      >
                        {letter}
                      </button>
                    )
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {exercise.content.split('\n').map((line, index) => (
                    <div key={index} className="flex gap-4">
                      {line.split(' ').map((word, wordIndex) => (
                        <button
                          key={wordIndex}
                          onClick={() => handleLetterClick(wordIndex)}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            selectedLetters.includes(wordIndex)
                              ? 'bg-yellow-500 text-white'
                              : 'bg-white hover:bg-yellow-100'
                          }`}
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">{exercise.target}</span>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Mic className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <button
              onClick={exercise.type === 'memory' ? startMemoryGame : handleNext}
              className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
            >
              {exercise.type === 'memory' ? (
                <>
                  <Play className="w-5 h-5" />
                  Start Game
                </>
              ) : (
                'Next'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamifiedAssistant;