//Answers buttons Querry
const answersBtns = document.querySelector(".buttons");
//Next button Variable
const nextBtn = document.getElementById("next");
console.log(nextBtn);
//Getting the Questions Element
const questionsElement = document.getElementById("questions");

// an array containing the answers that will be randomly generated to the buttons.
let questions = [
  {
    question: "Which is the best Tech institution in Nairobi?",
    answers: [
      { text: "Nairobi University", correct: false },
      { text: "Kenya Technical Collage", correct: false },
      { text: "I.S.T", correct: true },
      { text: "Mount Kenya University", correct: false },
    ],
  },
  {
    question: "Which is the most used gadget in programming?",
    answers: [
      { text: "Calculator", correct: false },
      { text: "Computers", correct: true },
      { text: "Telephones", correct: false },
      { text: "Flash Drives", correct: false },
    ],
  },
];

let currentQuestionIndex, scores;
currentQuestionIndex = 0;
scores = 0;

// Next Question Function
function nextQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  showQuestion(currentQuestion);
}

// Show question function
const showQuestion = (question) => {
  //Calling Reset State function to reset the previous answers
  resetState();
  questionsElement.innerHTML = question.question;
  question.answers.forEach((answer) => {
    let button1 = document.createElement("button");

    answersBtns.appendChild(button1);

    button1.innerText = answer.text;
    if (answer.correct) {
      button1.dataset.correct = answer.correct;
    }
    button1.addEventListener("click", (e) => {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        scores++;
        console.log(scores);
        selectedBtn.style.backgroundColor = "green";
        selectedBtn.style.color = "white";
      } else {
        selectedBtn.style.backgroundColor = "#d32828";
        selectedBtn.style.color = "white";
      }
      Array.from(answersBtns.children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.style.backgroundColor = "#38ee38";
          button.style.color = "white";
        }
        button.disabled = true;
        nextBtn.style.display = "block";
      });
    });
  });
};

//Calling Reset State function to reset the previous answers
const resetState = () => {
  nextBtn.style.display = "none";
  while (answersBtns.firstChild) {
    answersBtns.removeChild(answersBtns.firstChild);
  }
};
// function to display next question
const showScore = () => {
  resetState();
  questionsElement.innerHTML = `You Scored: ${scores} out of ${questions.length}!`;

  nextBtn.innerHTML = "Play Again";
};
const handleNextBtn = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    nextQuestion();
  } else {
    showScore();
  }
};

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    showQuestion();
  }
});
answersBtns.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (currentQuestionIndex < questions.length) {
      handleNextBtn();
    } else {
      showQuestion();
    }
  }
});

//Function to create the button elements dynamically
let answersElements = (answers) => {
  // Start button to be created
  let startButtonDiv = document.getElementById("start");
  // Creating the Start button
  let startButton = document.createElement("button");

  startButtonDiv.appendChild(startButton);
  startButtonDiv.innerHTML = `<button class="start">Start</button>`;

  // Giving the button a Purpose Which is to allow content to display
  function ContentDisplayer() {
    // Getting the container class to display
    const container = document.querySelector(".container");
    const start = document.querySelector(".start");
    container.style.display = "block";
    // Hidding the Start Button After clicking
    startButtonDiv.style.display = "none";
    // Display Question after clicking Start Button
    nextQuestion();
  }

  // Adding an eventListener for the ContentDisplayer function
  start.addEventListener("click", ContentDisplayer);
  console.log(startButton);

  nextBtn.innerHTML = `<button>Next</button>`;
};
answersElements("Nairobi");

//Time Display variables that store the id values
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
  // geting the date from the local storage
  let date = new Date();

  hours.innerHTML =
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  minutes.innerHTML =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  seconds.innerHTML =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  //If statement to make the hours have a zero value if its value is below 10
  if (date.getHours() < 10) {
    hours.innerHTML = "0" + date.getHours();
  }
}, 1000);
