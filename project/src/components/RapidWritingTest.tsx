import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Eye, Play, Eraser } from 'lucide-react';

interface RapidWritingTestProps {
  onBack: () => void;
  onShowResult: () => void;
}

const RapidWritingTest: React.FC<RapidWritingTestProps> = ({ onBack, onShowResult }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const words = [
    { name: 'Apple', color: 'bg-red-500 text-white' },
    { name: 'Orange', color: 'bg-orange-500 text-white' },
    { name: 'Banana', color: 'bg-yellow-500 text-white' },
    { name: 'Grapes', color: 'bg-purple-500 text-white' },
    { name: 'Strawberry', color: 'bg-pink-500 text-white' }
  ];

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        setContext(ctx);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setLastX(x);
      setLastY(y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(x, y);
      context.stroke();
      
      setLastX(x);
      setLastY(y);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-500 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="p-2 hover:bg-green-600 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white ml-4">Rapid Automated Writing</h1>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Interactive Drawing Area</h2>

          <div className="bg-white border-4 border-green-200 rounded-xl mb-6 relative">
            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className="w-full touch-none cursor-crosshair"
            />
            <button
              onClick={clearCanvas}
              className="absolute top-2 right-2 p-2 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
            >
              <Eraser className="w-5 h-5 text-red-600" />
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setCurrentWord(null)}
              className="flex-1 bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Show All Words
            </button>
            <button
              onClick={() => setCurrentWord(words[Math.floor(Math.random() * words.length)].name)}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Play All Words
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-6">
            {words.map((word, index) => (
              <button
                key={index}
                onClick={() => setCurrentWord(word.name)}
                className={`py-2 px-4 rounded-lg ${word.color} font-medium transform hover:scale-105 transition-all`}
              >
                {word.name}
              </button>
            ))}
          </div>

          <button
            onClick={onShowResult}
            className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-colors transform hover:scale-105"
          >
            Show me the result
          </button>
        </div>
      </div>
    </div>
  );
};

export default RapidWritingTest;