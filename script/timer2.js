let time = 60; //minutes * 60 seconds
let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second
const contdownEl = document.getElementById("sec"); 
let ss = document.getElementById('ss')
function updateCountdown() {
    
    let seconds = time ;

    seconds = seconds < 10 ? '0' + seconds : seconds; 
    
    contdownEl.innerHTML = `<p>SECONDS</P> ${seconds}<p>REMAINING</P>`;

    time--;
    ss.style.strokeDashoffset = 450*time/60
    if (time === 0) {
        time = 60
    }
}

const resetTimer = function(){
  time = 60
}