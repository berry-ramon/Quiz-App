//Answers buttons Querry
const answersBtns = document.querySelector(".buttons");
//Next button Variable
const nextBtn = document.getElementById("next");
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
//Function to create the button elements dynamically
let answersElements = (answers) => {
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  let button3 = document.createElement("button");
  let button4 = document.createElement("button");
  let button5 = document.createElement("button");

  answersBtns.appendChild(button1);
  answersBtns.appendChild(button2);
  answersBtns.appendChild(button3);
  answersBtns.appendChild(button4);
  nextBtn.appendChild(button5);

  answersBtns.innerHTML = `<div class="buttons"></div><button>${answers}</button><button>${answers}</button><button>${answers}</button><button>${answers}</button></div> `;
  nextBtn.innerHTML = `<div><button>Next</button></div>`;
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
  console.log(hours);
  //If statement to make the hours have a zero value if its value is below 10
  if (date.getHours() < 10) {
    hours.innerHTML = "0" + date.getHours();
  }
}, 1000);
