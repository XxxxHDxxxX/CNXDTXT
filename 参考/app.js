// 全局状态
let state = {
    currentCategory: 'all',
    currentMode: 'practice', // practice 或 exam
    currentQuestionIndex: 0,
    filteredQuestions: [],
    answers: {}, // {questionId: selectedOption}
    results: {}, // {questionId: 'correct' | 'wrong'}
    favorites: new Set(),
    wrongQuestions: new Set()
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateCategoryCounts();
    selectCategory('all');
    setupCategoryListeners();
});

// 设置分类点击监听
function setupCategoryListeners() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            selectCategory(category);
        });
    });
}

// 选择分类
function selectCategory(category) {
    state.currentCategory = category;
    state.currentQuestionIndex = 0;

    // 更新UI
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });

    // 过滤题目
    filterQuestions();

    // 显示第一题
    if (state.filteredQuestions.length > 0) {
        showQuestion(0);
    } else {
        showEmptyState();
    }

    // 更新题目列表
    updateQuestionList();
    updateProgressDisplay();
}

// 过滤题目
function filterQuestions() {
    if (state.currentCategory === 'all') {
        state.filteredQuestions = [...questions];
    } else if (state.currentCategory === 'wrong') {
        state.filteredQuestions = questions.filter(q => state.wrongQuestions.has(q.id));
    } else if (state.currentCategory === 'favorite') {
        state.filteredQuestions = questions.filter(q => state.favorites.has(q.id));
    } else {
        state.filteredQuestions = questions.filter(q => q.category === state.currentCategory);
    }
}

// 更新分类计数
function updateCategoryCounts() {
    document.getElementById('count-all').textContent = questions.length;
    document.getElementById('count-csharp-basic').textContent = questions.filter(q => q.category === 'csharp-basic').length;
    document.getElementById('count-csharp-oop').textContent = questions.filter(q => q.category === 'csharp-oop').length;
    document.getElementById('count-csharp-advanced').textContent = questions.filter(q => q.category === 'csharp-advanced').length;
    document.getElementById('count-visionpro-basic').textContent = questions.filter(q => q.category === 'visionpro-basic').length;
    document.getElementById('count-visionpro-tools').textContent = questions.filter(q => q.category === 'visionpro-tools').length;
    document.getElementById('count-wrong').textContent = state.wrongQuestions.size;
    document.getElementById('count-favorite').textContent = state.favorites.size;
}

// 显示题目
function showQuestion(index) {
    if (index < 0 || index >= state.filteredQuestions.length) return;

    state.currentQuestionIndex = index;
    const question = state.filteredQuestions[index];

    // 更新题号
    document.getElementById('question-number').textContent = `第 ${index + 1} 题`;

    // 更新题目类型
    let typeText = '单选题';
    let typeClass = 'single';
    if (question.type === 'multiple') {
        typeText = '多选题';
        typeClass = 'multiple';
    } else if (question.type === 'judge') {
        typeText = '判断题';
        typeClass = 'judge';
    } else if (question.type === 'fill') {
        typeText = '填空题';
        typeClass = 'fill';
    } else if (question.type === 'essay') {
        typeText = '解答题';
        typeClass = 'essay';
    }
    const typeElement = document.getElementById('question-type');
    typeElement.textContent = typeText;
    typeElement.className = 'question-type ' + typeClass;

    // 更新题目内容
    document.getElementById('question-content').innerHTML = `<p>${question.question}</p>`;

    // 更新收藏按钮状态
    const favBtn = document.getElementById('btn-favorite');
    if (state.favorites.has(question.id)) {
        favBtn.classList.add('active');
        favBtn.innerHTML = '<span class="star">★</span> 已收藏';
    } else {
        favBtn.classList.remove('active');
        favBtn.innerHTML = '<span class="star">☆</span> 收藏';
    }

    // 生成选项或填空输入框
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    if (question.type === 'fill') {
        // 填空题：显示输入框
        const inputDiv = document.createElement('div');
        inputDiv.className = 'fill-input-container';
        const savedAnswer = state.answers[question.id] || '';
        const isSubmitted = state.results[question.id] !== undefined;

        inputDiv.innerHTML = `
            <input type="text" class="fill-input" id="fill-answer"
                   placeholder="请输入答案" value="${savedAnswer}"
                   ${isSubmitted && state.currentMode === 'practice' ? 'disabled' : ''}>
        `;
        optionsContainer.appendChild(inputDiv);

        // 添加输入事件
        const input = inputDiv.querySelector('#fill-answer');
        input.addEventListener('input', (e) => {
            state.answers[question.id] = e.target.value;
            saveProgress();
        });

        // 如果已提交，显示正确答案
        if (isSubmitted && state.currentMode === 'practice') {
            const resultDiv = document.createElement('div');
            resultDiv.className = state.results[question.id] === 'correct' ? 'fill-result correct' : 'fill-result wrong';
            resultDiv.innerHTML = `正确答案: <strong>${question.answer}</strong>`;
            optionsContainer.appendChild(resultDiv);
        }
    } else if (question.type === 'essay') {
        // 解答题：显示文本框
        const essayDiv = document.createElement('div');
        essayDiv.className = 'essay-input-container';
        const savedAnswer = state.answers[question.id] || '';
        const isSubmitted = state.results[question.id] !== undefined;

        essayDiv.innerHTML = `
            <textarea class="essay-input ${isSubmitted ? 'submitted' : ''}" id="essay-answer"
                   placeholder="请输入你的答案..."
                   ${isSubmitted && state.currentMode === 'practice' ? 'disabled' : ''}>${savedAnswer}</textarea>
            <div class="essay-word-count">已输入 <span id="word-count">${savedAnswer.length}</span> 字</div>
        `;
        optionsContainer.appendChild(essayDiv);

        // 添加输入事件
        const textarea = essayDiv.querySelector('#essay-answer');
        const wordCount = essayDiv.querySelector('#word-count');
        textarea.addEventListener('input', (e) => {
            state.answers[question.id] = e.target.value;
            wordCount.textContent = e.target.value.length;
            saveProgress();
        });

        // 如果已提交，显示参考答案
        if (isSubmitted && state.currentMode === 'practice') {
            const refDiv = document.createElement('div');
            refDiv.className = 'essay-reference';
            refDiv.innerHTML = `
                <h4>📝 参考答案</h4>
                <div class="essay-reference-content">${question.answer}</div>
            `;
            optionsContainer.appendChild(refDiv);

            // 如果有评分要点，显示自检项
            if (question.keyPoints && question.keyPoints.length > 0) {
                const checkDiv = document.createElement('div');
                checkDiv.className = 'essay-self-check';
                checkDiv.innerHTML = `
                    <h5>✅ 答案要点自检</h5>
                    ${question.keyPoints.map((point, i) => `
                        <label>
                            <input type="checkbox" id="check-${i}">
                            <span>${point}</span>
                        </label>
                    `).join('')}
                `;
                optionsContainer.appendChild(checkDiv);
            }
        } else if (!isSubmitted) {
            // 显示答题提示
            const tipsDiv = document.createElement('div');
            tipsDiv.className = 'essay-tips';
            tipsDiv.innerHTML = `<strong>提示：</strong>请认真组织语言作答，提交后可查看参考答案进行自我评估。`;
            optionsContainer.appendChild(tipsDiv);
        }
    } else if (question.type === 'multiple') {
        // 多选题
        const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
        const selectedAnswers = state.answers[question.id] || [];

        question.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item multiple';
            optionDiv.dataset.index = i;

            // 恢复之前的选择
            if (selectedAnswers.includes(i)) {
                optionDiv.classList.add('selected');
            }

            // 如果已经提交过答案，显示对错状态
            if (state.results[question.id] !== undefined && state.currentMode === 'practice') {
                if (question.answer.includes(i)) {
                    optionDiv.classList.add('correct');
                } else if (selectedAnswers.includes(i)) {
                    optionDiv.classList.add('wrong');
                }
            }

            optionDiv.innerHTML = `
                <span class="option-checkbox">${selectedAnswers.includes(i) ? '☑' : '☐'}</span>
                <span class="option-label">${labels[i]}</span>
                <span class="option-text">${option}</span>
            `;

            optionDiv.addEventListener('click', () => selectMultipleOption(i));
            optionsContainer.appendChild(optionDiv);
        });
    } else {
        // 单选题和判断题
        const labels = question.type === 'judge' ? ['', ''] : ['A', 'B', 'C', 'D', 'E', 'F'];
        question.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            optionDiv.dataset.index = i;

            // 恢复之前的选择
            if (state.answers[question.id] === i) {
                optionDiv.classList.add('selected');
            }

            // 如果已经提交过答案，显示对错状态
            if (state.results[question.id] !== undefined && state.currentMode === 'practice') {
                if (i === question.answer) {
                    optionDiv.classList.add('correct');
                } else if (state.answers[question.id] === i) {
                    optionDiv.classList.add('wrong');
                }
            }

            const labelHtml = labels[i] ? `<span class="option-label">${labels[i]}</span>` : '';
            optionDiv.innerHTML = `
                ${labelHtml}
                <span class="option-text">${option}</span>
            `;

            optionDiv.addEventListener('click', () => selectOption(i));
            optionsContainer.appendChild(optionDiv);
        });
    }

    // 显示/隐藏答案解析
    const answerSection = document.getElementById('answer-section');
    if (state.results[question.id] !== undefined && state.currentMode === 'practice') {
        showAnswer(question);
        answerSection.style.display = 'block';
    } else {
        answerSection.style.display = 'none';
    }

    // 更新导航按钮
    document.getElementById('btn-prev').disabled = index === 0;

    // 更新题目列表高亮
    updateQuestionListHighlight();
}

// 选择多选题选项
function selectMultipleOption(index) {
    const question = state.filteredQuestions[state.currentQuestionIndex];

    // 如果已经提交过答案且是练习模式，不允许更改
    if (state.results[question.id] !== undefined && state.currentMode === 'practice') {
        return;
    }

    // 初始化或更新选择
    if (!state.answers[question.id]) {
        state.answers[question.id] = [];
    }

    const selectedIndex = state.answers[question.id].indexOf(index);
    if (selectedIndex > -1) {
        state.answers[question.id].splice(selectedIndex, 1);
    } else {
        state.answers[question.id].push(index);
    }
    state.answers[question.id].sort((a, b) => a - b);

    // 重新渲染选项
    showQuestion(state.currentQuestionIndex);
    saveProgress();
}

// 选择选项
function selectOption(index) {
    const question = state.filteredQuestions[state.currentQuestionIndex];

    // 如果已经提交过答案且是练习模式，不允许更改
    if (state.results[question.id] !== undefined && state.currentMode === 'practice') {
        return;
    }

    // 更新选择
    state.answers[question.id] = index;

    // 更新UI
    const options = document.querySelectorAll('.option-item');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
        }
    });

    saveProgress();
}

// 提交答案
function submitAnswer() {
    const question = state.filteredQuestions[state.currentQuestionIndex];
    const selectedAnswer = state.answers[question.id];

    // 检查是否已作答
    if (selectedAnswer === undefined ||
        (question.type === 'fill' && selectedAnswer.trim() === '') ||
        (question.type === 'essay' && selectedAnswer.trim() === '') ||
        (question.type === 'multiple' && (!selectedAnswer || selectedAnswer.length === 0))) {
        alert('请先选择或输入答案！');
        return;
    }

    // 判断对错
    let isCorrect = false;
    if (question.type === 'fill') {
        // 填空题：忽略大小写和前后空格
        isCorrect = selectedAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase();
    } else if (question.type === 'essay') {
        // 解答题：只要有内容就算已答（需要用户自我评估）
        isCorrect = true; // 解答题不判断对错，标记为已完成
        state.results[question.id] = 'answered'; // 使用特殊状态
    } else if (question.type === 'multiple') {
        // 多选题：比较数组
        const sortedSelected = [...selectedAnswer].sort((a, b) => a - b);
        const sortedAnswer = [...question.answer].sort((a, b) => a - b);
        isCorrect = sortedSelected.length === sortedAnswer.length &&
                    sortedSelected.every((val, idx) => val === sortedAnswer[idx]);
    } else {
        // 单选题和判断题
        isCorrect = selectedAnswer === question.answer;
    }

    state.results[question.id] = isCorrect ? 'correct' : 'wrong';

    // 解答题使用特殊状态
    if (question.type === 'essay') {
        state.results[question.id] = 'answered';
    }

    // 记录错题（解答题不记录错题）
    if (!isCorrect && question.type !== 'essay') {
        state.wrongQuestions.add(question.id);
    } else {
        state.wrongQuestions.delete(question.id);
    }

    // 更新UI
    if (question.type === 'fill') {
        // 填空题：显示正确答案
        const input = document.getElementById('fill-answer');
        if (input) {
            input.disabled = true;
            input.classList.add(isCorrect ? 'correct' : 'wrong');
        }
        // 添加正确答案显示
        const optionsContainer = document.getElementById('options-container');
        let resultDiv = optionsContainer.querySelector('.fill-result');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.className = 'fill-result ' + (isCorrect ? 'correct' : 'wrong');
            resultDiv.innerHTML = `正确答案: <strong>${question.answer}</strong>`;
            optionsContainer.appendChild(resultDiv);
        }
    } else if (question.type === 'essay') {
        // 解答题：禁用输入并显示参考答案
        const textarea = document.getElementById('essay-answer');
        if (textarea) {
            textarea.disabled = true;
            textarea.classList.add('submitted');
        }
        // 重新渲染以显示参考答案
        showQuestion(state.currentQuestionIndex);
    } else if (question.type === 'multiple') {
        // 多选题：标记正确和错误选项
        const options = document.querySelectorAll('.option-item');
        options.forEach((opt, i) => {
            if (question.answer.includes(i)) {
                opt.classList.add('correct');
            } else if (selectedAnswer.includes(i)) {
                opt.classList.add('wrong');
            }
        });
    } else {
        // 单选题和判断题
        const options = document.querySelectorAll('.option-item');
        options.forEach((opt, i) => {
            if (i === question.answer) {
                opt.classList.add('correct');
            } else if (i === selectedAnswer && !isCorrect) {
                opt.classList.add('wrong');
            }
        });
    }

    // 显示答案解析（练习模式）
    if (state.currentMode === 'practice') {
        showAnswer(question);
        document.getElementById('answer-section').style.display = 'block';
    }

    // 更新统计
    updateProgressDisplay();
    updateQuestionListHighlight();
    updateCategoryCounts();
    saveProgress();
}

// 显示答案解析
function showAnswer(question) {
    const selectedAnswer = state.answers[question.id];
    const resultDiv = document.getElementById('answer-result');
    const explanationDiv = document.getElementById('answer-explanation');

    const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    let isCorrect = false;
    let correctAnswerText = '';

    if (question.type === 'fill') {
        // 填空题
        isCorrect = selectedAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase();
        correctAnswerText = question.answer;
    } else if (question.type === 'essay') {
        // 解答题：显示已提交状态
        resultDiv.className = 'answer-result correct';
        resultDiv.textContent = '✓ 答案已提交，请对照参考答案自行评估';
        explanationDiv.innerHTML = `<strong>解析：</strong>${question.explanation}`;
        return;
    } else if (question.type === 'multiple') {
        // 多选题
        const sortedSelected = [...(selectedAnswer || [])].sort((a, b) => a - b);
        const sortedAnswer = [...question.answer].sort((a, b) => a - b);
        isCorrect = sortedSelected.length === sortedAnswer.length &&
                    sortedSelected.every((val, idx) => val === sortedAnswer[idx]);
        correctAnswerText = question.answer.map(i => labels[i]).join('、');
    } else if (question.type === 'judge') {
        // 判断题
        isCorrect = selectedAnswer === question.answer;
        correctAnswerText = question.answer === 0 ? '正确' : '错误';
    } else {
        // 单选题
        isCorrect = selectedAnswer === question.answer;
        correctAnswerText = labels[question.answer];
    }

    if (isCorrect) {
        resultDiv.className = 'answer-result correct';
        resultDiv.textContent = '✓ 回答正确！';
    } else {
        resultDiv.className = 'answer-result wrong';
        resultDiv.textContent = `✗ 回答错误！正确答案是: ${correctAnswerText}`;
    }

    explanationDiv.innerHTML = `<strong>解析：</strong>${question.explanation}`;
}

// 上一题
function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        showQuestion(state.currentQuestionIndex - 1);
    }
}

// 下一题
function nextQuestion() {
    if (state.currentQuestionIndex < state.filteredQuestions.length - 1) {
        showQuestion(state.currentQuestionIndex + 1);
    } else if (state.currentMode === 'exam') {
        showExamResult();
    }
}

// 跳转到指定题目
function goToQuestion(index) {
    showQuestion(index);
}

// 切换收藏
function toggleFavorite() {
    const question = state.filteredQuestions[state.currentQuestionIndex];
    const favBtn = document.getElementById('btn-favorite');

    if (state.favorites.has(question.id)) {
        state.favorites.delete(question.id);
        favBtn.classList.remove('active');
        favBtn.innerHTML = '<span class="star">☆</span> 收藏';
    } else {
        state.favorites.add(question.id);
        favBtn.classList.add('active');
        favBtn.innerHTML = '<span class="star">★</span> 已收藏';
    }

    updateCategoryCounts();
    saveProgress();
}

// 设置模式
function setMode(mode) {
    state.currentMode = mode;

    // 更新按钮状态
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        }
    });

    // 考试模式下隐藏已有的答案解析
    if (mode === 'exam') {
        document.getElementById('answer-section').style.display = 'none';
        // 清除当前分类的答案和结果
        state.filteredQuestions.forEach(q => {
            delete state.answers[q.id];
            delete state.results[q.id];
        });
        showQuestion(0);
        updateQuestionList();
    } else {
        showQuestion(state.currentQuestionIndex);
    }
}

// 随机练习
function startRandomMode() {
    // 打乱题目顺序
    state.filteredQuestions = [...questions].sort(() => Math.random() - 0.5);
    state.currentQuestionIndex = 0;

    // 更新分类高亮
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });

    showQuestion(0);
    updateQuestionList();
    updateProgressDisplay();
}

// 重置进度
function resetProgress() {
    if (confirm('确定要重置所有进度吗？这将清除所有答题记录、收藏和错题本。')) {
        state.answers = {};
        state.results = {};
        state.favorites = new Set();
        state.wrongQuestions = new Set();

        localStorage.removeItem('quizProgress');

        updateCategoryCounts();
        updateQuestionList();
        updateProgressDisplay();
        showQuestion(state.currentQuestionIndex);

        alert('进度已重置！');
    }
}

// 更新题目列表
function updateQuestionList() {
    const listContainer = document.getElementById('question-list');
    listContainer.innerHTML = '';

    state.filteredQuestions.forEach((question, index) => {
        const item = document.createElement('div');
        item.className = 'q-item';
        item.textContent = index + 1;

        if (state.results[question.id] === 'correct') {
            item.classList.add('correct');
        } else if (state.results[question.id] === 'wrong') {
            item.classList.add('wrong');
        } else if (state.results[question.id] === 'answered') {
            item.classList.add('answered'); // 解答题已回答状态
        } else if (state.answers[question.id] !== undefined) {
            item.classList.add('answered');
        }

        if (index === state.currentQuestionIndex) {
            item.classList.add('current');
        }

        item.addEventListener('click', () => goToQuestion(index));
        listContainer.appendChild(item);
    });
}

// 更新题目列表高亮
function updateQuestionListHighlight() {
    const items = document.querySelectorAll('.question-list .q-item');
    items.forEach((item, index) => {
        item.classList.remove('current');
        if (index === state.currentQuestionIndex) {
            item.classList.add('current');
        }

        const question = state.filteredQuestions[index];
        if (question) {
            item.classList.remove('correct', 'wrong', 'answered');
            if (state.results[question.id] === 'correct') {
                item.classList.add('correct');
            } else if (state.results[question.id] === 'wrong') {
                item.classList.add('wrong');
            } else if (state.results[question.id] === 'answered') {
                item.classList.add('answered'); // 解答题已回答状态
            } else if (state.answers[question.id] !== undefined) {
                item.classList.add('answered');
            }
        }
    });
}

// 更新进度显示
function updateProgressDisplay() {
    const total = state.filteredQuestions.length;
    const answered = state.filteredQuestions.filter(q => state.results[q.id] !== undefined).length;
    const correct = state.filteredQuestions.filter(q => state.results[q.id] === 'correct' || state.results[q.id] === 'answered').length;

    document.getElementById('progress-text').textContent = `进度: ${answered}/${total}`;

    const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    document.getElementById('correct-rate').textContent = `正确率: ${rate}%`;
}

// 显示空状态
function showEmptyState() {
    document.getElementById('question-content').innerHTML = '<p>该分类下暂无题目</p>';
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('answer-section').style.display = 'none';
}

// 显示考试结果
function showExamResult() {
    const total = state.filteredQuestions.length;
    const answered = state.filteredQuestions.filter(q => state.results[q.id] !== undefined).length;
    const correct = state.filteredQuestions.filter(q => state.results[q.id] === 'correct').length;
    const wrong = answered - correct;
    const rate = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    document.getElementById('result-total').textContent = total;
    document.getElementById('result-correct').textContent = correct;
    document.getElementById('result-wrong').textContent = wrong;
    document.getElementById('result-rate').textContent = rate + '%';

    document.getElementById('result-modal').style.display = 'flex';
}

// 关闭结果弹窗
function closeResultModal() {
    document.getElementById('result-modal').style.display = 'none';
}

// 保存进度
function saveProgress() {
    const data = {
        answers: state.answers,
        results: state.results,
        favorites: Array.from(state.favorites),
        wrongQuestions: Array.from(state.wrongQuestions)
    };
    localStorage.setItem('quizProgress', JSON.stringify(data));
}

// 加载进度
function loadProgress() {
    const saved = localStorage.getItem('quizProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            state.answers = data.answers || {};
            state.results = data.results || {};
            state.favorites = new Set(data.favorites || []);
            state.wrongQuestions = new Set(data.wrongQuestions || []);
        } catch (e) {
            console.error('Failed to load progress:', e);
        }
    }
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    } else if (e.key === 'Enter') {
        submitAnswer();
    } else if (e.key >= '1' && e.key <= '6') {
        const index = parseInt(e.key) - 1;
        const question = state.filteredQuestions[state.currentQuestionIndex];
        if (question && question.options && index < question.options.length) {
            if (question.type === 'multiple') {
                selectMultipleOption(index);
            } else if (question.type !== 'fill') {
                selectOption(index);
            }
        }
    }
});

// ==================== 搜索功能 ====================
let isSearchMode = false;
let searchKeyword = '';

// 处理搜索回车
function handleSearch(event) {
    if (event.key === 'Enter') {
        searchQuestions();
    }
}

// 搜索题目
function searchQuestions() {
    const keyword = document.getElementById('search-input').value.trim();

    if (!keyword) {
        if (isSearchMode) {
            clearSearch();
        }
        return;
    }

    searchKeyword = keyword.toLowerCase();
    isSearchMode = true;

    // 在所有题目中搜索
    state.filteredQuestions = questions.filter(q => {
        const questionText = q.question.toLowerCase();
        const optionsText = q.options ? q.options.join(' ').toLowerCase() : '';
        const explanationText = q.explanation ? q.explanation.toLowerCase() : '';
        const answerText = typeof q.answer === 'string' ? q.answer.toLowerCase() : '';

        return questionText.includes(searchKeyword) ||
               optionsText.includes(searchKeyword) ||
               explanationText.includes(searchKeyword) ||
               answerText.includes(searchKeyword);
    });

    state.currentQuestionIndex = 0;

    // 清除分类选中状态
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });

    // 显示搜索结果
    if (state.filteredQuestions.length > 0) {
        showQuestion(0);
        showSearchHint();
    } else {
        showNoResultsState();
    }

    updateQuestionList();
    updateProgressDisplay();
}

// 显示搜索提示
function showSearchHint() {
    let hintDiv = document.querySelector('.search-result-hint');
    if (!hintDiv) {
        hintDiv = document.createElement('div');
        hintDiv.className = 'search-result-hint';
        const questionArea = document.getElementById('question-area');
        questionArea.parentNode.insertBefore(hintDiv, questionArea);
    }
    hintDiv.innerHTML = `
        <span>搜索 "${searchKeyword}" 找到 ${state.filteredQuestions.length} 道题目</span>
        <button onclick="clearSearch()">清除搜索</button>
    `;
    hintDiv.style.display = 'flex';
}

// 显示无结果状态
function showNoResultsState() {
    document.getElementById('question-content').innerHTML = `<p>未找到包含 "${searchKeyword}" 的题目</p>`;
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('answer-section').style.display = 'none';
    showSearchHint();
}

// 清除搜索
function clearSearch() {
    isSearchMode = false;
    searchKeyword = '';
    document.getElementById('search-input').value = '';

    // 隐藏搜索提示
    const hintDiv = document.querySelector('.search-result-hint');
    if (hintDiv) {
        hintDiv.style.display = 'none';
    }

    // 恢复到全部题目
    selectCategory('all');
}

// ==================== 统计分析功能 ====================

// 显示统计弹窗
function showStats() {
    updateStatsData();
    document.getElementById('stats-modal').style.display = 'flex';
}

// 关闭统计弹窗
function closeStatsModal() {
    document.getElementById('stats-modal').style.display = 'none';
}

// 更新统计数据
function updateStatsData() {
    // 总体概览
    const totalAnswered = Object.keys(state.results).length;
    const correctCount = Object.values(state.results).filter(r => r === 'correct' || r === 'answered').length;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    document.getElementById('stats-total-answered').textContent = totalAnswered;
    document.getElementById('stats-correct-count').textContent = correctCount;
    document.getElementById('stats-accuracy').textContent = accuracy + '%';

    // 计算学习天数
    const studyDays = getStudyDays();
    document.getElementById('stats-study-days').textContent = studyDays;

    // 分类正确率
    updateCategoryStats();

    // 题型统计
    updateTypeStats();

    // 学习进度
    const total = questions.length;
    const progressPercent = Math.round((totalAnswered / total) * 100);
    document.getElementById('stats-progress-bar').style.width = progressPercent + '%';
    document.getElementById('stats-progress-text').textContent = progressPercent + '%';
    document.getElementById('stats-progress-detail').textContent = `已完成 ${totalAnswered}/${total} 题`;
}

// 获取学习天数
function getStudyDays() {
    const firstStudyDate = localStorage.getItem('firstStudyDate');
    if (!firstStudyDate) {
        localStorage.setItem('firstStudyDate', new Date().toISOString());
        return 1;
    }
    const first = new Date(firstStudyDate);
    const now = new Date();
    const diffTime = Math.abs(now - first);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
}

// 更新分类统计
function updateCategoryStats() {
    const categories = [
        { id: 'csharp-basic', name: 'C#基础' },
        { id: 'csharp-oop', name: '面向对象' },
        { id: 'csharp-advanced', name: '高级特性' },
        { id: 'visionpro-basic', name: 'VP基础' },
        { id: 'visionpro-tools', name: '视觉工具' }
    ];

    const container = document.getElementById('category-stats');
    container.innerHTML = '';

    categories.forEach(cat => {
        const categoryQuestions = questions.filter(q => q.category === cat.id);
        const answered = categoryQuestions.filter(q => state.results[q.id] !== undefined).length;
        const correct = categoryQuestions.filter(q => state.results[q.id] === 'correct' || state.results[q.id] === 'answered').length;
        const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

        const itemHtml = `
            <div class="category-stat-item">
                <span class="category-stat-name">${cat.name}</span>
                <div class="category-stat-bar">
                    <div class="category-stat-fill" style="width: ${accuracy}%">
                        ${accuracy > 15 ? `<span>${correct}/${answered}</span>` : ''}
                    </div>
                </div>
                <span class="category-stat-percent">${accuracy}%</span>
            </div>
        `;
        container.innerHTML += itemHtml;
    });
}

// 更新题型统计
function updateTypeStats() {
    const types = [
        { id: 'single', name: '单选题', icon: '🔘' },
        { id: 'multiple', name: '多选题', icon: '☑️' },
        { id: 'judge', name: '判断题', icon: '✅' },
        { id: 'fill', name: '填空题', icon: '📝' },
        { id: 'essay', name: '解答题', icon: '📄' }
    ];

    const container = document.getElementById('type-stats');
    container.innerHTML = '';

    types.forEach(type => {
        const typeQuestions = questions.filter(q => q.type === type.id);
        const answered = typeQuestions.filter(q => state.results[q.id] !== undefined).length;
        const total = typeQuestions.length;

        const itemHtml = `
            <div class="type-stat-item">
                <div class="type-stat-icon">${type.icon}</div>
                <div class="type-stat-name">${type.name}</div>
                <div class="type-stat-value">${answered}/${total}</div>
            </div>
        `;
        container.innerHTML += itemHtml;
    });
}

// ==================== 深色主题功能 ====================

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// 切换主题
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}

// 设置主题
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        themeBtn.title = theme === 'dark' ? '切换到浅色主题' : '切换到深色主题';
    }
}

// 在页面加载时初始化主题
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
});

// 点击弹窗外部关闭
document.getElementById('stats-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeStatsModal();
    }
});
