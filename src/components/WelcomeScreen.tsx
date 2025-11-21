import { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { useTimer } from "../components/TimerContext";
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

interface SavedScore {
  name: string;
  score: number;
  date: string;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState('');
  const { startTimer } = useTimer();
  const [savedScores, setSavedScores] = useState<SavedScore[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTimer();

    if (name.trim()) {
      onStart(name.trim());
    }
  };

  const loadScores = () => {
    try {
      const data = JSON.parse(localStorage.getItem('quizScores') || '[]');

      if (Array.isArray(data)) {
        setSavedScores(data);
        console.log('Cargado quizScores desde localStorage:', data);
      }else{
        console.error('Los datos en localStorage no son válidos');
      }

    }catch(e){
      console.error('Error al cargar los datos de localStorage', e);
    }
  };

  // cargar scores al montar el componente
  useEffect(() => {
    loadScores();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
      <motion.div
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Quiz de React
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Responde 20 preguntas sobre React y pon a prueba tus conocimientos
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre del candidato
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
            >
              Comenzar Quiz
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Información del quiz:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 20 preguntas aleatorias</li>
              <li>• Opción múltiple, abiertas y verdadero/falso</li>
              <li>• Resultado en PDF al finalizar</li>
            </ul>
          </div>

          {savedScores.length > 0 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border-2 border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                🏆 Ranking TOP 3
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {savedScores.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="font-bold text-amber-600 w-6">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                    </span>
                    <span className="flex-1">{item.name}</span>
                    <span className="font-semibold text-blue-600">{item.score}%</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
