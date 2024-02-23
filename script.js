let currentQuestion = 0;

const questions = [
  {
    question: "Html Stands For _________",
    correctAnswer: "Hyper Text Makeup Language",
  },
  {
    question: "What is CSS used for?",
    correctAnswer: "To style and format web content",
  },
  {
    question: "What does the term 'responsive design' refer to?",
    correctAnswer: "Designing websites that adapt to different screen sizes",
  },
  {
    question: "What is the purpose of media queries in CSS?",
    correctAnswer: "To apply different styles based on device characteristics",
  },
  {
    question: "What is the box model in CSS?",
    correctAnswer:
      "It defines how elements are rendered in terms of padding, border, and margin",
  },
  {
    question:
      "What is the role of JavaScript frameworks like React or Angular?",
    correctAnswer: "To build dynamic and interactive web applications",
  },
  // Add more questions as needed
];

function selectAnswer(answer) {
  if (answer === questions[currentQuestion].correctAnswer) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    alert("Quiz Completed!");
  } else {
    document.getElementById("question").innerText =
      questions[currentQuestion].question;
    document.getElementById("question-number").innerText =
      currentQuestion + 1 + "/6";
  }
}


// let currentQuestion = 0;

// const questions = [
//   {
//     question: "Html Stands For _________",
//     correctAnswer: "Hyper Text Makeup Language",
//   },
//   {
//     question: "What is CSS used for?",
//     correctAnswer: "To style and format web content",
//   },
//   {
//     question: "What does the term 'responsive design' refer to?",
//     correctAnswer: "Designing websites that adapt to different screen sizes",
//   },
//   {
//     question: "What is the purpose of media queries in CSS?",
//     correctAnswer: "To apply different styles based on device characteristics",
//   },
//   {
//     question: "What is the box model in CSS?",
//     correctAnswer:
//       "It defines how elements are rendered in terms of padding, border, and margin",
//   },
//   {
//     question:
//       "What is the role of JavaScript frameworks like React or Angular?",
//     correctAnswer: "To build dynamic and interactive web applications",
//   },
//   {
//     question: "What does API stand for?",
//     correctAnswer: "Application Programming Interface",
//   },
//   {
//     question: "What is the difference between margin and padding in CSS?",
//     correctAnswer:
//       "Margin is the space outside an element, while padding is the space inside an element",
//   },
//   // Add more questions and answers as needed
// ];

// function selectAnswer(answer) {
//   if (answer === questions[currentQuestion].correctAnswer) {
//     alert("Correct!");
//   } else {
//     alert("Wrong!");
//   }
// }

// function nextQuestion() {
//   currentQuestion++;
//   if (currentQuestion >= questions.length) {
//     alert("Quiz Completed!");
//   } else {
//     document.getElementById("question").innerText =
//       questions[currentQuestion].question;
//     document.getElementById("question-number").innerText =
//       currentQuestion + 1 + "/6";
//   }
// }

