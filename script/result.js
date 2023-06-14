window.onload = function () {
    result();
  };
localStorage.getItem("untentPoints")
console.log(localStorage);



const result=function(){
    const pageResult=document.getElementById("chart")
    pageResult.innerHTML=`<p> hai fatto :${untentPoints} punti su ${questions.length} domande</p>`
    console.log(pageResult);
  }
  result()
  