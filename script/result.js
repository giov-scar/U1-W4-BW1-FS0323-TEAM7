window.onload = function () {
  //  result();
};

//richiamo i punti da localStorage
console.log(localStorage);
let punti = localStorage.getItem("untentPoints");
// variabile per mostrare le domande sbagliate
let wrong = questions.length * 10 - punti;

console.log(wrong);
// chart doughnut per grafico risultati
const chart = function () {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    
    type: "doughnut",
    data: {
      labels: ["Wrong", "Right"],

      datasets: [
        {
          borderWidth: 0,
            cutout: 160,
          // label: ["wrong", "rigth"],
          data: [wrong, punti],
          backgroundColor: ["#d30fb9", "#00ffff"],
        },
      ],
    },options: {
      // Add plugins to options.
      plugins: {
          legend: {
              display: false // This hides all text in the legend and also the labels.
          }
      }
      // add your scales or other options.
  }
  });
};
chart();

//scrivo nell'html i risultati con 2 div per posizionarli al lato del grafico
//primo div con p
const result = function () {
  const pageResult = document.getElementById("firstP");

  pageResult.innerHTML = `<h2> Correct</h2> <p>${punti}%</p> <P>${punti/questions.length}/ ${
    questions.length
  } questions</p>`;
  console.log(pageResult);
};
result();

//secondo div con p
const result2 = function () {
  const pageResult = document.getElementById("secondP");

  pageResult.innerHTML = `<h2> Wrong</h2> <p>${wrong}%</p> <P>${wrong/questions.length}/ ${
    questions.length
  } questions</p>`;
  console.log(pageResult);
};
result2();


//scrivo div p al centro del grafico
const centralP=function(){

  const passed=`<h4>Congratulations!</h4> 
  <h4>You passed the exam</h4><br>
  <p>We'll send you the certificate <br>in 
  few minutes.<br>
  Check your email(including <br>promotions / spam folder)</p>`
  const notPassed=`<h4>Oh nooo</h4><br><h5>You didn't pass the exam! <br>ATTACCATE!</h5>`

  const centralP=document.getElementById("centralP")
  //controllo i punti per far apparire successo o fail dell'quiz
  if(punti>50){
  centralP.innerHTML=`${passed}`}
  else{
    centralP.innerHTML=`${notPassed}`
  }
}
centralP()