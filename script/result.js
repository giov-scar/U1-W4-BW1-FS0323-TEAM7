window.onload = function () {
    result();
  };
console.log(localStorage);
let punti=localStorage.getItem("untentPoints")



const result=function(){

    const pageResult=document.getElementById("chart")
    pageResult.innerHTML=`<p> hai fatto :${punti} punti su ${questions.length} domande</p>`
    console.log(pageResult);
  }
  result()
  