# Reusable prompt: build an exam-first mastery course

Create the ultimate interactive, exam-focused course for:

- **Course:** [COURSE NAME / NUMBER]
- **Institution:** [INSTITUTION]
- **Source materials:** [PAST EXAMS, SOLUTIONS, NOTES, AND FORMULA SHEETS]

The goal is the highest possible exam performance per hour studied. Build a complete working course—not a generic summary, textbook outline, or interface skeleton.

## 1. Analyze the real exams before designing anything

- Analyze at least the five most recent years of supplied exams.
- Use official solutions whenever available.
- Identify recurring topics, question structures, formulas, examiner habits, shortcuts, and distractors.
- Separate high-frequency exam material from low-value syllabus material.
- Maintain an audit trail of the exams and years reviewed.
- Clearly label any instructional priority score that is not an official exam weight.
- Base the course order, depth, exercises, and memorization deck on this evidence.

## 2. Assume absolutely no prior knowledge

Never use a term, symbol, distribution, abbreviation, model, or procedure before defining it in plain language.

For every new idea, explain:

1. what it means intuitively;
2. why it exists;
3. every symbol and parameter;
4. when it applies;
5. its assumptions;
6. its possible values or outputs;
7. its formula and what each part does;
8. a simple example;
9. a realistic exam example;
10. how it differs from similar methods;
11. wording clues that identify it;
12. common mistakes and distractors.

Begin with a “Start Here” module that teaches all required language and mathematical foundations.

## 3. Use an interleaved mastery loop—not lecture first, practice later

The required lesson structure is:

> **Concept → exercises → concept → exercises → concept → exercises**

Never place a long collection of concepts first and one large exercise bank at the end.

Break every module into small concept units. Each unit should teach one coherent technique or decision, then immediately require substantial practice before introducing the next concept.

Each concept unit must contain:

1. a plain-language explanation;
2. definitions and notation;
3. one worked simple example;
4. one worked exam-style example;
5. recognition clues;
6. traps and shortcuts;
7. **10–15 interactive exercises covering that concept**.

## 4. Pair every exercise with a technique twin

Every exercise must have a visible **twin problem** that uses the same solution technique with a different story, values, or surface wording.

The pair should teach transfer—not answer memorization.

For example:

- Original: number of defective products in 20 independent inspections.
- Twin: number of patients responding in 20 independent treatments.

Both use the same binomial technique, but the context and numbers differ.

Exercise sets should contain approximately 5–7 original/twin pairs, producing 10–14 exercises per concept.

Arrange the pairs by difficulty:

1. definition recognition;
2. identify the correct method;
3. direct one-step calculation;
4. reverse or missing-parameter problem;
5. multi-step application;
6. exam-style mixed problem;
7. trap or distractor problem.

Label twins clearly and show the shared technique after either problem is answered.

## 5. Make feedback teach the full method

For every exercise:

- require a committed answer before revealing feedback;
- show whether it is correct;
- give the complete step-by-step reasoning;
- name the recognition clue;
- state the formula or decision rule used;
- explain tempting wrong answers when useful;
- allow retrying;
- link or reveal the twin problem;
- save mastery locally.

A learner should not be considered to have mastered a technique after solving only one member of a pair. Track original and twin mastery separately and show pair completion.

## 6. Optimize explicitly for the exam

Teach this recurring protocol:

1. Define the requested quantity.
2. Translate the wording into notation.
3. Identify the model or procedure.
4. State parameters and assumptions.
5. Calculate.
6. Check units, range, direction, tail, and reasonableness.

Explicitly teach recognition cues, efficient calculator methods, identities, valid shortcuts, dangerous shortcuts, multiple-choice distractors, and what must be memorized instantly.

## 7. Include multiple practice environments

In addition to interleaved lesson exercises, provide:

- a mixed drill room;
- a timed exam simulation;
- a spaced-retrieval memory deck;
- concept, pair, module, and overall mastery tracking;
- retry queues for weak techniques.

## 8. Build a polished interactive application

Include a dashboard, ordered learning path, interleaved concept lessons, exercise pairs, drill room, memory deck, timed exam mode, search, printable cheat sheet, local persistence, and responsive desktop/mobile layouts.

Keep the interface fast and readable. Interactive targets must be at least 40×40px. Use subtle interruptible animation, stable tabular progress numbers, and clear hierarchy.

## 9. Render mathematics through MathJax

- Render every inline and display expression with MathJax.
- Typeset dynamically inserted questions, choices, explanations, twins, flashcards, search results, and cheat sheets.
- Use proper TeX rather than Unicode formula approximations.
- Prevent individual inline expressions from producing horizontal scrollbars.
- Split, wrap, or responsively size long cheat-sheet expressions.

## 10. Create a practical printable cheat sheet

Organize it by problem type. Include recognition conditions, notation, parameters, main formulas, assumptions, decision rules, common traps, and one-line memory cues. It must be useful under exam conditions and readable without horizontal scrolling.

## 11. Verify the finished result

Before delivery:

- verify mathematics against supplied solutions;
- confirm every named term and method is defined before use;
- count exercises per concept and verify the 10–15 target;
- confirm every exercise has a genuine contextual or numerical twin;
- test correct, incorrect, retry, twin, and saved-progress flows;
- verify dynamic MathJax rendering;
- inspect desktop, mobile, and print layouts;
- test all navigation and timed modes;
- report exactly what was built and verified.

Priority order:

1. mathematical correctness;
2. zero-background clarity;
3. concept/exercise interleaving;
4. high-volume paired practice;
5. exam relevance;
6. efficient memorization;
7. interface polish.
