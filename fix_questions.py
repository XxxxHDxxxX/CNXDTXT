import json
import re
import os

file_path = 'cognex-exam-app/src/data/questions.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    q_text = item.get('question', '')

    # 1. 处理选择题中的答案 (例如: "描述正确的是 （ ABD ）" 或 "(A)")
    choice_match = re.search(r'[\(（]\s*([A-Z]+)\s*[\)）]\s*$', q_text)
    if choice_match:
        ans = choice_match.group(1)
        item['answer'] = ans
        # 清理题目，移除末尾的括号答案
        item['question'] = re.sub(r'[\(（]\s*[A-Z]+\s*[\)）]\s*$', '(   )', q_text)
        # 如果有多个字母，改为多选题
        if len(ans) > 1:
            item['type'] = 'multiple_choice'
        elif item['type'] == 'fill_in_blank' and len(ans) == 1 and item.get('options'):
            item['type'] = 'single_choice'

    # 2. 处理填空题中的答案 (例如: "_线性_")
    if item['type'] == 'fill_in_blank' or not item.get('answer'):
        blanks = re.findall(r'_([^_]+)_', q_text)
        if blanks:
            if not item.get('answer'):
                item['answer'] = ' / '.join(blanks)
            # 把题目中的答案替换成下划线
            item['question'] = re.sub(r'_([^_]+)_', '______', q_text)

    # 3. 处理判断题 (题目结尾带 ( Y ) 或 ( N ))
    tf_match = re.search(r'[\(（]\s*([YN√×])\s*[\)）]\s*$', q_text)
    if tf_match:
        ans = tf_match.group(1)
        item['answer'] = ans
        item['type'] = 'true_false'
        item['question'] = re.sub(r'[\(（]\s*[YN√×]\s*[\)）]\s*$', '(   )', q_text)

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"成功修复 {len(data)} 道题目")
