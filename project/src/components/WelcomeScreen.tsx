import React from 'react';
import { Wand2, ArrowRight, Sparkles, Star } from 'lucide-react';

interface WelcomeScreenProps {
  onStartQuiz: () => void;
  username?: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz, username = "Explorer" }) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-300 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden relative p-8 border border-white/20">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Welcome message */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Wand2 className="w-10 h-10 text-purple-500 animate-bounce" />
                  <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-transparent bg-clip-text">
                  Welcome, {username}!
                </h1>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 relative">
                <Star className="w-4 h-4 text-yellow-400 absolute -left-6 top-0 animate-spin-slow" />
                Get ready for an amazing adventure! We've prepared some super fun questions just for you. 
                Are you ready to show us how creative you can be? 🌟
              </p>
              
              <button
                onClick={onStartQuiz}
                className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white py-4 px-8 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg overflow-hidden"
              >
                <span className="relative z-10">Start the Fun Quiz!</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
            
            {/* Right side - Creative images */}
            <div className="relative h-[400px]">
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&q=80"
                alt="Colorful abstract art"
                className="absolute top-0 right-0 w-72 h-72 object-cover rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105"
              />
              
              {/* Decorative floating images */}
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80"
                alt="Colorful balloons"
                className="absolute bottom-0 left-0 w-48 h-48 object-cover rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-500 hover:scale-105"
              />
              
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
                alt="Confetti"
                className="absolute top-20 left-20 w-56 h-56 object-cover rounded-2xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;