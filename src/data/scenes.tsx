import { Scene } from '../types/game';

export const scenes: Record<string, Scene> = {
  start: {
    id: 'start',
    background: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070',
    text: '내 이름은 미스터춘. CNS 건설으로 이직하게 되었다. 나의 역할은?',
    choices: [
      { text: '현장 관리자(PM)', nextScene: 'pm' },
      { text: 'IT 빌드센터 개발자/엔지니어', nextScene: 'dev' },
      { text: '현장 근로자', nextScene: 'worker' }
    ]
  },
  pm: {
    id: 'pm',
    background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    text: '내 전임자 김모씨는 작업 기간 산정, 전체 공사일정 계획(WBS), 진도율 점검, 인력 관리, 예산 관리 등 과도한 업무 및 악천후, 직원 이탈같은 변수로 인해 바뀌는 상황에 스트레스를 받아 퇴사했다고 한다. 이를 알게된 CNS 건설은 AI Agent 시스템을 도입하겠다고 하는데...',
    choices: [
      { text: 'AI Agent가 뭐지? 한 번 알아볼까?', nextScene: 'ai-agent' },
    ]
  },
  'ai-agent': {
    id: 'ai-agent',
    background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    text: 'AI Agent를 쓰면 도움이 많이 되겠는걸?',
    content: (
      <div className=" p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">AI Agent란?</h2>
        <div className="space-y-3">
          <p>AI agent(인공지능 에이전트)는 주어진 환경에서 자율적으로 인식하고 행동하여 특정 목표를 달성하도록 설계된 시스템입니다. 주요 특징은 다음과 같습니다</p>
          <p>1. 자율성(Autonomy)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>외부의 직접적인 제어 없이 스스로 판단하고 행동할 수 있음</li>
            <li>환경을 인식하고 상황에 맞게 대응</li>
          </ul>
          <p>2. 지각 능력 (Perception)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>센서나 입력을 통해 환경 정보를 수집</li>
            <li>수집된 데이터를 처리하고 이해</li>
          </ul>
          <p>3. 목표 지향성 (Goal-oriented)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>정해진 목표를 달성하기 위해 행동</li>
            <li>최적의 결과를 얻기 위한 의사결정</li>
          </ul>
          <p>4. 학습 능력 (Learning)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>경험을 통해 성능 개선</li>
            <li>새로운 상황에 적응</li>
          </ul>
        </div>
      </div>
    ),
    choices: [
      { text: '동영상을 봐보자', nextScene: 'ai-agent-video' },
      { text: '현장에서는 어떻게 사용될 수 있을까?', nextScene: 'think-more' }
    ]
  },
  'ai-agent-video': {
    id: 'ai-agent-video',
    background: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    text: 'AI Agent가 무엇인지 영상으로 확인해보세요.',
    content: (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/F8NKVhkZZWI"
          title="AI Agent 소개 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
      choices: [
      { text: '현장에서는 어떻게 사용될 수 있을까?', nextScene: 'think-more' }
    ]
  },
  'think-more': {
    id: 'think-more',
    background: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070',
    text: '건설 현장에서 AI Agent는 다양한 방식으로 활용될 수 있습니다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">건설 현장의 AI Agent 활용</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. 공정 최적화</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>실시간 작업 진도율 모니터링 및 일정 자동 조정</li>
              <li>날씨, 자재 수급 등 변수를 고려한 공정 계획 최적화</li>
              <li>작업자 배치 및 장비 운영 효율화</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">2. 안전 관리</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>CCTV 영상 분석을 통한 위험 상황 실시간 감지</li>
              <li>작업자 안전장비 착용 상태 모니터링</li>
              <li>위험 지역 접근 시 자동 경고 발생</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">3. 품질 관리</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>시공 품질 실시간 검사 및 오류 감지</li>
              <li>자재 품질 자동 검수</li>
              <li>시공 오차 분석 및 개선점 제안</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">4. 자원 관리</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>자재 수급 예측 및 자동 발주</li>
              <li>장비 가동률 최적화</li>
              <li>인력 투입 계획 자동화</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: 'AI Agent 시스템을 도입해보자', nextScene: 'implement-process' },
      { text: '기존 방식을 유지하자', nextScene: 'hospital' }
    ]
  },
  'hospital': {
    id: 'keep-traditional',
    background: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2070',
    text: '기존 방식대로 일하기로 했습니다. 하지만 3개월 후, 과도한 업무 스트레스로 인해 병원에 실려가게 되었습니다...',
    content: (
      <div className="p-4 rounded-lg text-white">
        <img 
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000"
          alt="병원 응급실"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="text-red-400 font-semibold mb-2">의사 소견서</div>
        <p className="text-sm opacity-90">
          과로로 인한 심한 스트레스성 질환<br/>
          최소 2주간의 입원 치료 필요<br/>
          업무 강도 조절 권고
        </p>
      </div>
    ),
    choices: [
      { text: '역시 AI Agent 시스템을 도입했어야 했나...', nextScene: 'implement-process' },
      { text: '처음부터 다시 생각해보자', nextScene: 'start' }
    ]
  },
  'implement-process': {
    id: 'implement-process',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: 'AI Agent 시스템 도입을 결정했습니다. 뭐부터 해야하지?',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">AI Agent 도입 프로세스</h2>
        <div className="space-y-6">
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-semibold mb-2">현장 분석 (1개월)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>현장 업무 프로세스 분석</li>
              <li>데이터 수집 지점 파악</li>
              <li>필요 센서 및 장비 선정</li>
            </ul>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 bg-green-500 rounded-full"></div>
            <h3 className="text-lg font-semibold mb-2">인프라 구축 (2개월)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>IoT 센서 설치</li>
              <li>네트워크 인프라 구축</li>
              <li>데이터 수집/저장 시스템 구축</li>
            </ul>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 bg-yellow-500 rounded-full"></div>
            <h3 className="text-lg font-semibold mb-2">AI 시스템 개발 (2개월)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>AI 모델 개발 및 학습</li>
              <li>현장 데이터 기반 시스템 최적화</li>
              <li>사용자 인터페이스 개발</li>
            </ul>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full"></div>
            <h3 className="text-lg font-semibold mb-2">테스트 및 적용 (1개월)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>시스템 시범 운영</li>
              <li>사용자 교육 진행</li>
              <li>피드백 수집 및 보완</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '현장 분석', nextScene: 'analyze-site' },
      { text: '인프라 구축', nextScene: 'incorrect-choice1' },
      { text: 'AI 시스템 개발', nextScene: 'incorrect-choice2' },
      { text: '테스트 및 적용', nextScene: 'incorrect-choice3' },
    ]
  },
  'incorrect-choice1': {
    id: 'incorrect-choice1',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '잠깐! 인프라를 구축하기 전에...',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">⚠️ 순서 알림</h2>
        <p className="mb-4">인프라 구축 전에 현장 분석이 선행되어야 합니다:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>어떤 데이터를 수집할지 파악이 필요합니다</li>
          <li>센서 설치 위치가 결정되어야 합니다</li>
          <li>네트워크 구성이 계획되어야 합니다</li>
        </ul>
      </div>
    ),
    choices: [
      { text: '다시 생각해보자', nextScene: 'back' }
    ]
  },
  'incorrect-choice2': {
    id: 'incorrect-choice2',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '잠깐! AI 시스템을 개발하기 전에...',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">⚠️ 순서 알림</h2>
        <p className="mb-4">AI 시스템 개발을 위해서는:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>현장 분석을 통한 요구사항 정의가 필요합니다</li>
          <li>데이터 수집을 위한 인프라가 구축되어야 합니다</li>
          <li>실제 현장 데이터가 확보되어야 합니다</li>
        </ul>
      </div>
    ),
    choices: [
      { text: '다시 생각해보자', nextScene: 'back' }
    ]
  },
  'incorrect-choice3': {
    id: 'incorrect-choice3',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '잠깐! 테스트 및 적용 전에...',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">⚠️ 순서 알림</h2>
        <p className="mb-4">테스트 및 적용을 위해서는:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>현장 분석을 통한 기초 작업이 완료되어야 합니다</li>
          <li>데이터 수집 인프라가 구축되어 있어야 합니다</li>
          <li>AI 시스템이 개발되어 있어야 합니다</li>
        </ul>
      </div>
    ),
    choices: [
      { text: '다시 생각해보자', nextScene: 'back' }
    ]
  },
  'implement-ai': {
    id: 'implement-ai',
    background: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    text: '6개월 후, AI Agent 시스템이 성공적으로 도입되었습니다!',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">AI Agent 시스템 도입 성과</h2>
        <div className="space-y-4">
          <div className="bg-green-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">주요 개선 사항</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>공정 일정 준수율 30% 향상</li>
              <li>안전사고 발생률 50% 감소</li>
              <li>자원 낭비 40% 절감</li>
              <li>품질 불량률 35% 감소</li>
            </ul>
          </div>
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">작업 환경 개선</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>업무 스트레스 대폭 감소</li>
              <li>의사결정 시간 단축</li>
              <li>작업자 만족도 상승</li>
              <li>효율적인 자원 관리</li>
            </ul>
          </div>
          <div className="bg-purple-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">🏆 수상 내역</h3>
            <p>건설 혁신상 수상 - AI 기반 스마트 건설 관리 시스템 부문</p>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '성공적인 선택이었다!', nextScene: 'success' }
    ]
  },
  'success': {
    id: 'success',
    background: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    text: '축하합니다! 성공적으로 AI Agent 시스템을 도입하여 스마트 건설 현장을 구축했습니다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">🎉 미션 완료!</h2>
        <div className="space-y-4">
          <p>당신은 성공적으로:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>체계적인 도입 프로세스를 수행했고</li>
            <li>효과적인 AI 시스템을 개발했으며</li>
            <li>안정적인 테스트와 적용을 완료했습니다</li>
          </ul>
          <p className="mt-4 text-green-400">이제 당신의 현장은 AI Agent의 도움으로 더욱 스마트하고 효율적으로 운영됩니다!</p>
        </div>
      </div>
    ),
    choices: [
      { text: '처음으로 돌아가기', nextScene: 'start' }
    ]
  },
  notFound: {
    id: 'notFound',
    background: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&q=80&w=2070',
    text: '아직 개발 중인 페이지입니다. 다음 업데이트를 기다려주세요!',
    choices: [
      { text: '이전 페이지로 돌아가기', nextScene: 'back' },
      { text: '처음으로 돌아가기', nextScene: 'start' }
    ]
  },
  'analyze-site': {
    id: 'analyze-site',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '현장 분석을 시작했습니다. 먼저 현장의 주요 문제점들을 파악해보죠.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">현장 분석 보고서</h2>
        <div className="space-y-4">
          <div className="bg-red-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">주요 문제점</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>공정 진행률 추적 어려움</li>
              <li>날씨에 따른 일정 지연</li>
              <li>인력 배치 비효율</li>
              <li>안전사고 위험</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '문제 해결을 위한 데이터 수집 계획을 세워보자', nextScene: 'analyze-quiz' }
    ]
  },
  'analyze-quiz': {
    id: 'analyze-quiz',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '현장 분석을 위해 어떤 데이터를 수집해야 할까요?',
    isQuiz: true,
    feedback: {
      correct: '정확합니다! 이러한 데이터들은 AI Agent가 현장 상황을 이해하고 최적의 의사결정을 하는데 필수적입니다.',
      incorrect: '다시 한번 생각해보세요. 현장의 문제점들을 해결하기 위해 필요한 데이터는 무엇일까요?'
    },
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">데이터 수집 계획</h2>
        <p className="mb-4">현장의 문제를 해결하기 위해 가장 중요한 데이터는 무엇일까요?</p>
      </div>
    ),
    choices: [
      { 
        text: '작업자 위치, 날씨 정보, 공정 진행 상황, CCTV 영상', 
        nextScene: 'analyze-success',
        isCorrect: true 
      },
      { 
        text: '작업자 개인정보, 회사 매출, 경쟁사 정보', 
        nextScene: 'analyze-fail',
        isCorrect: false 
      },
      { 
        text: '직원 급여, 휴가 일정, 사내 동호회 정보', 
        nextScene: 'analyze-fail',
        isCorrect: false 
      }
    ]
  },
  'analyze-success': {
    id: 'analyze-success',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '훌륭합니다! 이제 무엇을 해야할까요?',
    content: (
      <div className="p-4 rounded-lg text-white bg-green-500/20">
        <h2 className="text-xl font-bold mb-4">데이터 수집 계획 승인</h2>
        <div className="space-y-4">
          <p>다음 데이터들을 수집하기 위한 센서와 시스템을 설치하겠습니다:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>작업자 위치 추적 센서</li>
            <li>기상 관측 장비</li>
            <li>공정 모니터링 카메라</li>
            <li>안전 감시 CCTV</li>
          </ul>
        </div>
      </div>
    ),
    choices: [
      { text: '인프라 구축을 시작하자', nextScene: 'build-infra' },
      { text: 'AI 시스템 개발을 시작하자', nextScene: 'incorrect-choice2' },
      { text: '테스트 및 적용을 시작하자', nextScene: 'incorrect-choice3' }
    ]
  },
  'analyze-fail': {
    id: 'analyze-fail',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '이런 데이터로는 현장의 문제를 해결하기 어려울 것 같습니다.',
    content: (
      <div className="p-4 rounded-lg text-white bg-red-500/20">
        <h2 className="text-xl font-bold mb-4">데이터 수집 계획 재검토 필요</h2>
        <p>현장의 실질적인 문제 해결을 위해서는 다른 종류의 데이터가 필요합니다.</p>
      </div>
    ),
    choices: [
      { text: '다시 생각해보자', nextScene: 'analyze-quiz' }
    ]
  },
  'build-infra': {
    id: 'build-infra',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '인프라 구축을 시작합니다. 어떤 장비들이 필요할까요?',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">인프라 구축 계획</h2>
        <div className="space-y-4">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">필요 장비 목록</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>IoT 센서 네트워크</li>
              <li>데이터 수집 서버</li>
              <li>모니터링 시스템</li>
              <li>통신 인프라</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '장비 설치 위치를 결정해보자', nextScene: 'infra-quiz' }
    ]
  },
  'infra-quiz': {
    id: 'infra-quiz',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '각 장비들을 어디에 설치하면 좋을까요?',
    isQuiz: true,
    feedback: {
      correct: '정확합니다! 이렇게 설치하면 현장 전체를 효과적으로 모니터링할 수 있습니다.',
      incorrect: '다시 한번 생각해보세요. 현장의 특성과 각 장비의 용도를 고려해야 합니다.'
    },
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">장비 설치 계획</h2>
        <p className="mb-4">현장의 효율적인 모니터링을 위해 가장 적절한 설치 계획은 무엇일까요?</p>
      </div>
    ),
    choices: [
      { 
        text: '작업자 위치 센서는 안전모에, CCTV는 주요 교차점에, 기상 관측 장비는 옥상에, 공정 모니터링 카메라는 각 작업 구역에 설치', 
        nextScene: 'infra-success',
        isCorrect: true 
      },
      { 
        text: '모든 장비를 현장 사무실에 집중 설치', 
        nextScene: 'infra-fail',
        isCorrect: false 
      },
      { 
        text: '장비들을 건물 외곽에만 설치', 
        nextScene: 'infra-fail',
        isCorrect: false 
      }
    ]
  },
  'infra-success': {
    id: 'infra-success',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '훌륭한 설치 계획입니다! 이제 무엇을 해야 할까요?',
    content: (
      <div className="p-4 rounded-lg text-white bg-green-500/20">
        <h2 className="text-xl font-bold mb-4">인프라 구축 완료</h2>
        <div className="space-y-4">
          <p>다음 장비들의 설치가 완료되었습니다:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>작업자 안전모에 위치 추적 센서 부착</li>
            <li>주요 교차점에 CCTV 설치</li>
            <li>옥상에 기상 관측 장비 설치</li>
            <li>각 작업 구역에 공정 모니터링 카메라 설치</li>
            <li>데이터 수집/저장 서버 구축</li>
            <li>통신 네트워크 구성</li>
          </ul>
        </div>
      </div>
    ),
    choices: [
      { text: 'AI 시스템 개발을 시작하자', nextScene: 'develop-ai' },
      { text: '테스트 및 적용을 시작하자', nextScene: 'incorrect-choice3' }
    ]
  },
  'infra-fail': {
    id: 'infra-fail',
    background: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    text: '이런 설치 계획으로는 현장을 효과적으로 모니터링하기 어려울 것 같습니다.',
    content: (
      <div className="p-4 rounded-lg text-white bg-red-500/20">
        <h2 className="text-xl font-bold mb-4">설치 계획 재검토 필요</h2>
        <p>현장의 특성과 각 장비의 용도를 고려하여 다시 계획을 세워야 합니다.</p>
      </div>
    ),
    choices: [
      { text: '다시 생각해보자', nextScene: 'infra-quiz' }
    ]
  },
  'develop-ai': {
    id: 'develop-ai',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: 'AI 시스템 개발을 시작합니다. 어떤 기능을 먼저 개발할까요?',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">AI 시스템 개발 계획</h2>
        <div className="space-y-4">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">주요 개발 모듈</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>작업 일정 최적화 엔진</li>
              <li>위험 상황 감지 시스템</li>
              <li>자원 관리 시스템</li>
              <li>품질 관리 시스템</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '작업 일정 최적화 엔진 개발', nextScene: 'schedule-coding' },
      { text: '위험 상황 감지 시스템 개발', nextScene: 'safety-coding' },
      { text: '자원 관리 시스템 개발', nextScene: 'resource-coding' },
      { text: '품질 관리 시스템 개발', nextScene: 'quality-coding' },
      { text: '모든 모듈 개발 완료! 테스트를 시작하자', nextScene: 'all-modules-complete' }
    ]
  },
  'schedule-coding': {
    id: 'schedule-coding',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '작업 일정 최적화 엔진의 핵심 알고리즘을 작성해봅시다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">작업 일정 최적화 알고리즘</h2>
        <div className="space-y-4">
          <p className="mb-4">날씨와 작업자 상황을 고려한 일정 최적화 알고리즘을 작성해보세요:</p>
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <pre contentEditable className="outline-none">{`def optimize_schedule(tasks, workers, weather):
    # 여기에 코드를 작성하세요
    
    return optimized_schedule`}</pre>
          </div>
          <div className="bg-blue-500/20 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">참고 사항</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>tasks: 작업 목록 (우선순위, 소요시간 포함)</li>
              <li>workers: 작업자 정보 (스킬, 가용시간 포함)</li>
              <li>weather: 날씨 예보 데이터</li>
              <li>optimized_schedule: 최적화된 작업 일정</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '예시 코드 확인하기', nextScene: 'schedule-example' },
      { text: '다른 모듈 개발하기', nextScene: 'develop-ai' }
    ]
  },
  'schedule-example': {
    id: 'schedule-example',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '작업 일정 최적화 알고리즘 예시입니다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">작업 일정 최적화 알고리즘 예시</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <pre>{`def optimize_schedule(tasks, workers, weather):
    # 날씨 영향도 분석
    weather_impacts = analyze_weather_impact(tasks, weather)
    
    # 작업자 가용성 및 스킬 매칭
    worker_availability = {}
    for worker in workers:
        skills = worker.get_skills()
        available_hours = worker.get_available_hours()
        worker_availability[worker.id] = {
            'skills': skills,
            'hours': available_hours
        }
    
    # 작업 우선순위 계산
    prioritized_tasks = []
    for task in tasks:
        # 기본 우선순위
        priority = task.get_base_priority()
        
        # 날씨 영향도 반영
        weather_impact = weather_impacts.get(task.id, 0)
        priority *= (1 - weather_impact)
        
        # 작업자 매칭도 반영
        best_worker_match = find_best_worker(
            task, worker_availability)
        if best_worker_match:
            priority *= best_worker_match['skill_match']
        
        prioritized_tasks.append({
            'task': task,
            'priority': priority,
            'best_worker': best_worker_match
        })
    
    # 우선순위에 따라 정렬
    prioritized_tasks.sort(
        key=lambda x: x['priority'], reverse=True)
    
    # 최종 일정 생성
    optimized_schedule = []
    for task_info in prioritized_tasks:
        task = task_info['task']
        worker = task_info['best_worker']
        
        # 작업 시간 할당
        start_time = find_available_time_slot(
            task, worker, optimized_schedule)
        
        optimized_schedule.append({
            'task': task,
            'worker': worker,
            'start_time': start_time,
            'duration': task.get_duration()
        })
    
    return optimized_schedule`}</pre>
          </div>
          <div className="bg-green-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">알고리즘 설명</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>날씨 영향도 분석 및 반영</li>
              <li>작업자 스킬 및 가용성 매칭</li>
              <li>다중 요소 기반 우선순위 계산</li>
              <li>최적 시간대 할당</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '코드 작성으로 돌아가기', nextScene: 'schedule-coding' },
      { text: '다른 모듈 개발하기', nextScene: 'develop-ai' }
    ]
  },
  'safety-coding': {
    id: 'safety-coding',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '위험 상황 감지 시스템의 핵심 알고리즘을 작성해봅시다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">위험 상황 감지 알고리즘</h2>
        <div className="space-y-4">
          <p className="mb-4">CCTV 영상에서 위험 상황을 감지하는 알고리즘을 작성해보세요:</p>
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <pre contentEditable className="outline-none">{`def detect_danger(video_frame, worker_positions):
    # 여기에 코드를 작성하세요
    
    return danger_level, warning_message`}</pre>
          </div>
          <div className="bg-blue-500/20 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">참고 사항</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>video_frame: 현재 CCTV 프레임 (numpy array)</li>
              <li>worker_positions: 작업자 위치 정보 (list of coordinates)</li>
              <li>danger_level: 위험 수준 (0-1 사이 값)</li>
              <li>warning_message: 경고 메시지</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '예시 코드 확인하기', nextScene: 'safety-example' },
      { text: '다른 모듈 개발하기', nextScene: 'develop-ai' }
    ]
  },
  'safety-example': {
    id: 'safety-example',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '위험 상황 감지 알고리즘 예시입니다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">위험 상황 감지 알고리즘 예시</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <pre>{`def detect_danger(video_frame, worker_positions):
    # 작업자 위치 기반 위험 구역 확인
    danger_zones = identify_danger_zones(video_frame)
    risk_level = 0
    warnings = []
    
    # 각 작업자의 위치 확인
    for worker_pos in worker_positions:
        # 위험 구역과의 거리 계산
        for zone in danger_zones:
            distance = calculate_distance(worker_pos, zone)
            if distance < SAFE_DISTANCE:
                risk_level = max(risk_level, 
                               1.0 - (distance / SAFE_DISTANCE))
                warnings.append(
                    f"작업자가 위험 구역에 접근 중 (거리: {distance}m)")
    
    # CCTV 영상에서 불안전 행동 감지
    unsafe_actions = detect_unsafe_behavior(video_frame)
    if unsafe_actions:
        risk_level = max(risk_level, 0.8)
        warnings.extend(unsafe_actions)
    
    # 경고 메시지 생성
    warning_message = "\\n".join(warnings) if warnings else "안전"
    
    return risk_level, warning_message`}</pre>
          </div>
          <div className="bg-green-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">알고리즘 설명</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>작업자와 위험 구역 간의 거리 계산</li>
              <li>CCTV 영상에서 불안전 행동 감지</li>
              <li>위험 수준 및 경고 메시지 생성</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '코드 작성으로 돌아가기', nextScene: 'safety-coding' },
      { text: '다른 모듈 개발하기', nextScene: 'develop-ai' }
    ]
  },
  'resource-coding': {
    id: 'resource-coding',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '자원 관리 시스템의 핵심 알고리즘을 작성해봅시다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">자원 관리 알고리즘</h2>
        <div className="space-y-4">
          <p className="mb-4">자재와 장비의 최적 운영을 위한 알고리즘을 작성해보세요:</p>
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <pre contentEditable className="outline-none">{`def optimize_resources(current_stock, usage_history, upcoming_tasks):
    # 여기에 코드를 작성하세요
    
    return order_recommendations, resource_allocation`}</pre>
          </div>
          <div className="bg-blue-500/20 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">참고 사항</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>current_stock: 현재 재고 현황</li>
              <li>usage_history: 자원 사용 이력</li>
              <li>upcoming_tasks: 예정된 작업 목록</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '예시 코드 확인하기', nextScene: 'resource-example' },
      { text: '다른 모듈 개발하기', nextScene: 'develop-ai' }
    ]
  },
  'resource-example': {
    id: 'resource-example',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '자원 관리 알고리즘 예시입니다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">자원 관리 알고리즘 예시</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <pre>{`def optimize_resources(current_stock, usage_history, upcoming_tasks):
    # 향후 자원 수요 예측
    predicted_demand = predict_resource_demand(
        usage_history, upcoming_tasks)
    
    # 재고 부족 위험 분석
    stock_risks = []
    order_recommendations = []
    for resource, stock in current_stock.items():
        demand = predicted_demand[resource]
        if stock < demand * SAFETY_FACTOR:
            order_amount = calculate_order_amount(
                stock, demand, usage_history[resource])
            order_recommendations.append(
                (resource, order_amount))
            stock_risks.append(
                f"{resource}: 재고 부족 위험")
    
    # 자원 할당 최적화
    resource_allocation = {}
    for task in upcoming_tasks:
        required_resources = get_required_resources(task)
        allocation = optimize_allocation(
            required_resources, current_stock)
        resource_allocation[task] = allocation
    
    return order_recommendations, resource_allocation`}</pre>
          </div>
          <div className="bg-green-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">알고리즘 설명</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>과거 사용량 기반 수요 예측</li>
              <li>재고 부족 위험 분석 및 발주 추천</li>
              <li>작업별 최적 자원 할당</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '코드 작성으로 돌아가기', nextScene: 'resource-coding' },
      { text: '다른 모듈 개발하기', nextScene: 'develop-ai' }
    ]
  },
  'quality-coding': {
    id: 'quality-coding',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '품질 관리 시스템의 핵심 알고리즘을 작성해봅시다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">품질 검사 알고리즘</h2>
        <div className="space-y-4">
          <p className="mb-4">시공 품질을 자동으로 검사하는 알고리즘을 작성해보세요:</p>
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <pre contentEditable className="outline-none">{`def inspect_quality(construction_data, quality_standards):
    # 여기에 코드를 작성하세요
    
    return quality_score, issues_found`}</pre>
          </div>
          <div className="bg-blue-500/20 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">참고 사항</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>construction_data: 시공 데이터</li>
              <li>quality_standards: 품질 기준</li>
              <li>quality_score: 품질 점수 (0-100)</li>
              <li>issues_found: 발견된 문제점 목록</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '예시 코드 확인하기', nextScene: 'quality-example' },
      { text: '다른 모듈 개발하기', nextScene: 'develop-ai' }
    ]
  },
  'quality-example': {
    id: 'quality-example',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '품질 관리 알고리즘 예시입니다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">품질 관리 알고리즘 예시</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <pre>{`def inspect_quality(construction_data, quality_standards):
    total_score = 0
    issues = []
    
    # 각 품질 기준 항목 검사
    for criteria, standard in quality_standards.items():
        actual_value = measure_quality(
            construction_data, criteria)
        
        # 허용 오차 범위 확인
        if not within_tolerance(
            actual_value, standard.target, standard.tolerance):
            issues.append(
                f"{criteria}: {actual_value} (기준: {standard.target})")
        
        # 항목별 점수 계산
        score = calculate_score(
            actual_value, standard.target, standard.weight)
        total_score += score
    
    # 전체 품질 점수 계산 (0-100)
    quality_score = normalize_score(total_score)
    
    # 발견된 문제점 정렬 (심각도 순)
    issues_found = sort_by_severity(issues)
    
    return quality_score, issues_found`}</pre>
          </div>
          <div className="bg-green-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">알고리즘 설명</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>품질 기준별 측정 및 검사</li>
              <li>허용 오차 범위 확인</li>
              <li>가중치 기반 품질 점수 계산</li>
              <li>문제점 심각도 기반 정렬</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '코드 작성으로 돌아가기', nextScene: 'quality-coding' },
      { text: '다른 모듈 개발하기', nextScene: 'develop-ai' }
    ]
  },
  'all-modules-complete': {
    id: 'all-modules-complete',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '모든 AI 모듈 개발이 완료되었습니다!',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">AI 시스템 개발 완료</h2>
        <div className="space-y-4">
          <div className="bg-green-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">개발 완료된 모듈</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>작업 일정 최적화 엔진</li>
              <li>위험 상황 감지 시스템</li>
              <li>자원 관리 시스템</li>
              <li>품질 관리 시스템</li>
            </ul>
          </div>
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">다음 단계</h3>
            <p>이제 개발된 시스템을 현장에 적용하고 테스트를 진행할 준비가 되었습니다.</p>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '테스트 및 적용 단계로 넘어가자', nextScene: 'test-apply' }
    ]
  },
  'test-apply': {
    id: 'test-apply',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '개발된 AI 시스템의 테스트를 시작합니다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">테스트 계획</h2>
        <div className="space-y-4">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">테스트 단계</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>단위 테스트: 각 모듈별 기능 검증</li>
              <li>통합 테스트: 모듈 간 연동 검증</li>
              <li>시스템 테스트: 전체 시스템 성능 검증</li>
              <li>사용자 테스트: 현장 작업자 피드백 수집</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '테스트 시나리오를 작성해보자', nextScene: 'test-quiz' }
    ]
  },
  'test-quiz': {
    id: 'test-quiz',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '어떤 테스트 시나리오가 가장 효과적일까요?',
    isQuiz: true,
    feedback: {
      correct: '정확합니다! 이런 단계적이고 체계적인 테스트로 시스템의 안정성을 확보할 수 있습니다.',
      incorrect: '다시 한번 생각해보세요. 효과적인 테스트를 위해서는 체계적인 접근이 필요합니다.'
    },
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">테스트 시나리오</h2>
        <div className="space-y-4">
          <p className="mb-4">다음 중 가장 적절한 테스트 시나리오는 무엇일까요?</p>
        </div>
      </div>
    ),
    choices: [
      { 
        text: '1. 단위 테스트 → 통합 테스트 → 제한된 현장 테스트 → 점진적 확대 적용', 
        nextScene: 'test-success',
        isCorrect: true 
      },
      { 
        text: '2. 전체 시스템을 한번에 현장에 적용', 
        nextScene: 'test-fail',
        isCorrect: false 
      },
      { 
        text: '3. 테스트 없이 바로 실제 환경에 적용', 
        nextScene: 'test-fail',
        isCorrect: false 
      }
    ]
  },
  'test-success': {
    id: 'test-success',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '체계적인 테스트 계획입니다! 이제 실제 적용을 시작해볼까요?',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">테스트 및 적용 계획 승인</h2>
        <div className="space-y-4">
          <div className="bg-green-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">진행 계획</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>각 모듈별 단위 테스트 수행</li>
              <li>모듈 간 통합 테스트 진행</li>
              <li>테스트 현장 선정 및 시범 적용</li>
              <li>피드백 수집 및 시스템 개선</li>
              <li>전체 현장 확대 적용</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '시스템 적용을 시작하자', nextScene: 'implement-ai' }
    ]
  },
  'test-fail': {
    id: 'test-fail',
    background: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
    text: '이런 방식은 위험할 수 있습니다.',
    content: (
      <div className="p-4 rounded-lg text-white">
        <h2 className="text-xl font-bold mb-4">테스트 계획 재검토 필요</h2>
        <div className="space-y-4">
          <div className="bg-red-500/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">발생 가능한 문제점</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>예상치 못한 버그 발생</li>
              <li>시스템 안정성 미확보</li>
              <li>사용자 적응 문제</li>
              <li>현장 운영 차질</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    choices: [
      { text: '다시 생각해보자', nextScene: 'test-quiz' }
    ]
  },
}; 