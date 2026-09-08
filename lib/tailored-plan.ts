export const tailoredPrompt = `Help me build a simple workout plan I can actually follow. Use my answers, not Luke's weights, calories or schedule.

MY CONTEXT
• Main goal and timeframe: [fill in]
• Age and training experience: [fill in]
• Days I can train, minutes per session, and equipment I have: [fill in]
• My current routine, including other sport or cardio: [paste or describe]
• Recent working sets: [exercise, weight, sets, reps, and how many more reps I could have done with the same form]
• What has worked, what has stalled, and what I enjoy or dislike: [fill in]
• Sleep, fatigue, work schedule and anything affecting consistency: [fill in]
• Pain, injuries or professional restrictions relevant to training: [describe only what I'm comfortable sharing]
• Nutrition help wanted? [yes/no; if yes, add height, weight trend, eating preferences and what tracking is sustainable for me]

BEFORE YOU WRITE THE PLAN
Ask me the important questions I haven't answered. Wait for my replies. Summarise my priorities and constraints, check whether my goal and timeframe are realistic, and label assumptions. Wearable scores are supporting context; don't use them to diagnose a problem or override how I feel.

WHAT I WANT BACK
1. One manageable routine for the next 4–6 weeks, with a review after the first two. Fit it into my real week. Don't force a six-day split or keep adding exercises.
2. For every workout: exercise order, warm-up guidance, working sets, rep range, rest, and effort in plain English. Explain why the main choices fit me.
3. Help me choose starting loads using my recent sets and controlled form. If there isn't enough information, explain how to select a load instead of inventing a weight. No max test needed to start.
4. A clear rule for adding reps or weight, and what to do after a missed session, poor recovery or a plateau. Keep my main exercises stable unless there is a reason to change them.
5. An alternative for an exercise I can't do or don't have equipment for. Don't tell me to train through pain; flag when hands-on coaching or a qualified healthcare professional is needed.
6. A plain-text log I can copy: date, exercise, load, sets, reps, effort, and notes.
7. Only if I asked for nutrition: a realistic starting approach with estimates labelled, based on my goal and weight trend. Don't automatically prescribe a bulk or copy another person's calories. Avoid aggressive restriction. Suggest dietitian support where my health or eating history makes generic advice unsuitable.

Keep it practical and explain the trade-offs. Separate established guidance from guesses, cite reliable sources for factual claims, and don't promise a perfect plan or a specific amount of muscle gain.`;

export const reviewPrompt = `Review this plan against my last two weeks of training. Here are the sessions I completed, my working sets, sleep, fatigue, any pain, and my weight trend if relevant: [paste].

What is improving, what is uncertain, and what needs changing? Ask for missing information. Keep the parts that work, suggest the smallest useful adjustment, and tell me what to track next. Don't rewrite my entire routine or judge progress from one workout. Flag pain or health concerns that need a qualified professional.`;
