import React from 'react';
import { Mail, Lock } from 'lucide-react';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
          Email
        </label>
        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-purple-500 transition-colors" />
          <input
            id="email"
            type="email"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-colors group-hover:border-purple-300"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
          Password
        </label>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-purple-500 transition-colors" />
          <input
            id="password"
            type="password"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-colors group-hover:border-purple-300"
            placeholder="••••••••"
          />
        </div>
      </div>

      {!isLogin && (
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-purple-500 transition-colors" />
            <input
              id="confirmPassword"
              type="password"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-colors group-hover:border-purple-300"
              placeholder="••••••••"
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 hover:scale-105 transform transition-transform"
      >
        {isLogin ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;