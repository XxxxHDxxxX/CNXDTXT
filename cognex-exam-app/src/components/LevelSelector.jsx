import React from 'react';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

const LevelSelector = ({ onSelect }) => {
  const levels = [
    { id: 'L1', name: 'Level 1', desc: '入门基础认证' },
    { id: 'L2', name: 'Level 2', desc: '核心进阶认证' },
    { id: 'L3', name: 'Level 3', desc: '高级专家认证' },
    { id: 'L4', name: 'Level 4', desc: '首席技术认证' },
    { id: 'All', name: '综合题库', desc: '挑战全等级试题' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 py-8 px-4">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-white drop-shadow-md tracking-tight">
          认证等级选择
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-xl font-medium">
          请选择您的练习模式和对应的技术等级
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Practice Mode Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 w-fit">
            <div className="p-2.5 bg-blue-500 rounded-xl text-white shadow-lg shadow-blue-500/30">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">刷题练习</h3>
              <p className="text-xs text-blue-100 font-bold uppercase tracking-widest">不限时间 • 实时解析</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => onSelect(level.id, 'Practice')}
                className="group flex items-center justify-between p-6 glass-card hover:bg-white transition-all text-left border border-white/40 hover:scale-[1.02] hover:-translate-y-1 duration-300"
              >
                <div>
                  <div className="text-xl font-black text-gray-800 flex items-center gap-2">
                    {level.name}
                    {level.id === 'All' && <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full">HOT</span>}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{level.desc}</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm group-hover:rotate-12">
                  <ArrowRight size={24} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Exam Mode Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 w-fit">
            <div className="p-2.5 bg-amber-500 rounded-xl text-white shadow-lg shadow-amber-500/30">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">模拟考试</h3>
              <p className="text-xs text-amber-100 font-bold uppercase tracking-widest">限时 60 分钟 • 模拟真题</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => onSelect(level.id, 'Exam')}
                className="group flex items-center justify-between p-6 glass-card hover:bg-white transition-all text-left border border-white/40 hover:scale-[1.02] hover:-translate-y-1 duration-300"
              >
                <div>
                  <div className="text-xl font-black text-gray-800 flex items-center gap-2">
                    {level.name} 模考
                    <span className="bg-amber-100 text-amber-600 text-[10px] px-2 py-0.5 rounded-full uppercase">Exam</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">模拟真实 Cognex 考试环境</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm group-hover:-rotate-12">
                  <GraduationCap size={24} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelSelector;
