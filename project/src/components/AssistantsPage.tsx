import React from 'react';
import { Book, Pencil, Calendar, GamepadIcon, ArrowLeft } from 'lucide-react';

interface AssistantsPageProps {
  onBack: () => void;
  onAssistantSelect: (assistant: string) => void;
}

const AssistantsPage: React.FC<AssistantsPageProps> = ({ onBack, onAssistantSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-purple-400 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-purple-900" />
          </button>
          <button className="p-2 hover:bg-purple-400 rounded-full transition-colors">
            <div className="w-6 h-6 rounded-full bg-purple-900" />
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6">
            {/* Owl Image */}
            <div className="flex justify-center mb-8">
              <img
                src="https://epe.brightspotcdn.com/dims4/default/e299b9a/2147483647/strip/true/crop/4822x3272+86+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Fb9%2F60%2F2e5262d04eb99530e73d1ec6e045%2F1123-ai-dyslexia-klein-fs-1193114165.jpg"
                alt=""
                className="w-48 h-48 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Assistants */}
            <div className="space-y-4">
              <button 
                onClick={() => onAssistantSelect('reading')}
                className="w-full bg-white border-2 border-purple-200 hover:border-purple-300 p-4 rounded-2xl flex items-center gap-4 group transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Book className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-purple-900 font-medium">Reading Assistant</span>
              </button>

              <button 
                onClick={() => onAssistantSelect('rewrite')}
                className="w-full bg-white border-2 border-purple-200 hover:border-purple-300 p-4 rounded-2xl flex items-center gap-4 group transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Pencil className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-purple-900 font-medium">Writing Assistant</span>
              </button>

              <button 
                onClick={() => onAssistantSelect('sequence')}
                className="w-full bg-white border-2 border-purple-200 hover:border-purple-300 p-4 rounded-2xl flex items-center gap-4 group transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-purple-900 font-medium">Sequencing Assistant</span>
              </button>

              <button 
                onClick={() => onAssistantSelect('gamified')}
                className="w-full bg-white border-2 border-purple-200 hover:border-purple-300 p-4 rounded-2xl flex items-center gap-4 group transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <GamepadIcon className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-purple-900 font-medium">Gamified Assistant</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssistantsPage;