# ReactJS Quiz - Aplicación de Evaluación

Una aplicación interactiva de quiz para evaluar conocimientos de React, desarrollada con React, TypeScript, Vite y TailwindCSS.

## 🚀 Características

- **20 preguntas aleatorias** sobre React seleccionadas de un banco de 80 preguntas
- **3 tipos de preguntas**: Opción múltiple, Verdadero/Falso y Preguntas abiertas
- **Interfaz moderna y responsiva** con TailwindCSS
- **Sistema de navegación** entre preguntas con progreso visual
- **Generación de PDF** con resultados detallados
- **Análisis completo** de respuestas correctas e incorrectas
- **TypeScript** para mayor seguridad de tipos

## 📋 Tipos de Preguntas

1. **Opción Múltiple**: Selecciona la respuesta correcta de 4 opciones
2. **Verdadero/Falso**: Determina si la afirmación es correcta
3. **Preguntas Abiertas**: Escribe la respuesta en un campo de texto

## 🛠️ Tecnologías

- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **TailwindCSS** - Estilos y diseño
- **jsPDF** - Generación de documentos PDF
- **Lucide React** - Iconos
- **Supabase** - Cliente para servicios backend

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd reatjs-quiz
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🎮 Uso

1. **Pantalla de Bienvenida**: Ingresa tu nombre completo
2. **Quiz**: Responde las 20 preguntas navegando con los botones Siguiente/Anterior
3. **Resultados**: 
   - Visualiza tu calificación en porcentaje
   - Revisa cada respuesta con correcciones
   - Descarga el resultado en PDF
   - Inicia un nuevo quiz

## 📊 Sistema de Calificación

- **90-100%**: Excelente
- **70-89%**: Muy Bien
- **50-69%**: Regular
- **0-49%**: Necesita Mejorar

## 🗂️ Estructura del Proyecto

```
reatjs-quiz/
├── src/
│   ├── components/
│   │   ├── Quiz.tsx           # Componente principal del quiz
│   │   ├── Results.tsx        # Pantalla de resultados
│   │   └── WelcomeScreen.tsx  # Pantalla de inicio
│   ├── data/
│   │   └── questions.ts       # Banco de 80 preguntas
│   ├── utils/
│   │   └── pdfGenerator.ts    # Generador de PDF
│   ├── App.tsx               # Componente raíz
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Características de UI/UX

- **Diseño Responsivo**: Funciona en dispositivos móviles, tablets y desktop
- **Barra de Progreso**: Visualiza tu avance en tiempo real
- **Indicadores Visuales**: Colores para respuestas correctas e incorrectas
- **Animaciones Suaves**: Transiciones fluidas entre estados
- **Accesibilidad**: Etiquetas y badges informativos

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Type checking
npm run typecheck
```

## 🔧 Configuración

### TypeScript
El proyecto usa configuración estricta de TypeScript con múltiples archivos:
- `tsconfig.json` - Configuración base
- `tsconfig.app.json` - Configuración para la aplicación
- `tsconfig.node.json` - Configuración para Vite

### TailwindCSS
Configuración personalizada en `tailwind.config.js` con:
- Estilos para componentes
- Utilidades personalizadas
- PostCSS para procesamiento

## 📄 Generación de PDF

El PDF incluye:
- Encabezado con título y branding
- Información del candidato y fecha
- Calificación total y porcentaje
- Detalle de cada pregunta con:
  - Pregunta formulada
  - Respuesta del usuario
  - Respuesta correcta (si es incorrecta)
  - Indicador visual de correcto/incorrecto
- Numeración de páginas

## 🎯 Banco de Preguntas

El sistema cuenta con **80 preguntas** que cubren:
- Fundamentos de React
- Hooks (useState, useEffect, useContext, etc.)
- Componentes y Props
- Ciclo de vida
- Virtual DOM
- React Router
- Estado y Context
- Optimización y Performance
- React 18 y características modernas
- Testing y mejores prácticas

## 👤 Autor

**Jesus Marfil**

## 📜 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o problemas, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ usando React y TypeScript
