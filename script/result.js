 window.onload = function () {
   //  result();
  };
console.log(localStorage);
let punti= 50
let wrong = questions.length *10 - punti
//localStorage.getItem('untentPoints')
console.log(wrong)


// const result=function(){

//     const pageResult=document.getElementById("chart")
//     pageResult.innerHTML= `<p> hai fatto :${punti} punti su ${questions.length} domande</p>`
//     console.log(pageResult);
//   }
//   result()

  const chart = function(){
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Wrong','Right'],
        datasets: [{
          borderWidth:0,
          cutout: 200,
          label: '# of Votes',
          data: [punti,wrong],
          backgroundColor: [
            
            '#d30fb9','#00ffff',
            
          ],
        }]
      },

    });
    };
    chart()
  