import React from 'react';
import { Mic, BookOpen, Brain, Pencil, ArrowLeft } from 'lucide-react';

interface ScreeningTestProps {
  onTestSelect: (test: string) => void;
  onBack?: () => void;
}

const ScreeningTest: React.FC<ScreeningTestProps> = ({ onTestSelect, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-4">
      <div className="max-w-md mx-auto">
        {/* Header with back button */}
        <div className="flex justify-between items-center mb-6">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 hover:bg-purple-400 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-purple-900" />
            </button>
          )}
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-purple-800 mb-2 text-center">Screening Test</h1>
            
            {/* Owl Images */}
            <div className="flex justify-center gap-4 mb-8">
              <img 
                src="https://img.freepik.com/free-vector/cute-owl-with-book-cartoon-icon-illustration_138676-2088.jpg"
                alt="" 
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onTestSelect('phonological')}
                className="bg-white hover:bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex flex-col items-center gap-3 border-2 border-purple-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-purple-800 text-center">
                  Phonological awareness Test
                </span>
              </button>

              <button
                onClick={() => onTestSelect('gray-oral')}
                className="bg-white hover:bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex flex-col items-center gap-3 border-2 border-purple-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-purple-800 text-center">
                  Gray Oral Reading Test
                </span>
              </button>

              <button
                onClick={() => onTestSelect('working-memory')}
                className="bg-white hover:bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex flex-col items-center gap-3 border-2 border-purple-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-purple-800 text-center">
                  Working Memory Test
                </span>
              </button>

              <button
                onClick={() => onTestSelect('rapid-writing')}
                className="bg-white hover:bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex flex-col items-center gap-3 border-2 border-purple-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Pencil className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-purple-800 text-center">
                  Rapid Automated Writing
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreeningTest;