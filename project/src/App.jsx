import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import AuthHeader from './components/AuthHeader';
import QuizSection from './components/QuizSection';
import WelcomeScreen from './components/WelcomeScreen';
import ScreeningTest from './components/ScreeningTest';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleStartQuiz = () => {
    setShowWelcome(false);
    setShowQuiz(true);
  };

  const handleQuizComplete = () => {
    setShowQuiz(false);
    setShowAuth(true);
  };

  if (showWelcome) {
    return <WelcomeScreen onStartQuiz={handleStartQuiz} />;
  }
  

  if (showQuiz) {
    return <QuizSection onQuizComplete={handleQuizComplete} />;
  }

  if (showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-lightyellow-300 via-yellow-300 to-lightYellow-400 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20" />
          
          {/* Background decorative images */}
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80" 
            alt="" 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-5"
          />
          
          <div className="relative p-8">
            {/* Hero image */}
            <div className="absolute -top-4 -right-4 w-32 h-32">
              <img 
                src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=200&q=80" 
                alt="" 
                className="w-full h-full object-cover rounded-full opacity-50 animate-pulse"
              />
            </div>

            <AuthHeader isLogin={isLogin} />
            <AuthForm isLogin={isLogin} onSubmit={() => {}} />

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-500 hover:text-purple-600 font-medium transition-colors hover:scale-105 transform transition-transform"
              >
                {isLogin ? "Need an account? Sign up" : "Already have an account? Log in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}