export interface Choice {
    text: string;
    nextScene: string;
    isCorrect?: boolean;  // 퀴즈 정답 여부
  }
  
  export interface Scene {
    id: string;
    background: string;
    text: string;
    content?: React.ReactNode;
    choices: Choice[];
    isQuiz?: boolean;     // 퀴즈 여부
    feedback?: {          // 퀴즈 피드백
      correct: string;
      incorrect: string;
    };
  } 