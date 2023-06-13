// array domande

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// funzione per modificare il dom e far apparire a video i quiz
//button next
let btnNext = document.createElement("button");
//inizializzo a 0 l'array
let questionNumber = 0;

const bench = function () {
  const quest = questions[questionNumber];
  console.log(quest);
  //creo elementi con innerHTML
  const divCont = document.getElementById("benchmark");
  //creo h2
  divCont.innerHTML = `<h2>${quest.question}</h2>
  ${quest.incorrect_answers.map(
    (incorrect) =>
      `<input class="pd" type="radio" name="x" value="${incorrect}">
    <label>${incorrect}</label>`
  )}
<input class="pd" type="radio" name="x" value="${quest.correct_answer}">
<label>${quest.correct_answer}</label>
`;
  console.log(divCont);
  //creo il bottone next
  btnNext.innerHTML = "Next";
  document.getElementById("benchmark").appendChild(btnNext);
};
bench();

const next = function () {
  //richiamo sul click il bottone e aumento di 1 l'array
  btnNext.addEventListener("click", function () {
    bench();
    checkedAn();

    // if(btnNext.addEventListener){
    //   startTimer()
    // }
    questionNumber++;

    console.log("indice array", questionNumber);
  });
};
next();

let untentPoints = 0;
const quest = questions[questionNumber];
const checkedAn = function () {
  let answerConteiner = document.querySelector("input:checked");
  console.log(answerConteiner);
  if (answerConteiner === quest.correct_answer) {
    console.log(answerConteiner);
    untentPoints++;
  }
};
