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
  let btnNext=document.createElement("button")
  let answer = 0;
  const bench = function () {
    //inizializzo a 0
    
    let quest = questions[answer];
    console.log(quest);
    //creo elemento h1
    let h1 = document.createElement("h1");
    h1.innerText = quest.question;
    console.log(h1);
    document.getElementById("benchmark").appendChild(h1);
    //creo input  radio e label per correct
    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    let label = document.createElement("label");
    label.innerText = quest.correct_answer;
    document.getElementById("benchmark").appendChild(radioButton);
    document.getElementById("benchmark").appendChild(label);
      //ciclo array incorrect_answer per prendere le risposte 
    for (let i = 0; i < quest.incorrect_answers.length; i++) {
      let x = quest.incorrect_answers[i];
      console.log(x);
      // creo elemento radio button e label per incorrect_answer
      let radioButton = document.createElement("input");
      radioButton.type = "radio";
      let label = document.createElement("label");
      label.innerText = x;
      console.log(radioButton);
      console.log(label);
      document.getElementById("benchmark").appendChild(radioButton);
      document.getElementById("benchmark").appendChild(label);
    }
    btnNext.innerText="Next"
    document.getElementById("benchmark").appendChild(btnNext);

  
  };
  bench();
  
//   const buttonNext=function(){
//     btnNext.addEventListener("click",function(){
//         for (let i = 0; i < questions.length; i++) {
//             answer+[i]
//             console.log(answer);   
//         }
//     })
//   }
//   buttonNext()