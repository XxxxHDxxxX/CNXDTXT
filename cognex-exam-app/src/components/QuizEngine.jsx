import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, EyeOff, Send, Home } from 'lucide-react';
import QuestionCard from './QuestionCard';
import questionsData from '../data/questions.json';

const QuizEngine = ({ level, mode, onFinish }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
  const [isReviewMode, setIsReviewMode] = useState(false);

  useEffect(() => {
    if (mode === 'Exam' && !isFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (mode === 'Exam' && timeLeft === 0 && !isFinished) {
      finishQuiz();
    }
  }, [mode, isFinished, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startReview = () => {
    setIsReviewMode(true);
    setCurrentIndex(0);
    setIsFinished(false);
  };

  useEffect(() => {
    let filteredQuestions = level === 'All'
      ? questionsData
      : questionsData.filter(q => q.levels.includes(level));

    if (mode === 'Exam') {
      filteredQuestions = [...filteredQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 50);
    }

    setQuestions(filteredQuestions);
  }, [level, mode]);

  const handleAnswer = (answer) => {
    setUserAnswers({ ...userAnswers, [currentIndex]: answer });
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      window.scrollTo(0, 0);
    } else if (mode === 'Practice') {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
      window.scrollTo(0, 0);
    }
  };

  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const finishQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q, idx) => {
      const userAnswer = userAnswers[idx];
      if (userAnswer && q.answer) {
        // Simple comparison for multiple choice/single choice
        const cleanUser = userAnswer.trim().toUpperCase().split('').sort().join('');
        const cleanCorrect = q.answer.trim().toUpperCase().split('').sort().join('');
        if (cleanUser === cleanCorrect) {
          calculatedScore++;
        }
      }
    });
    setScore(calculatedScore);
    setIsFinished(true);
    window.scrollTo(0, 0);
  };

  if (questions.length === 0) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    let feedback = "继续加油！";
    if (percentage >= 90) feedback = "卓越表现！你已经准备好了。";
    else if (percentage >= 80) feedback = "非常出色，离成功只有一步之遥。";
    else if (percentage >= 60) feedback = "及格了，建议再巩固一下错题。";

    return (
      <div className="glass-card max-w-2xl mx-auto py-12 px-10 text-center">
        <div className="inline-flex p-5 rounded-full bg-blue-50 text-blue-600 mb-6 shadow-inner">
          <GraduationCap size={48} />
        </div>
        <h2 className="text-3xl font-black mb-2 text-gray-900">测试结果</h2>
        <p className="text-gray-500 mb-8">{feedback}</p>

        <div className="relative inline-flex items-center justify-center mb-10">
          <svg className="w-56 h-56 transform -rotate-90 drop-shadow-lg">
            <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
            <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="12" fill="transparent"
              strokeDasharray={628.3}
              strokeDashoffset={628.3 - (628.3 * percentage) / 100}
              strokeLinecap="round"
              className="text-blue-600 transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-6xl font-black text-gray-900">{score}</span>
            <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">/ {questions.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-white/50 border border-white p-5 rounded-2xl shadow-sm">
            <div className="text-3xl font-black text-blue-600">{percentage}%</div>
            <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">正确率</div>
          </div>
          <div className="bg-white/50 border border-white p-5 rounded-2xl shadow-sm">
            <div className="text-3xl font-black text-gray-900">{questions.length}</div>
            <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">总题量</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={startReview}
            className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-100 px-8 py-5 rounded-2xl hover:bg-blue-50 transition-all font-bold text-lg shadow-sm active:scale-95"
          >
            <Eye size={22} />
            查看解析
          </button>
          <button
            onClick={onFinish}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all font-bold text-lg shadow-lg shadow-blue-200 active:scale-95"
          >
            <Home size={22} />
            返回主页
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 pb-24">
      {/* Top Header */}
      <div className="glass-card p-5 mb-8 flex items-center justify-between sticky top-4 z-10 border border-white/40">
        <div className="flex items-center gap-4">
          <button
            onClick={onFinish}
            className="p-3 hover:bg-white/50 rounded-2xl text-gray-500 hover:text-blue-600 transition-all shadow-sm"
          >
            <Home size={22} />
          </button>
          <div className="h-10 w-px bg-gray-200"></div>
          <div>
            <div className="text-xs font-black text-blue-500 uppercase tracking-widest mb-0.5">
              {isReviewMode ? '查看解析' : mode === 'Exam' ? '模拟考试' : '刷题练习'} • {level}
            </div>
            <div className="text-base font-black text-gray-700">
              第 {currentIndex + 1} 题 <span className="text-gray-300 mx-1">/</span> {questions.length}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {mode === 'Exam' && (
            <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-black text-sm border ${
              timeLeft < 300 ? 'bg-red-50 text-red-600 border-red-100 animate-pulse' : 'bg-blue-50 text-blue-600 border-blue-100'
            }`}>
              <div className="w-2 h-2 rounded-full bg-current"></div>
              {formatTime(timeLeft)}
            </div>
          )}
          {mode === 'Practice' && (
            <button
              onClick={toggleShowAnswer}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-sm transition-all shadow-sm active:scale-95 ${
                showAnswer
                ? 'bg-amber-100 text-amber-700 border border-amber-200'
                : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-100'
              }`}
            >
              {showAnswer ? <EyeOff size={18} /> : <Eye size={18} />}
              {showAnswer ? '隐藏解析' : '查看解析'}
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-3 bg-white/50 rounded-full mb-10 overflow-hidden shadow-inner border border-white p-0.5">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-700 ease-out shadow-sm"
          style={{ width: `${progress}%` }}
        />
      </div>

      <QuestionCard
        question={currentQuestion}
        showAnswer={showAnswer || isReviewMode}
        onAnswer={handleAnswer}
        currentAnswer={userAnswers[currentIndex]}
        practiceMode={mode === 'Practice' || isReviewMode}
      />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-blue-900/5 via-gray-50/90 to-transparent backdrop-blur-sm z-20">
        <div className="max-w-4xl mx-auto flex justify-between gap-6">
          <button
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className={`flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black transition-all shadow-md active:scale-95 border ${
              currentIndex === 0
                ? 'bg-white/50 text-gray-300 cursor-not-allowed border-gray-100'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-white hover:border-blue-100'
            }`}
          >
            <ChevronLeft size={22} />
            上一题
          </button>

          {currentIndex === questions.length - 1 && !isReviewMode ? (
            <button
              onClick={finishQuiz}
              className="flex-[2] flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all font-black shadow-lg shadow-emerald-200 active:scale-95 uppercase tracking-wider"
            >
              <Send size={22} />
              提交试卷
            </button>
          ) : (
            <button
              onClick={currentIndex === questions.length - 1 ? onFinish : nextQuestion}
              className="flex-[2] flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all font-black shadow-lg shadow-blue-200 active:scale-95 uppercase tracking-wider"
            >
              {currentIndex === questions.length - 1 ? '结束练习' : '下一题'}
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;
