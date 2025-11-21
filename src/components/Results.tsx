import { Answer } from './Quiz';
import { Award, Download, CheckCircle, XCircle } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';
import { motion } from 'framer-motion';
import { useTimer } from './TimerContext';

interface ResultsProps {
  candidateName: string;
  answers: Answer[];
  onRestart: () => void;
}

export default function Results({ candidateName, answers, onRestart }: ResultsProps) {
  const correctAnswers = answers.filter((a) => a.isCorrect).length;
  const totalQuestions = answers.length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const { time, resetTimer} = useTimer();

  const TimeFormatted = new Date(time * 1000).toISOString().substring(11, 19); 
  //pasar a hh:mm:ss

  const getGrade = (score: number) => {
    if (score >= 90) return { text: 'Excelente', color: 'text-green-600' };
    if (score >= 70) return { text: 'Muy Bien', color: 'text-blue-600' };
    if (score >= 50) return { text: 'Regular', color: 'text-yellow-600' };
    return { text: 'Necesita Mejorar', color: 'text-red-600' };
  };

  const grade = getGrade(score);

  const handleDownloadPDF = () => {
    generatePDF(candidateName, answers, score, TimeFormatted);
  };

  // Guardar candidatos en localStorage
  const saveScore = () => {

    const existingData = JSON.parse(localStorage.getItem('quizScores') || '[]');

    const candidateData = {
      name: candidateName,
      score: score,
      date: new Date().toLocaleString(),
    };

    const updatedData = [...existingData, candidateData];

    updatedData.sort((a, b) => b.score - a.score);

    const top3 = updatedData.slice(0, 3);
    
    console.log('Updated quizScores:', updatedData);

    localStorage.setItem('quizScores', JSON.stringify(top3));

    console.log("Score guardado: ", top3)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 p-4 rounded-full">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Quiz Completado
              </h1>

              <p className="text-xl text-gray-600 mb-6">{candidateName}</p>

              <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl mb-4">
                <div className="text-5xl font-bold mb-1">{score}%</div>
                <div className="text-lg">Calificación</div>
              </div>

              <p className={`text-2xl font-semibold ${grade.color} mb-2`}>
                {grade.text}
              </p>

              <p className="text-gray-600">
                {correctAnswers} de {totalQuestions} respuestas correctas
              </p>
            </div>

            <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
            >
              <Download className="w-5 h-5" />
              Descargar PDF
            </button>

            <button
              onClick={() => {
                saveScore();
                resetTimer(); 
                onRestart();
              }}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
            >
              Nuevo Quiz
            </button>
          </div>
        </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Detalle de Respuestas
            </h2>

            <div className="space-y-4">
              {answers.map((answer, index) => (
                <div
                  key={answer.questionId}
                  className={`p-4 rounded-lg border-2 ${
                    answer.isCorrect
                      ? 'border-green-200 bg-green-50'
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {answer.isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-700">
                          Pregunta {index + 1}:
                        </span>
                        <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                          {answer.type === 'multiple' && 'Opción Múltiple'}
                          {answer.type === 'open' && 'Abierta'}
                          {answer.type === 'boolean' && 'V/F'}
                        </span>
                      </div>

                      <p className="text-gray-800 mb-3">{answer.question}</p>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">
                            Tu respuesta:{' '}
                          </span>
                          <span
                            className={
                              answer.isCorrect ? 'text-green-700' : 'text-red-700'
                            }
                          >
                            {answer.userAnswer || '(Sin respuesta)'}
                          </span>
                        </div>

                        {!answer.isCorrect && (
                          <div>
                            <span className="font-medium text-gray-700">
                              Respuesta correcta:{' '}
                            </span>
                            <span className="text-green-700">
                              {answer.correctAnswer}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
