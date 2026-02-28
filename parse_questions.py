import os
import re
import json
import glob

def get_level(filename):
    filename = filename.upper()
    levels = []
    if 'L1' in filename: levels.append('L1')
    if 'L2' in filename: levels.append('L2')
    if 'L3' in filename: levels.append('L3')
    if 'L4' in filename: levels.append('L4')

    # If no specific level found, but it's an exam file, mark as General or try to infer
    if not levels:
        return ['General']
    return levels

def is_exam_file(file_path):
    keywords = ['题', '考试', '练习', '试卷', 'quiz', 'exam', 'test']
    path_str = file_path.lower()
    return any(kw in path_str for kw in keywords)

def parse_markdown(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    questions = []
    current_levels = get_level(os.path.basename(os.path.dirname(file_path)))
    filename = os.path.basename(os.path.dirname(file_path))

    # Pre-process content
    lines = [line.strip() for line in content.split('\n')]
    clean_lines = []
    for line in lines:
        # Remove line numbers and arrows like "   1→"
        clean_line = re.sub(r'^\s*\d+→', '', line).strip()
        if clean_line:
            clean_lines.append(clean_line)

    content = '\n'.join(clean_lines)

    # Split into blocks based on question numbering
    # We look for lines starting with a number followed by a dot or a Chinese pause mark
    # e.g., "1.", "1、", "1 "

    # Regex to split content into question blocks.
    # It finds a number at start of line, captures it and the following text until the next number start.
    # We use a lookahead for the next number or end of string.

    # Normalize question starts
    content = re.sub(r'\n(\d+)[.、\s]', r'\n###QUESTION_START###\1.', content)
    if re.match(r'^(\d+)[.、\s]', content):
        content = re.sub(r'^(\d+)[.、\s]', r'###QUESTION_START###\1.', content)

    blocks = content.split('###QUESTION_START###')

    for block in blocks:
        if not block.strip():
            continue

        # Check if block actually looks like a question (starts with a number)
        if not re.match(r'^\d+\.', block):
            continue

        lines = block.strip().split('\n')
        q_text_lines = []
        options = []
        answer = ""
        explanation = ""

        # Simple parser state
        state = "question"

        for line in lines:
            line = line.strip()
            if not line: continue

            # Check for options
            # A. xxx  B. xxx
            # or A. xxx
            #    B. xxx
            option_match = re.findall(r'([A-E])\s*[.、．]\s*(.*?)(?=\s+[A-E]\s*[.、．]|$)', line)

            if option_match:
                # If we found options, add them
                for opt_label, opt_content in option_match:
                    options.append(f"{opt_label}. {opt_content}")
                state = "options"
                continue

            # Check for answer pattern like (A), ( A ), [A], [ A ], 答案：A
            ans_match = re.search(r'(?:答案|Answer)[:：]?\s*([A-E]+|√|×|True|False|对|错)', line, re.IGNORECASE)
            if ans_match:
                answer = ans_match.group(1)
                state = "answer"
                continue

            # Inline answer check: (A) or （A）
            # Be careful not to match (1) which might be part of question text
            inline_ans = re.search(r'[（\(]\s*([A-E]|√|×|True|False|对|错)\s*[）\)]', line)
            if inline_ans:
                # If found in question text line, it might be the place to fill in, but usually it's the answer if marked
                # Sometimes empty brackets () mean fill in blank, filled brackets (A) mean answer.
                # We'll assume if it's filled, it's the answer, but keep it in text?
                # Actually, let's extract it if it looks like an answer key
                # But typically exam papers have empty brackets for questions.
                # If the file is "with answers", it might be filled.
                pass

            # If line is not an option or explicit answer, it's part of question or explanation
            if state == "question":
                q_text_lines.append(line)
            elif state == "answer" or state == "options":
                explanation += line + "\n"

        q_content = "\n".join(q_text_lines)

        # Try to extract answer from content if not found yet
        if not answer:
            # Check for ( A ) pattern at end or inside text
            matches = re.findall(r'[（\(]\s*([A-E√×对错])\s*[）\)]', q_content)
            if matches:
                answer = matches[-1] # Take the last one as it's likely the answer slot

        # Determine Type
        q_type = "short_answer"
        if options:
            q_type = "single_choice"
        elif "√" in answer or "×" in answer or "对" in answer or "错" in answer:
            q_type = "true_false"
        elif "填空" in filename or "_" in q_content:
            q_type = "fill_in_blank"

        # Filter out very short or empty questions
        if len(q_content) < 5:
            continue

        questions.append({
            "id": 0, # Placeholder
            "levels": current_levels,
            "type": q_type,
            "question": q_content,
            "options": options,
            "answer": answer,
            "explanation": explanation.strip(),
            "source_file": filename
        })

    return questions

def main():
    root_dir = "."
    all_questions = []

    # Find all full.md files
    files = glob.glob(os.path.join(root_dir, "**", "full.md"), recursive=True)

    print(f"Total markdown files found: {len(files)}")

    target_files = [f for f in files if is_exam_file(f)]
    print(f"Target exam files found: {len(target_files)}")

    for f in target_files:
        try:
            qs = parse_markdown(f)
            all_questions.extend(qs)
            print(f"Parsed {len(qs)} questions from {os.path.basename(os.path.dirname(f))}")
        except Exception as e:
            print(f"Error parsing {f}: {e}")

    # Re-index
    for i, q in enumerate(all_questions):
        q['id'] = i + 1

    print(f"Total questions extracted: {len(all_questions)}")

    with open('questions.json', 'w', encoding='utf-8') as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
