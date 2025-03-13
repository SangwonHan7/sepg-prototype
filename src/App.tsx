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

  // 역할별 진행 단계 정의
  const roleStages = {
    pm: [
      { stage: '역할 선택', progress: 0 },
      { stage: '배경 설명', progress: 10 },
      { stage: 'AI Agent 이해', progress: 20 },
      { stage: 'AI Agent 동영상 학습', progress: 30 },
      { stage: 'AI Agent 활용', progress: 40 },
      { stage: 'AI Agent 도입 계획', progress: 50 },
      { stage: 'AI Agent 도입', progress: 60 },
      { stage: '완료', progress: 100 },
    ],
    dev: [
      { stage: '역할 선택', progress: 0 },
      { stage: '개발자 배경 설명', progress: 10 },
      { stage: 'AI Agent 이해', progress: 20 },
      { stage: 'AI 시스템 설계', progress: 30 },
      { stage: '개발 환경 구축', progress: 40 },
      { stage: '코드 구현', progress: 50 },
      { stage: '테스트', progress: 70 },
      { stage: '배포', progress: 90 },
      { stage: '완료', progress: 100 },
    ],
    worker: [
      { stage: '역할 선택', progress: 0 },
      { stage: '현장 작업자 배경 설명', progress: 10 },
      { stage: 'AI Agent 소개', progress: 20 },
      { stage: 'AI Agent 체험', progress: 40 },
      { stage: '작업 환경 개선', progress: 60 },
      { stage: '적응 및 피드백', progress: 80 },
      { stage: '완료', progress: 100 },
    ],
  };

  // 진행 단계 계산 함수 수정
  const getProgressStage = (sceneId: string) => {
    const stages: Record<string, { stage: string; progress: number }> = {
      'start': { stage: '역할 선택', progress: 0 },
      'pm': { stage: '배경 설명', progress: 10 },
      'ai-agent': { stage: 'AI Agent 이해', progress: 20 },
      'ai-agent-video': { stage: 'AI Agent 동영상 학습', progress: 30 },
      'think-more': { stage: 'AI Agent 활용', progress: 40 },
      'implement-process': { stage: 'AI Agent 도입 계획', progress: 50 },
      'analyze-site': { stage: 'AI Agent 도입', progress: 60 },
      'analyze-quiz' : { stage: 'AI Agent 도입', progress: 65 },
      'analyze-success' : { stage: 'AI Agent 도입', progress: 65 },
      'analyze-fail' : { stage: 'AI Agent 도입', progress: 65 },
      'build-infra': { stage: 'AI Agent 도입', progress: 70 },
      'infra-quiz' : { stage: 'AI Agent 도입', progress: 75 },
      'infra-success' : { stage: 'AI Agent 도입', progress: 75 },
      'infra-fail' : { stage: 'AI Agent 도입', progress: 75 },
      'develop-ai': { stage: 'AI Agent 도입', progress: 80 },
      'schedule-coding' : { stage: 'AI Agent 도입', progress: 80 },
      'safety-coding' : { stage: 'AI Agent 도입', progress: 80 },
      'resource-coding' : { stage: 'AI Agent 도입', progress: 80 },
      'quality-coding' : { stage: 'AI Agent 도입', progress: 80 },
      'all-modules-complete' : { stage: 'AI Agent 도입', progress: 80 },
      'schedule-example' : { stage: 'AI Agent 도입', progress: 80 },
      'safety-example' : { stage: 'AI Agent 도입', progress: 80 },
      'resource-example' : { stage: 'AI Agent 도입', progress: 80 },
      'quality-example' : { stage: 'AI Agent 도입', progress: 80 },
      'test-apply': { stage: 'AI Agent 도입', progress: 90 },
      'implement-ai': { stage: '완료', progress: 100 },
      'success': { stage: '완료', progress: 100 },
    };

    return stages[sceneId] || { stage: '진행 중', progress: -10 };
  };

  // 현재 역할 판단
  const getCurrentRole = (sceneId: string): 'pm' | 'dev' | 'worker' => {
    if (sceneId === 'start') return 'pm';
    if (history.includes('pm')) return 'pm';
    if (history.includes('dev')) return 'dev';
    if (history.includes('worker')) return 'worker';
    return 'pm'; // 기본값
  };

  const scene = scenes[currentScene] || scenes.notFound;
  const currentRole = getCurrentRole(scene.id);
  const currentStage = getProgressStage(scene.id);

  // 역할이 선택되었는지 확인하는 함수 추가
  const isRoleSelected = () => {
    return history.includes('start');
  };

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

      {/* 진행도를 nav 아래 고정 위치로 이동 - 역할 선택 후에만 표시 */}
      {isRoleSelected() && (
        <div className="sticky top-0 z-10 bg-black/50 p-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            {/* 전체 단계 목록 */}
            <div className="flex flex-wrap gap-2 mb-3">
              {roleStages[currentRole].map((stage, index) => (
                <div
                  key={index}
                  className={`text-sm px-3 py-1 rounded-full ${
                    currentStage && stage.progress <= currentStage.progress
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {stage.stage}
                </div>
              ))}
            </div>
            
            {/* 프로그레스 바 */}
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${currentStage.progress}%` }}
                role="progressbar"
                aria-valuenow={currentStage.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`현재 단계: ${currentStage.stage}`}
              />
            </div>
          </div>
        </div>
      )}

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