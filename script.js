const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Transfer Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to define the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>",
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "color", "text-style", "text-color"],
    answer: "color",
  },
  {
    question: "Which HTML element is used for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: "<br>",
  },
  {
    question: "In CSS, which symbol is used for an ID selector?",
    options: [".", "#", "*", "&"],
    answer: "#",
  },
  {
    question: "Which HTML attribute specifies an image source?",
    options: ["src", "href", "link", "source"],
    answer: "src",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<css>", "<link>", "<style>", "<script>"],
    answer: "<link>",
  },
  {
    question: "Which JavaScript method is used to print to the console?",
    options: ["console.log()", "print()", "log.console()", "write.console()"],
    answer: "console.log()",
  },
  {
    question: "What does the <title> tag define in HTML?",
    options: [
      "Main heading of the page",
      "Title shown in the browser tab",
      "Bold text",
      "Section name",
    ],
    answer: "Title shown in the browser tab",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const currentQ = document.getElementById("current");
const totalQ = document.getElementById("total");

totalQ.textContent = questions.length;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultEl.classList.add("hide");
  nextBtn.style.display = "inline-block";
  document.querySelector(".question").style.display = "block";
  document.querySelector(".options").style.display = "flex";
  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  currentQ.textContent = currentQuestionIndex + 1;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("div");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = () => selectAnswer(button, currentQuestion.answer);
    optionsEl.appendChild(button);
  });
}

function selectAnswer(selectedOption, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach((option) => {
    option.classList.add(
      option.textContent === correctAnswer ? "correct" : "wrong"
    );
    option.style.pointerEvents = "none";
  });

  if (selectedOption.textContent === correctAnswer) {
    score++;
  }
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.classList.remove("hide");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

startQuiz();
