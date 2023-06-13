
const formatTimeLeft = function(time){
    const minutes = Math.floor(time/60)
    let seconds = time % 60
    if(seconds <10){
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
}

const TIME_LIMIT = 20
let timePassed = 0
let timeLeft = TIME_LIMIT


let timerInterval = null;


const startTimer = function(){
    timerInterval= setInterval(() =>{
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById('base-timer-label').innerHTML = formatTimeLeft(timeLeft)
    }, 1000 )
}



document.getElementById('benchmark').innerHTML= `...`
startTimer()















































document.getElementById("benchmark").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTimeLeft(timeLeft)}
  </span>
</div>
`;
