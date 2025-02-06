import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import AuthHeader from './components/AuthHeader';
import QuizSection from './components/QuizSection';
import WelcomeScreen from './components/WelcomeScreen';
import HomePage from './components/HomePage';
import AssistantsPage from './components/AssistantsPage';
import ScreeningTest from './components/ScreeningTest';
import PhonologicalTest from './components/PhonologicalTest';
import GrayOralTest from './components/GrayOralTest';
import WorkingMemoryTest from './components/WorkingMemoryTest';
import RapidWritingTest from './components/RapidWritingTest';
import GamifiedAssistant from './components/GamifiedAssistant';
import ProgressReport from './components/ProgressReport';
import RewriteAssistant from './components/RewriteAssistant';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [showAssistants, setShowAssistants] = useState(false);
  const [showScreeningTest, setShowScreeningTest] = useState(false);
  const [currentTest, setCurrentTest] = useState<string | null>(null);
  const [showProgressReport, setShowProgressReport] = useState(false);
  const [showGamifiedAssistant, setShowGamifiedAssistant] = useState(false);
  const [showRewriteAssistant, setShowRewriteAssistant] = useState(false);

  const handleStartQuiz = () => {
    setShowWelcome(false);
    setShowQuiz(true);
  };

  const handleQuizComplete = () => {
    setShowQuiz(false);
    setShowAuth(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAuth(false);
    setShowHome(true);
  };

  const handleScreeningClick = () => {
    setShowHome(false);
    setShowScreeningTest(true);
  };

  const handleSolutionsClick = () => {
    setShowHome(false);
    setShowAssistants(true);
  };

  const handleTestSelect = (test: string) => {
    setShowScreeningTest(false);
    setCurrentTest(test);
  };

  const handleBackToScreening = () => {
    setCurrentTest(null);
    setShowScreeningTest(true);
  };

  const handleBackToHome = () => {
    setShowAssistants(false);
    setShowGamifiedAssistant(false);
    setShowRewriteAssistant(false);
    setShowHome(true);
  };

  const handleShowProgressReport = () => {
    setCurrentTest(null);
    setShowProgressReport(true);
  };

  const handleBackFromProgressReport = () => {
    setShowProgressReport(false);
    setCurrentTest('rapid-writing');
  };

  const handleAssistantSelect = (assistant: string) => {
    setShowAssistants(false);
    if (assistant === 'gamified') {
      setShowGamifiedAssistant(true);
    } else if (assistant === 'rewrite') {
      setShowRewriteAssistant(true);
    }
  };

  if (showWelcome) {
    return <WelcomeScreen onStartQuiz={handleStartQuiz} />;
  }

  if (showQuiz) {
    return <QuizSection onQuizComplete={handleQuizComplete} />;
  }

  if (showHome) {
    return <HomePage 
      onScreeningClick={handleScreeningClick}
      onSolutionsClick={handleSolutionsClick}
    />;
  }

  if (showProgressReport) {
    return <ProgressReport onBack={handleBackFromProgressReport} />;
  }

  if (showGamifiedAssistant) {
    return <GamifiedAssistant onBack={handleBackToHome} />;
  }

  if (showRewriteAssistant) {
    return <RewriteAssistant onBack={handleBackToHome} />;
  }

  if (currentTest === 'phonological') {
    return <PhonologicalTest onBack={handleBackToScreening} />;
  }

  if (currentTest === 'gray-oral') {
    return <GrayOralTest onBack={handleBackToScreening} />;
  }

  if (currentTest === 'working-memory') {
    return <WorkingMemoryTest onBack={handleBackToScreening} />;
  }

  if (currentTest === 'rapid-writing') {
    return <RapidWritingTest onBack={handleBackToScreening} onShowResult={handleShowProgressReport} />;
  }

  if (showScreeningTest) {
    return <ScreeningTest onTestSelect={handleTestSelect} onBack={() => setShowHome(true)} />;
  }

  if (showAssistants) {
    return <AssistantsPage onBack={handleBackToHome} onAssistantSelect={handleAssistantSelect} />;
  }

  if (showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20" />
          
          <div className="relative p-8">
            <AuthHeader isLogin={isLogin} />
            <AuthForm isLogin={isLogin} onSubmit={handleLogin} />

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

  return null;
}

export default App;