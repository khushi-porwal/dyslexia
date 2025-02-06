import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const AuthHeader = ({ isLogin }) => {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        {isLogin ? (
          <Rocket className="w-12 h-12 text-purple-500 animate-bounce" />
        ) : (
          <Sparkles className="w-12 h-12 text-purple-500 animate-spin-slow" />
        )}
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        {isLogin ? "Welcome Back!" : "Join the Fun!"}
      </h2>
      <p className="text-gray-600">
        {isLogin ? "We're so excited to see you again!" : "Create your account and start the adventure"}
      </p>
    </div>
  );
};

export default AuthHeader;