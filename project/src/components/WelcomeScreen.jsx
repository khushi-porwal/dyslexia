import React from 'react';
import { Wand2, ArrowRight } from 'lucide-react';

const WelcomeScreen = ({ onStartQuiz, username = "Explorer" }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative p-8">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-200 rounded-full opacity-20 animate-pulse" />
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Welcome message */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <Wand2 className="w-10 h-10 text-purple-500 animate-bounce" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Welcome, {username}!
                </h1>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Every child has a unique way of learning. Together, we can turn challenges into strengths.
                Get ready for an amazing adventure! We've prepared some super fun questions just for you. 
                Are you ready to show us how creative you can be? 
              </p>
              
              <button
                onClick={onStartQuiz}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
              >
                Start the Fun Quiz!
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            {/* Right side - Creative images */}
            <div className="relative h-[400px]">
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&q=80"
                alt="Colorful abstract art"
                className="absolute top-0 right-0 w-72 h-72 object-cover rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform"
              />
              
              {/* Decorative floating images */}
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80"
                alt="Colorful balloons"
                className="absolute bottom-0 left-0 w-48 h-48 object-cover rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform"
              />
              
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
                alt="Confetti"
                className="absolute top-20 left-20 w-56 h-56 object-cover rounded-2xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;