window.onload = function () {
  //  result();
};
console.log(localStorage);
let punti = localStorage.getItem("untentPoints");
let wrong = questions.length * 10 - punti;

console.log(wrong);

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
    },
  });
};
chart();
const result = function () {
  const pageResult = document.getElementById("firstP");

  pageResult.innerHTML = `<h2> Correct</h2> <p>${punti}%</p> <P>${punti/questions.length}/ ${
    questions.length
  } questions</p>`;
  console.log(pageResult);
};
result();
const result2 = function () {
  const pageResult = document.getElementById("secondP");

  pageResult.innerHTML = `<h2> Wrong</h2> <p>${wrong}%</p> <P>${punti/questions.length}/ ${
    questions.length
  } questions</p>`;
  console.log(pageResult);
};
result2();
const centralP=function(){
  const passed=`<h4>Congratulations!</h4> 
  <h4>You passed the exam</h4><br>
  <p>We'll send you the certificate in 
  few minutes.
  Check your email(including promotions / spam folder)</p>`
  const notPassed=`<h4>Oh nooo</h4><h4>You didn't pass the exam! attaccate ar cazzo</h4>`
  const centralP=document.getElementById("centralP")
  if(punti>60){
  centralP.innerHTML=`${passed}`}
  else{
    centralP.innerHTML=`${notPassed}`
  }
}
centralP()