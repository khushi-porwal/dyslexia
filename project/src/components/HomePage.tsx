import React from 'react';
import { Brain } from 'lucide-react';

interface HomePageProps {
  onScreeningClick: () => void;
  onSolutionsClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onScreeningClick, onSolutionsClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-4">
      <div className="max-w-md mx-auto">
        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-purple-900 mb-4">What is Dyslexia?</h1>
            
            {/* Cute Character */}
            <div className="flex justify-center mb-6">
              <img
                src="https://leighbrainandspine.com/wp-content/uploads/2020/05/dyslexia.jpg"
                alt=""
                className="w-48 h-48 object-cover rounded-full shadow-lg"
              />
            </div>

            <p className="text-purple-800 mb-6">
              Dyslexia is a neurological condition that affects how the brain processes language. People
              with Dyslexia have normal intelligence, but they may struggle with tasks involving reading language.
            </p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={onScreeningClick}
                className="w-full bg-white border-2 border-purple-200 hover:border-purple-300 p-4 rounded-2xl flex items-center gap-4 group transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-purple-900 font-medium">Screening & Diagnosis Test</span>
              </button>

              <button
                onClick={onSolutionsClick}
                className="w-full bg-white border-2 border-purple-200 hover:border-purple-300 p-4 rounded-2xl flex items-center gap-4 group transition-all hover:shadow-md">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path d="M9 12h6" />
                  </svg>
                </div>
                <span className="text-purple-900 font-medium">Solutions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;