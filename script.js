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
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: " J.K. Rowling", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "CO₂", correct: false },
      { text: "HO₂", correct: false },
      { text: "NaCl", correct: false },
      { text: "H₂O", correct: true },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "Five", correct: false },
      { text: "Seven", correct: true },
      { text: "Six", correct: false },
      { text: "Eight", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "In what year did the American Civil War end?",
    answers: [
      { text: "1776", correct: false },
      { text: "1865", correct: true },
      { text: "1812", correct: false },
      { text: "1901", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in a traditional Italian pizza?",
    answers: [
      { text: "Alfredo Sauce", correct: false },
      { text: "Tomato Sauce", correct: true },
      { text: "Pesto Sauce,", correct: false },
      { text: "Barbecue Sauce", correct: false },
    ],
  },
  {
    question: "Who was the first President of the United States?",
    answers: [
      { text: "Jomo Kenyatta", correct: false },
      { text: " John Adams", correct: false },
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
    ],
  },
  {
    question: "Which element has the atomic number 1?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon", correct: false },
      { text: "Helium", correct: false },
      { text: "Hydrogen", correct: true },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markdown Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "HyperTool Markup Language", correct: false },
      { text: "HighText Markup Language", correct: false },
    ],
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    answers: [
      {
        text: "To contain meta-information about the document",
        correct: true,
      },
      { text: "To display the main content", correct: false },
      { text: "To define the footer", correct: false },
      { text: "To link external resources", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to display an image?",
    answers: [
      { text: "<figure>", correct: false },
      { text: "<picture>", correct: false },
      { text: "<img>", correct: true },
      { text: "<graphic>", correct: false },
    ],
  },
  {
    question:
      "Which attribute is used to specify the URL of an image in an <img> tag?",
    answers: [
      { text: "url", correct: false },
      { text: "href", correct: false },
      { text: "link", correct: false },
      { text: "src", correct: true },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Computer Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ],
  },
  {
    question: "Which property is used to change the background color in CSS?",
    answers: [
      { text: "background-color", correct: true },
      { text: "bgcolor", correct: false },
      { text: "color", correct: false },
      { text: "background", correct: false },
    ],
  },
  {
    question: "How do you make text bold in CSS?",
    answers: [
      { text: "font-bold: true;", correct: false },
      { text: "font-style: bold;", correct: false },
      { text: "font-weight: bold;", correct: true },
      { text: "text-weight: bold;", correct: false },
    ],
  },
  {
    question: "How do you add a comment in a CSS file?",
    answers: [
      { text: "# comment", correct: false },
      { text: "<!-- comment -->", correct: false },
      { text: "// comment", correct: false },
      { text: "/* comment */", correct: true },
    ],
  },
  {
    question: "What is the correct syntax to declare a JavaScript variable?",
    answers: [
      { text: "let variableName;", correct: true },
      { text: "dim variableName;", correct: false },
      { text: "varibleName = var;", correct: false },
      { text: "declare variableName;", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function: myFunction() {}", correct: false },
      { text: "func myFunction() {}", correct: false },
      { text: "def myFunction() {}", correct: false },
      { text: "function myFunction() {}", correct: true },
    ],
  },
  {
    question:
      "Which built-in method is used to print messages to the console in JavaScript?",
    answers: [
      { text: "echo()", correct: false },
      { text: "print()", correct: false },
      { text: "console.log()", correct: true },
      { text: "write()", correct: false },
    ],
  },
  {
    question: "How do you add a comment in JavaScript?",
    answers: [
      { text: "<!-- comment -->", correct: false },
      { text: "// comment", correct: true },
      { text: "/* comment */", correct: false },
      { text: "# comment", correct: false },
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
