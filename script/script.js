// array domande
const questions = [];
const easy = [
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
const medium = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: [
      "The Only Router",
      "The Orange Router",
      "The Ominous Router",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
    correct_answer: "Clipper Chip",
    incorrect_answers: ["Enigma Machine", "Skipjack", "Nautilus"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In programming, the ternary operator is mostly defined with what symbol(s)?",
    correct_answer: "?:",
    incorrect_answers: ["??", "if then", "?"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does &quot;LCD&quot; stand for?",
    correct_answer: "Liquid Crystal Display",
    incorrect_answers: [
      "Language Control Design",
      "Last Common Difference",
      "Long Continuous Design",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The first dual-core CPU was the Intel Pentium D.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the term GPU stand for?",
    correct_answer: "Graphics Processing Unit",
    incorrect_answers: [
      "Gaming Processor Unit",
      "Graphite Producing Unit",
      "Graphical Proprietary Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "Android versions are named in alphabetical order.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these people was NOT a founder of Apple Inc?",
    correct_answer: "Jonathan Ive",
    incorrect_answers: ["Steve Jobs", "Ronald Wayne", "Steve Wozniak"],
  },
];
const hard = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question:
      "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];

//faccio partire la funzione bench() all'avvio della pagina
window.onload = function () {
  localStorage.removeItem("untentPoints");
  createbutton();
  selectButton();
};
//timer
let time = 60; //minutes * 60 seconds
let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second
const contdownEl = document.getElementById("sec");
let ss = document.getElementById("ss");
function updateCountdown() {
  let seconds = time;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  contdownEl.innerHTML = `<p>SECONDS</P> ${seconds}<p>REMAINING</P>`;

  time--;
  ss.style.strokeDashoffset = (450 * time) / 60;
  if (time === 0) {
    setTimeout(() => {
      timerNext();
    }, 900);
  }
}
//reset timer
const resetTimer = function () {
  time = 60; // setto il tempo a 60' secondi quando riparte
};
const timerNext = function () {
  if (questionNumber < questions.length) {
    questionNumber++;
    resetTimer();
    bench();
  }
};

// funzione per modificare il dom e far apparire a video i quiz
//button next
let btnNext = document.createElement("button");
//inizializzo a 0 l'array
let questionNumber = 0;

let untentPoints = 0;
const point = function () {
  const quest = questions[questionNumber];

  const answerConteiner = document.querySelectorAll("label");
  // answerConteiner.forEach((el) => {
  btnNext.addEventListener("click", function (e) {
    //aggiungo i punti  e faccio il controllo al nextButton
    e.target;
    console.log(e);
    if (
      document.querySelector(".sel").innerText ===
      questions[questionNumber].correct_answer
    ) {
      untentPoints += 10;
      Swal.fire({
        title: "Good Job",
        icon: "success",
        showConfirmButton: false,
        timer: "1500",
      });
      console.log("incremento", untentPoints);
    } else {
      Swal.fire({
        title: "Oh Noo",
        icon: "error",
        timer: "1500",
        showConfirmButton: false,
      });
    }

    console.log("point", untentPoints);
  });
  console.log(untentPoints);
  // });
  return untentPoints;
};
point();
// funzione bottone selezionato
const press = document.getElementById("benchmark");
let pressButton = null;
const quest = questions[questionNumber];

const buttonPressed = (e) => {
  if (e.target.nodeName === "LABEL") {
    console.log("butt", e);
    e.target.classList.add("sel");

    if (pressButton !== null) {
      pressButton.classList.remove("sel");
    }

    pressButton = e.target;
  }
};
press.addEventListener("click", buttonPressed);
//creo elementi nel benchmark
const bench = function () {
  const quest = questions[questionNumber];
  console.log(quest);
  //creo elementi con innerHTML
  const divCont = document.getElementById("benchmark");
  //creo h2
  divCont.innerHTML = `<h2>${quest.question}</h2>
  ${quest.incorrect_answers
    .map(
      (incorrect) =>
        `<input type="radio" name="x" value="${incorrect}">
    <label >${incorrect}</label>`
    )
    .join("")}
  <input type="radio" name="x" value="${quest.correct_answer}">
<label >${quest.correct_answer}</label>
<p class="progressQuestion">QUESTION ${
    questionNumber + 1
  } <span style=color:#900080>/${questions.length}</span></p>
`;
  console.log(divCont);
  //creo il bottone next
  btnNext.innerHTML = "Next";
  document.getElementById("btn").appendChild(btnNext);
};

const next = function () {
  //richiamo sul click il bottone e aumento di 1 l'array
  btnNext.addEventListener("click", function () {
    questionNumber++;
    resetTimer();

    if (questionNumber < questions.length) {
      bench();
      console.log("final point ", untentPoints);
    } else {
      changeBtn();
      //timer 4s per andare direttamente nei risultati
      setTimeout(() => {
        window.location.href = "result.html";
      }, 4000);
    }
    //salvo il punteggio nella localStorage per richiamarla in result
    localStorage.setItem("untentPoints", untentPoints);

    console.log(questionNumber);
  });
};
next();
// cambio html del bottone next alla fine delle domande
//agiungo link a pagina html
const changeBtn = function () {
  btnNext.innerHTML = `<a class="button" id="link" href="result.html">Result</a>`;
  btnNext.style.textDecoration = "none";
  document.getElementById("btn").appendChild(btnNext);
};

console.log("final point ", untentPoints);

const createbutton = function () {
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const button3 = document.createElement("button");
  const h1=document.createElement("h2")
  h1.innerHTML=`Choose difficulty of your exam`
  button1.innerHTML = `EASY`;
  button2.innerHTML = `MEDIUM`;
  button3.innerHTML = `HARD`;
  
  document.getElementById("btn2").appendChild(h1);
  document.getElementById("btn2").appendChild(button1);
  document.getElementById("btn2").appendChild(button2);
  document.getElementById("btn2").appendChild(button3);

  document.getElementById("timer").style.display = "none";
};

const selectButton = function () {
  const bt = document.querySelectorAll("button");
  bt.forEach((e) => {
    e.addEventListener("click", function (el) {
      if (el.target.innerHTML === "EASY") {
        easy.forEach((el) => {
          questions.push(el);
        });
        console.log(questions);
        document.getElementById("timer").style.display = "block";
        resetTimer();
        bench();
      } else if (el.target.innerHTML === "MEDIUM") {
        medium.forEach((el) => {
          questions.push(el);
        });

        console.log(el);
        resetTimer();
        document.getElementById("timer").style.display = "block";
        bench();
      } else {
        hard.forEach((el) => {
          questions.push(el);
        });
        bench();
        resetTimer();
        document.getElementById("timer").style.display = "block";
      }
    });
  });
};
