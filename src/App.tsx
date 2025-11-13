import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { getRandomQuestions, Question } from './data/questions';
import { Answer } from './components/Quiz';

type Screen = 'welcome' | 'quiz' | 'results';

function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [candidateName, setCandidateName] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleStart = (name: string) => {
    setCandidateName(name);
    setQuestions(getRandomQuestions(20));
    setScreen('quiz');
  };

  const handleComplete = (finalAnswers: Answer[]) => {
    setAnswers(finalAnswers);
    setScreen('results');
  };

  const handleRestart = () => {
    setCandidateName('');
    setQuestions([]);
    setAnswers([]);
    setScreen('welcome');
  };

  return (
    <>
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {screen === 'quiz' && (
        <Quiz
          questions={questions}
          candidateName={candidateName}
          onComplete={handleComplete}
        />
      )}
      {screen === 'results' && (
        <Results
          candidateName={candidateName}
          answers={answers}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
