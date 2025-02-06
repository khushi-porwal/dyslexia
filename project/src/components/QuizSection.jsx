import React, { useState } from 'react';
import { Star, Award, Sparkles, ArrowRight, RefreshCcw } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "What's your favorite superhero power?",
    options: ["Flying", "Invisibility", "Super Strength", "Reading Minds"],
  },
  {
    id: 2,
    question: "If you could have any pet from the ocean, what would it be?",
    options: ["Dolphin", "Friendly Shark", "Glowing Jellyfish", "Singing Whale"],
  },
  {
    id: 3,
    question: "What would you name your own planet if you discovered one?",
    options: ["Sparkletopia", "Candyland", "Adventura", "Dragonworld"],
  },
  {
    id: 4,
    question: "What's your dream job when you grow up?",
    options: ["Space Explorer", "Animal Doctor", "Video Game Creator", "Robot Engineer"],
  },
  {
    id: 5,
    question: "If you could invent anything, what would it do?",
    options: ["Time Travel Machine", "Flying Car", "Homework Helper Robot", "Food Replicator"],
  }
];

const QuizSection = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleSubmit = () => {
    onQuizComplete();
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative p-8">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20" />
          
          <div className="relative">
            <div className="flex justify-center mb-6">
              <Award className="w-16 h-16 text-yellow-400 animate-bounce" />
            </div>
            
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
              Amazing Job! 🎉
            </h2>
            
            <div className="space-y-4">
              {Object.entries(answers).map(([questionIndex, answer]) => (
                <div key={questionIndex} className="bg-purple-50 rounded-xl p-4">
                  <p className="font-medium text-purple-700">
                    {questions[parseInt(questionIndex)].question}
                  </p>
                  <p className="text-purple-600 mt-2">
                    Your answer: {answer}
                  </p>
                </div>
              ))}
            </div>
            
            <button
              onClick={handleSubmit}
              className="mt-8 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-105 transform"
            >
              <Star className="w-5 h-5" />
              Complete Quiz & Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative p-8">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20" />
        
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <Star className="w-8 h-8 text-yellow-400" />
            <span className="text-purple-600 font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {question.question}
          </h2>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 text-purple-700 py-4 px-6 rounded-xl font-medium shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <span>{option}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
              </button>
            ))}
          </div>
          
          <div className="mt-8 flex justify-between items-center text-sm text-purple-600">
            <span>Take your time!</span>
            <span>Choose what feels right 💫</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;