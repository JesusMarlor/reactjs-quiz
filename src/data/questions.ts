export interface Question {
  id: number;
  type: 'multiple' | 'open' | 'boolean';
  question: string;
  options?: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    question: '¿Qué es React?',
    options: ['Una librería de JavaScript', 'Un framework de CSS', 'Un lenguaje de programación', 'Una base de datos'],
    correctAnswer: 'Una librería de JavaScript'
  },
  {
    id: 2,
    type: 'boolean',
    question: 'React fue creado por Facebook',
    correctAnswer: 'true'
  },
  {
    id: 3,
    type: 'multiple',
    question: '¿Qué hook se usa para manejar estado en componentes funcionales?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 'useState'
  },
  {
    id: 4,
    type: 'open',
    question: '¿Qué significa JSX?',
    correctAnswer: 'JavaScript XML'
  },
  {
    id: 5,
    type: 'boolean',
    question: 'Los componentes en React deben empezar con mayúscula',
    correctAnswer: 'true'
  },
  {
    id: 6,
    type: 'multiple',
    question: '¿Cuál es el propósito del hook useEffect?',
    options: ['Manejar efectos secundarios', 'Crear estados', 'Renderizar componentes', 'Crear contextos'],
    correctAnswer: 'Manejar efectos secundarios'
  },
  {
    id: 7,
    type: 'multiple',
    question: '¿Qué método del ciclo de vida se llama después del primer render?',
    options: ['componentDidMount', 'componentWillMount', 'componentDidUpdate', 'componentWillUnmount'],
    correctAnswer: 'componentDidMount'
  },
  {
    id: 8,
    type: 'boolean',
    question: 'Los props son mutables en React',
    correctAnswer: 'false'
  },
  {
    id: 9,
    type: 'multiple',
    question: '¿Qué hook usarías para acceder al contexto?',
    options: ['useContext', 'useState', 'useEffect', 'useMemo'],
    correctAnswer: 'useContext'
  },
  {
    id: 10,
    type: 'open',
    question: '¿Qué comando se usa para crear una nueva app de React?',
    correctAnswer: 'npx create-react-app'
  },
  {
    id: 11,
    type: 'boolean',
    question: 'El Virtual DOM es más rápido que manipular el DOM real directamente',
    correctAnswer: 'true'
  },
  {
    id: 12,
    type: 'multiple',
    question: '¿Qué es un Higher Order Component (HOC)?',
    options: ['Una función que toma un componente y retorna un nuevo componente', 'Un componente de clase', 'Un hook personalizado', 'Un método de React'],
    correctAnswer: 'Una función que toma un componente y retorna un nuevo componente'
  },
  {
    id: 13,
    type: 'multiple',
    question: '¿Cuál es la sintaxis correcta para crear un estado?',
    options: ['const [state, setState] = useState()', 'const state = useState()', 'useState(state, setState)', 'createState()'],
    correctAnswer: 'const [state, setState] = useState()'
  },
  {
    id: 14,
    type: 'boolean',
    question: 'useEffect se ejecuta después de cada render por defecto',
    correctAnswer: 'true'
  },
  {
    id: 15,
    type: 'multiple',
    question: '¿Qué hook usarías para memorizar un valor calculado?',
    options: ['useMemo', 'useCallback', 'useState', 'useEffect'],
    correctAnswer: 'useMemo'
  },
  {
    id: 16,
    type: 'open',
    question: '¿Qué método se usa para actualizar el estado en componentes de clase?',
    correctAnswer: 'setState'
  },
  {
    id: 17,
    type: 'boolean',
    question: 'Los hooks pueden ser usados en componentes de clase',
    correctAnswer: 'false'
  },
  {
    id: 18,
    type: 'multiple',
    question: '¿Qué es React Router?',
    options: ['Una librería para manejar navegación', 'Un hook de React', 'Un componente nativo', 'Una herramienta de testing'],
    correctAnswer: 'Una librería para manejar navegación'
  },
  {
    id: 19,
    type: 'multiple',
    question: '¿Cuál es el propósito de React.Fragment?',
    options: ['Agrupar elementos sin añadir nodos al DOM', 'Crear fragmentos de código', 'Dividir componentes', 'Renderizar condicionalmente'],
    correctAnswer: 'Agrupar elementos sin añadir nodos al DOM'
  },
  {
    id: 20,
    type: 'boolean',
    question: 'Los componentes funcionales son más modernos que los de clase',
    correctAnswer: 'true'
  },
  {
    id: 21,
    type: 'multiple',
    question: '¿Qué hook se usa para acceder a elementos del DOM?',
    options: ['useRef', 'useState', 'useEffect', 'useDom'],
    correctAnswer: 'useRef'
  },
  {
    id: 22,
    type: 'open',
    question: '¿Qué palabra clave se usa para exportar un componente por defecto?',
    correctAnswer: 'export default'
  },
  {
    id: 23,
    type: 'boolean',
    question: 'key es una prop especial en React para listas',
    correctAnswer: 'true'
  },
  {
    id: 24,
    type: 'multiple',
    question: '¿Qué método se usa para renderizar un componente en el DOM?',
    options: ['ReactDOM.render', 'React.render', 'render()', 'mount()'],
    correctAnswer: 'ReactDOM.render'
  },
  {
    id: 25,
    type: 'multiple',
    question: '¿Cuál es la extensión de archivo recomendada para componentes de React?',
    options: ['.jsx o .tsx', '.js solamente', '.react', '.component'],
    correctAnswer: '.jsx o .tsx'
  },
  {
    id: 26,
    type: 'boolean',
    question: 'React es un framework completo como Angular',
    correctAnswer: 'false'
  },
  {
    id: 27,
    type: 'multiple',
    question: '¿Qué es PropTypes?',
    options: ['Una forma de validar tipos de props', 'Un hook', 'Un componente', 'Un método de clase'],
    correctAnswer: 'Una forma de validar tipos de props'
  },
  {
    id: 28,
    type: 'open',
    question: '¿Qué función se usa para crear un contexto?',
    correctAnswer: 'createContext'
  },
  {
    id: 29,
    type: 'boolean',
    question: 'useState puede recibir una función como valor inicial',
    correctAnswer: 'true'
  },
  {
    id: 30,
    type: 'multiple',
    question: '¿Qué hook usarías para memorizar una función?',
    options: ['useCallback', 'useMemo', 'useFunction', 'useEffect'],
    correctAnswer: 'useCallback'
  },
  {
    id: 31,
    type: 'multiple',
    question: '¿Cuál es el ciclo de vida que se ejecuta antes de desmontar un componente?',
    options: ['componentWillUnmount', 'componentDidMount', 'componentWillMount', 'componentDidUpdate'],
    correctAnswer: 'componentWillUnmount'
  },
  {
    id: 32,
    type: 'boolean',
    question: 'Los hooks deben llamarse en el nivel superior de un componente',
    correctAnswer: 'true'
  },
  {
    id: 33,
    type: 'multiple',
    question: '¿Qué librería se usa comúnmente para manejar formularios en React?',
    options: ['Formik o React Hook Form', 'jQuery', 'Bootstrap', 'Lodash'],
    correctAnswer: 'Formik o React Hook Form'
  },
  {
    id: 34,
    type: 'open',
    question: '¿Qué método de array se usa comúnmente para renderizar listas en React?',
    correctAnswer: 'map'
  },
  {
    id: 35,
    type: 'boolean',
    question: 'React Native usa React para crear aplicaciones móviles',
    correctAnswer: 'true'
  },
  {
    id: 36,
    type: 'multiple',
    question: '¿Qué es Redux?',
    options: ['Una librería de manejo de estado', 'Un framework CSS', 'Un compilador', 'Una herramienta de build'],
    correctAnswer: 'Una librería de manejo de estado'
  },
  {
    id: 37,
    type: 'multiple',
    question: '¿Cuál es la sintaxis correcta para pasar props a un componente?',
    options: ['<Component prop="value" />', '<Component {prop="value"} />', '<Component prop:value />', '<Component [prop]="value" />'],
    correctAnswer: '<Component prop="value" />'
  },
  {
    id: 38,
    type: 'boolean',
    question: 'StrictMode ayuda a identificar problemas potenciales en la aplicación',
    correctAnswer: 'true'
  },
  {
    id: 39,
    type: 'multiple',
    question: '¿Qué hook usarías para ejecutar código de limpieza?',
    options: ['useEffect con función de retorno', 'useCleanup', 'useDestroy', 'componentWillUnmount'],
    correctAnswer: 'useEffect con función de retorno'
  },
  {
    id: 40,
    type: 'open',
    question: '¿Qué operador se usa comúnmente para renderizado condicional?',
    correctAnswer: 'ternario o &&'
  },
  {
    id: 41,
    type: 'boolean',
    question: 'Los eventos en React se nombran usando camelCase',
    correctAnswer: 'true'
  },
  {
    id: 42,
    type: 'multiple',
    question: '¿Qué es el "lifting state up"?',
    options: ['Mover el estado a un componente padre común', 'Eliminar el estado', 'Crear un nuevo estado', 'Copiar el estado'],
    correctAnswer: 'Mover el estado a un componente padre común'
  },
  {
    id: 43,
    type: 'multiple',
    question: '¿Cuál es el hook para reducir estados complejos?',
    options: ['useReducer', 'useState', 'useComplex', 'useState'],
    correctAnswer: 'useReducer'
  },
  {
    id: 44,
    type: 'boolean',
    question: 'Puedes usar múltiples useState en un mismo componente',
    correctAnswer: 'true'
  },
  {
    id: 45,
    type: 'multiple',
    question: '¿Qué librería se usa para testing en React?',
    options: ['Jest y React Testing Library', 'Mocha', 'Karma', 'Selenium'],
    correctAnswer: 'Jest y React Testing Library'
  },
  {
    id: 46,
    type: 'open',
    question: '¿Qué método previene el comportamiento por defecto de un evento?',
    correctAnswer: 'preventDefault'
  },
  {
    id: 47,
    type: 'boolean',
    question: 'Los componentes controlados son preferidos sobre los no controlados',
    correctAnswer: 'true'
  },
  {
    id: 48,
    type: 'multiple',
    question: '¿Qué es Suspense en React?',
    options: ['Un componente para manejar carga asíncrona', 'Un hook', 'Un método de clase', 'Una función de utilidad'],
    correctAnswer: 'Un componente para manejar carga asíncrona'
  },
  {
    id: 49,
    type: 'multiple',
    question: '¿Cuál es el propósito de Error Boundaries?',
    options: ['Capturar errores en componentes hijos', 'Validar props', 'Manejar rutas', 'Crear contextos'],
    correctAnswer: 'Capturar errores en componentes hijos'
  },
  {
    id: 50,
    type: 'boolean',
    question: 'React.memo se usa para optimizar componentes funcionales',
    correctAnswer: 'true'
  },
  {
    id: 51,
    type: 'multiple',
    question: '¿Qué es el prop drilling?',
    options: ['Pasar props a través de múltiples niveles', 'Crear nuevos props', 'Eliminar props', 'Validar props'],
    correctAnswer: 'Pasar props a través de múltiples niveles'
  },
  {
    id: 52,
    type: 'open',
    question: '¿Qué método se usa para combinar clases CSS condicionalmente?',
    correctAnswer: 'className con template literals o clsx'
  },
  {
    id: 53,
    type: 'boolean',
    question: 'useLayoutEffect se ejecuta de forma síncrona después del render',
    correctAnswer: 'true'
  },
  {
    id: 54,
    type: 'multiple',
    question: '¿Qué es un Custom Hook?',
    options: ['Una función reutilizable que usa hooks', 'Un componente especial', 'Un método de clase', 'Una librería externa'],
    correctAnswer: 'Una función reutilizable que usa hooks'
  },
  {
    id: 55,
    type: 'multiple',
    question: '¿Cuál es la forma correcta de actualizar un objeto en el estado?',
    options: ['Usando el spread operator', 'Mutando directamente', 'Usando push', 'Usando concat'],
    correctAnswer: 'Usando el spread operator'
  },
  {
    id: 56,
    type: 'boolean',
    question: 'Vite es más rápido que Create React App',
    correctAnswer: 'true'
  },
  {
    id: 57,
    type: 'multiple',
    question: '¿Qué es React DevTools?',
    options: ['Una extensión del navegador para depurar React', 'Un editor de código', 'Un framework', 'Una librería de testing'],
    correctAnswer: 'Una extensión del navegador para depurar React'
  },
  {
    id: 58,
    type: 'open',
    question: '¿Qué prop especial se usa para referenciar elementos DOM?',
    correctAnswer: 'ref'
  },
  {
    id: 59,
    type: 'boolean',
    question: 'Los componentes pueden retornar arrays de elementos',
    correctAnswer: 'true'
  },
  {
    id: 60,
    type: 'multiple',
    question: '¿Qué es el Concurrent Mode?',
    options: ['Una característica para renderizado no bloqueante', 'Un hook', 'Un componente', 'Una librería'],
    correctAnswer: 'Una característica para renderizado no bloqueante'
  },
  {
    id: 61,
    type: 'multiple',
    question: '¿Cuál es el método correcto para manejar eventos en React?',
    options: ['onClick={handleClick}', 'onclick="handleClick()"', 'onClick="handleClick"', 'on-click={handleClick}'],
    correctAnswer: 'onClick={handleClick}'
  },
  {
    id: 62,
    type: 'boolean',
    question: 'useImperativeHandle se usa con forwardRef',
    correctAnswer: 'true'
  },
  {
    id: 63,
    type: 'multiple',
    question: '¿Qué es Server Components?',
    options: ['Componentes que se renderizan en el servidor', 'Componentes de clase', 'Hooks especiales', 'Una librería externa'],
    correctAnswer: 'Componentes que se renderizan en el servidor'
  },
  {
    id: 64,
    type: 'open',
    question: '¿Qué hook se usa para obtener el valor anterior de una prop o estado?',
    correctAnswer: 'useRef o custom hook con useEffect'
  },
  {
    id: 65,
    type: 'boolean',
    question: 'Los portales permiten renderizar componentes fuera del árbol DOM padre',
    correctAnswer: 'true'
  },
  {
    id: 66,
    type: 'multiple',
    question: '¿Qué es el hydration en React?',
    options: ['Añadir interactividad a HTML renderizado en servidor', 'Actualizar el estado', 'Crear componentes', 'Validar props'],
    correctAnswer: 'Añadir interactividad a HTML renderizado en servidor'
  },
  {
    id: 67,
    type: 'multiple',
    question: '¿Cuál es el hook para manejar IDs únicos en SSR?',
    options: ['useId', 'useState', 'useKey', 'useUnique'],
    correctAnswer: 'useId'
  },
  {
    id: 68,
    type: 'boolean',
    question: 'React 18 introdujo el renderizado concurrente',
    correctAnswer: 'true'
  },
  {
    id: 69,
    type: 'multiple',
    question: '¿Qué es Lazy Loading en React?',
    options: ['Cargar componentes bajo demanda', 'Retrasar el render', 'Optimizar imágenes', 'Cachear datos'],
    correctAnswer: 'Cargar componentes bajo demanda'
  },
  {
    id: 70,
    type: 'open',
    question: '¿Qué función se usa para cargar componentes de forma perezosa?',
    correctAnswer: 'React.lazy'
  },
  {
    id: 71,
    type: 'boolean',
    question: 'useTransition permite marcar actualizaciones como no urgentes',
    correctAnswer: 'true'
  },
  {
    id: 72,
    type: 'multiple',
    question: '¿Qué es el batching en React?',
    options: ['Agrupar múltiples actualizaciones de estado', 'Procesar eventos', 'Renderizar componentes', 'Validar datos'],
    correctAnswer: 'Agrupar múltiples actualizaciones de estado'
  },
  {
    id: 73,
    type: 'multiple',
    question: '¿Cuál es el propósito de useDeferredValue?',
    options: ['Diferir actualizaciones no urgentes', 'Crear estados', 'Manejar efectos', 'Memorizar valores'],
    correctAnswer: 'Diferir actualizaciones no urgentes'
  },
  {
    id: 74,
    type: 'boolean',
    question: 'Los componentes de React pueden tener múltiples raíces',
    correctAnswer: 'false'
  },
  {
    id: 75,
    type: 'multiple',
    question: '¿Qué es React Fiber?',
    options: ['El algoritmo de reconciliación de React', 'Una librería de estado', 'Un hook', 'Un componente'],
    correctAnswer: 'El algoritmo de reconciliación de React'
  },
  {
    id: 76,
    type: 'open',
    question: '¿Qué método en React 18 reemplaza a ReactDOM.render?',
    correctAnswer: 'createRoot'
  },
  {
    id: 77,
    type: 'boolean',
    question: 'Puedes usar hooks dentro de loops o condiciones',
    correctAnswer: 'false'
  },
  {
    id: 78,
    type: 'multiple',
    question: '¿Qué patrón se usa para compartir lógica entre componentes?',
    options: ['Custom Hooks o HOCs', 'Herencia', 'Mixins', 'Decoradores'],
    correctAnswer: 'Custom Hooks o HOCs'
  },
  {
    id: 79,
    type: 'multiple',
    question: '¿Cuál es la forma recomendada de manejar side effects?',
    options: ['useEffect', 'componentDidMount solamente', 'En el render', 'En event handlers solamente'],
    correctAnswer: 'useEffect'
  },
  {
    id: 80,
    type: 'boolean',
    question: 'React soporta TypeScript de forma nativa',
    correctAnswer: 'true'
  }
];

export function getRandomQuestions(count: number = 20): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
