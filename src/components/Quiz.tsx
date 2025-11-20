import { useState } from 'react';
import { Question } from '../data/questions';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuizProps {
  questions: Question[];
  candidateName: string;
  onComplete: (answers: Answer[]) => void;
}

export interface Answer {
  questionId: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  type: string;
}

export default function Quiz({ questions, candidateName, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  let time = 0.5;

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    const finalAnswers: Answer[] = questions.map((q) => {
      const userAnswer = answers[q.id] || '';
      let isCorrect = false;

      if (q.type === 'open') {
        isCorrect = userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
      } else {
        isCorrect = userAnswer === q.correctAnswer;
      }

      return {
        questionId: q.id,
        question: q.question,
        userAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
        type: q.type,
      };
    });

    onComplete(finalAnswers);
  };

  const isAnswered = answers[currentQuestion.id] !== undefined;
  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.5 }} 
          animate={{ scale: 1 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {candidateName}
                </h2>
                <span className="text-sm text-gray-600">
                  Pregunta {currentIndex + 1} de {questions.length}
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            { 
              /* <motion.div
              key={currentIndex} 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, x: -100 }} 
              transition={{ duration: 0.5 }} 
            >
              </motion.div> */
            }
              <div className="mb-8">
                
                <motion.div
                  key={`${currentQuestion.id}-type`} 
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -100 }} 
                  transition={{ duration: 0.25 }} 
                >
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                      {currentQuestion.type === 'multiple' && 'Opción Múltiple'}
                      {currentQuestion.type === 'open' && 'Pregunta Abierta'}
                      {currentQuestion.type === 'boolean' && 'Verdadero/Falso'}
                    </span>
                  </div>
                </motion.div>
                
                <motion.div
                  key={currentQuestion.id} 
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -100 }} 
                  transition={{ duration: 0.5 }} 
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    {currentQuestion.question}
                  </h3>
                </motion.div>

                {currentQuestion.type === 'multiple' && (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((option, index) => (

                      <motion.div
                        key={`${currentQuestion.id}-option-${index}`} 
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -100 }} 
                        transition={{ duration: time+=0.15 }} 
                      >
                        <button
                          key={option}
                          onClick={() => handleAnswer(option)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition ${
                            answers[currentQuestion.id] === option
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          {option}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'boolean' && (
                  <div className="space-y-3">
                    <motion.div
                    key={`${currentQuestion.id}-true`} 
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -100 }} 
                    transition={{ duration: 0.75 }} 
                    >
                      <button
                        onClick={() => handleAnswer('true')}
                        className={`w-full text-left p-4 rounded-lg border-2 transition ${
                          answers[currentQuestion.id] === 'true'
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        Verdadero
                      </button>
                    </motion.div>
                    <motion.div
                    key={`${currentQuestion.id}-false`} 
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -100 }} 
                    transition={{ duration: 0.90 }} 
                    >
                      <button
                        onClick={() => handleAnswer('false')}
                        className={`w-full text-left p-4 rounded-lg border-2 transition ${
                          answers[currentQuestion.id] === 'false'
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        Falso
                      </button>
                    </motion.div>
                  </div>
                )}

                {currentQuestion.type === 'open' && (
                  <motion.div
                    key={`${currentQuestion.id}-open`} 
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -100 }} 
                    transition={{ duration: 0.75 }} 
                  >
                    <textarea
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition min-h-[120px]"
                      placeholder="Escribe tu respuesta aquí..."
                    />
                  </motion.div>
                )}
              </div>
            

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  currentIndex === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>

              {!isLastQuestion ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Siguiente
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  disabled={!isAnswered}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${
                    isAnswered
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Finalizar Quiz
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
