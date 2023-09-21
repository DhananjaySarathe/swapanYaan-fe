export const jsQuizz = {
  questions: [
    {
      question:
        "What subjects do you find most interesting in school?",
      choices: [
        "Math and Science",
        "Literature and Writing",
        "Physical Education",
        "Computer Science",
      ],
      type: "MCQs",
      correctAnswer: "Virtual DOM",
    },
    {
      question: "On a scale of 1 to 10 how much do you enjoy working on creative projects or expressing yourself through art or writing?",
      choices: [
        "Less then 3",
        "3 - 5",
        "6 - 8",
        "More than 8",
      ],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },
    {
      question:
        "On a scale of 1 to 10, how much do you enjoy solving complex problems and puzzles that require analytical thinking?",
        choices: [
          "Less then 3",
          "3 - 5",
          "6 - 8",
          "More than 8",
        ],
      type: "MCQs",
      correctAnswer: "props",
    },
    {
      question: "On a scale of 1 to 10, how important is continuous learning and personal growth in your career?",
      choices: [
        "Less then 3",
        "3 - 5",
        "6 - 8",
        "More than 8",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },
    {
      question: "Can you think of a time when you felt especially proud of an accomplishment?",
      choices: [
        "Winning a sports competition",
        "Completing a creative project",
        "Leading a team to success",
        "Solving a complex problem",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript compiler",
    },
  ],
};

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
