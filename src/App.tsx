import React, { useState } from 'react';
import { ChevronRight, Home, RefreshCcw } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { scenes } from './data/scenes.tsx';
import { Scene } from './types/game';

function App() {
  const [currentScene, setCurrentScene] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);

  const handleChoice = (nextScene: string) => {
    if (nextScene === 'back') {
      handleBack();
      return;
    }

    if (!scenes[nextScene]) {
      setHistory(prev => [...prev, currentScene]);
      setCurrentScene('notFound');
      return;
    }

    setHistory(prev => [...prev, currentScene]);
    setCurrentScene(nextScene);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevScene = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setCurrentScene(prevScene);
    }
  };

  const handleRestart = () => {
    setCurrentScene('start');
    setHistory([]);
  };

  const scene = scenes[currentScene] || scenes.notFound;

  return (
    <div className="min-h-screen flex flex-col" role="main">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${scene.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
        aria-hidden="true"
      />

      <nav className="relative z-10 bg-black/50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="처음으로 돌아가기"
          >
            <Home className="w-5 h-5" />
            처음으로
          </button>
          {history.length > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="이전 장면으로 돌아가기"
            >
              <RefreshCcw className="w-5 h-5" />
              되돌아가기
            </button>
          )}
        </div>
      </nav>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-end p-6">
        <div className="w-full max-w-3xl">
          {scene.content && (
            <div className="bg-black/70 rounded-lg p-6 mb-6">
              {scene.content}
            </div>
          )}

          <div className="bg-black/70 rounded-lg p-6 mb-6">
            <p className="text-white text-lg mb-6 whitespace-pre-line">
              <TypeAnimation
                key={scene.id}
                sequence={[scene.text]}
                speed={80}
                cursor={false}
              />
            </p>
            <div className="space-y-3" role="group" aria-label="선택지">
              {scene.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice.nextScene)}
                  className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-lg text-white"
                >
                  <span>{choice.text}</span>
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;