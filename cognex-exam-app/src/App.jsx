import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LevelSelector from './components/LevelSelector';
import QuizEngine from './components/QuizEngine';
import './App.css';

function App() {
  const [level, setLevel] = useState(null);
  const [mode, setMode] = useState(null);

  const handleLevelSelect = (level, mode) => {
    setLevel(level);
    setMode(mode);
  };

  const handleFinish = () => {
    setLevel(null);
    setMode(null);
  };

  return (
    <div className="min-h-screen text-gray-900 font-sans p-4">
      <header className="max-w-4xl mx-auto py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-black text-blue-900 tracking-tight uppercase mb-2">
            Cognex <span className="text-amber-500">Academy</span>
          </h1>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </motion.div>
      </header>

      <main className="container mx-auto max-w-6xl py-8">
        <AnimatePresence mode="wait">
          {!level ? (
            <motion.div
              key="selector"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <LevelSelector onSelect={handleLevelSelect} />
            </motion.div>
          ) : (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <QuizEngine level={level} mode={mode} onFinish={handleFinish} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="max-w-4xl mx-auto py-12 text-center text-gray-400 text-sm">
        <p>© 2026 Cognex Certification Exam Training.</p>
      </footer>
    </div>
  );
}

export default App;
