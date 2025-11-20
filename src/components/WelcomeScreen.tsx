import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useTimer } from "../components/TimerContext";

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState('');
  const { startTimer } = useTimer();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTimer();

    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
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
      </div>
    </div>
  );
}
