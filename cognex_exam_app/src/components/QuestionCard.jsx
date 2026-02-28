import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const QuestionCard = ({ question, showAnswer, onAnswer, currentAnswer, practiceMode }) => {
   const isMultipleChoice = question.type === 'multiple_choice';
  const isSingleChoice = question.type === 'single_choice' || (question.options && question.options.length > 0 && !isMultipleChoice);
  const isFillInBlank = question.type === 'fill_in_blank' || question.type === 'short_answer';

  const handleOptionClick = (optionLabel) => {
    if (showAnswer) return;

    if (isMultipleChoice) {
      let newAnswer = currentAnswer || '';
      if (newAnswer.includes(optionLabel)) {
        newAnswer = newAnswer.replace(optionLabel, '');
      } else {
        newAnswer = (newAnswer + optionLabel).split('').sort().join('');
      }
      onAnswer(newAnswer);
    } else {
      onAnswer(optionLabel);
    }
  };

  const cleanOption = (opt) => {
    // Remove A. B. C. D. prefixes if they exist in the text itself
    return opt.replace(/^[A-Z]\.\s*/, '');
  };

  const getQuestionTypeLabel = (type) => {
    const map = {
      'fill_in_blank': '填空题',
      'single_choice': '单选题',
      'multiple_choice': '多选题',
      'true_false': '判断题',
      'short_answer': '简答题'
    };
    return map[type] || type.replace(/_/g, ' ');
  };

  return (
    <div className="glass-card p-8 mb-6 border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
          {question.levels.join(', ')}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
          question.type === 'multiple_choice' ? 'bg-purple-100 text-purple-700' :
          question.type === 'single_choice' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'
        }`}>
          {getQuestionTypeLabel(question.type)}
        </span>
      </div>

      <div className="prose max-w-none mb-8 text-gray-800 text-lg leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {question.question}
        </ReactMarkdown>
      </div>

      {(isSingleChoice || isMultipleChoice) ? (
        <div className="space-y-4">
          {question.options.map((option, index) => {
            const optionLabel = String.fromCharCode(65 + index); // A, B, C, D
            const isSelected = currentAnswer && currentAnswer.includes(optionLabel);

            // For multiple choice, we check if this specific option is part of the correct answer string
            const isCorrect = showAnswer && question.answer.includes(optionLabel);
            const isWrong = showAnswer && isSelected && !question.answer.includes(optionLabel);

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(optionLabel)}
                disabled={showAnswer}
                className={`option-item group ${
                  isSelected ? 'selected' : ''
                } ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
              >
                <div className="flex items-center w-full">
                  <span className="option-label group-hover:scale-110 transition-transform">
                    {optionLabel}
                  </span>
                  <span className="option-text font-medium">{cleanOption(option)}</span>
                </div>
              </button>
            );
          })}
          {isMultipleChoice && !showAnswer && (
            <div className="flex items-center gap-2 text-sm text-indigo-500 mt-4 font-bold bg-indigo-50 px-4 py-2 rounded-xl w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
              这是多选题，请选择所有正确答案
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative">
            <textarea
              value={currentAnswer || ''}
              onChange={(e) => !showAnswer && onAnswer(e.target.value)}
              disabled={showAnswer}
              placeholder="请在此输入您的答案..."
              className={`w-full p-6 bg-white border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg font-medium min-h-[160px] ${
                showAnswer ? 'bg-gray-50 border-gray-200 text-gray-500' : 'border-gray-100 focus:border-blue-400'
              }`}
            />
            {!showAnswer && (
              <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-300 uppercase tracking-widest">
                {(currentAnswer || '').length} characters
              </div>
            )}
          </div>

          {showAnswer && (
            <div className="p-6 bg-emerald-50 border-2 border-emerald-100 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 font-black text-emerald-700 mb-3 uppercase tracking-wider text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                参考答案
              </div>
              <div className="text-emerald-900 text-lg font-bold leading-relaxed">{question.answer}</div>
            </div>
          )}
        </div>
      )}

      {showAnswer && question.explanation && (
        <div className="mt-10 p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-100 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Eye size={64} className="text-amber-900" />
          </div>
          <div className="flex items-center gap-2 font-black text-amber-800 mb-4 uppercase tracking-wider text-sm relative z-10">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            详细解析
          </div>
          <div className="prose prose-blue max-w-none text-amber-900 leading-relaxed font-medium relative z-10">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {question.explanation}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
