import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface ProgressReportProps {
  onBack: () => void;
}

const data = [
  { date: 'Nov 23', words: 50 },
  { date: '24', words: 55 },
  { date: '25', words: 58 },
  { date: '26', words: 62 },
  { date: '27', words: 65 },
  { date: '28', words: 80 },
  { date: '29', words: 85 },
  { date: '30', words: 100 },
];

const ProgressReport: React.FC<ProgressReportProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-pink-500 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="p-2 hover:bg-pink-600 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white ml-4">Progress Report</h1>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-pink-800 mb-4">Learning Progress</h2>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div 
                className="bg-purple-600 h-6 rounded-full"
                style={{ width: '70%' }}
              >
                <span className="text-white text-sm font-medium ml-4 leading-6">70%</span>
              </div>
            </div>
          </div>

          {/* Rankings */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-pink-50 p-4 rounded-xl">
              <h3 className="text-sm font-medium text-pink-800 mb-1">Total Ranking</h3>
              <p className="text-2xl font-bold text-purple-600">1st Place of 100</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-xl">
              <h3 className="text-sm font-medium text-pink-800 mb-1">Daily Ranking</h3>
              <p className="text-2xl font-bold text-purple-600">15th Place</p>
            </div>
          </div>

          {/* Learning Curve */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-lg font-semibold text-pink-800 mb-4">Learning Curve</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Line 
                    type="monotone" 
                    dataKey="words" 
                    stroke="#9333ea" 
                    strokeWidth={2}
                    dot={{ fill: '#9333ea', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressReport;