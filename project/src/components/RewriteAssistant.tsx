import React, { useState } from 'react';
import { ArrowLeft, Camera, Languages, Mic } from 'lucide-react';

interface RewriteAssistantProps {
  onBack: () => void;
}

interface Article {
  title: string;
  author: string;
  image: string;
}

const articles: Article[] = [
  {
    title: 'Dyslexia and the Brain: What Does Current Research Tell Us?',
    author: 'By Roxanne F. Hudson, Leslie High, Stephanie Al Otaiba',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Too Many Schools Are Misdiagnosing Dyslexia',
    author: 'By Susan Carr',
    image: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?auto=format&fit=crop&q=80&w=800',
  },
];

const RewriteAssistant: React.FC<RewriteAssistantProps> = ({ onBack }) => {
  const [text, setText] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-purple-500 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="p-2 hover:bg-purple-600 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white ml-4">Re-write Assistant</h1>
        </div>

        <div className="space-y-4">
          {/* Input Section */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Typing..."
                className="flex-1 p-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="p-2 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
                <Camera className="w-5 h-5 text-purple-600" />
              </button>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 px-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-2">
                <Camera className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600">Photo</span>
              </button>
              <button className="flex-1 py-2 px-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-2">
                <Languages className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600">Translate</span>
              </button>
              <button className="flex-1 py-2 px-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-2">
                <Mic className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600">Voice</span>
              </button>
            </div>
          </div>

          {/* Articles Section */}
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-purple-900 mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-purple-600">{article.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewriteAssistant;