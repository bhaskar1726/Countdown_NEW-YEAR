const daysEl  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const  minEl= document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYerars = "1 Jan 2023";

function countdown(){
    const newYearsDate = new Date(newYerars);
    const currentDate = new Date();

      const totalSeconds = (newYearsDate - currentDate)/1000;
      const day = Math.floor(totalSeconds / 3600 / 24);
      const hour = Math.floor(totalSeconds / 3600) %24;
      const min = Math.floor(totalSeconds / 60 )%60;
      const second = Math.floor(totalSeconds)%60;

    //   console.log(day , hour , min , second);


    daysEl.innerHTML = formatTime(day);
    hoursEl.innerHTML = formatTime(hour);
    minEl.innerHTML = formatTime(min);
    secondsEl.innerHTML = formatTime(second);
    
 }

 function formatTime(time){ 
     return time < 10 ? `0${time}` : time;
 };

//INITIAL CALL
countdown();

setInterval(countdown, 1000);