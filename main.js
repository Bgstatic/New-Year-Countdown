const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown(){
   
    const currentTime = new Date();
    const FullTime = newYearTime - currentTime;

    const daysCalculated = Math.floor(FullTime / 1000 / 60 / 60 / 24);
    const hoursCalculated = Math.floor(FullTime / 1000 / 60 / 60) % 24;
    const minutesCalculated = Math.floor(FullTime / 1000 / 60) % 60;
    const secondsCalculated = Math.floor(FullTime / 1000) % 60;

    days.innerHTML = daysCalculated
    hours.innerHTML = hoursCalculated < 10 ? "0" + hoursCalculated : hoursCalculated;
    minutes.innerHTML = minutesCalculated < 10 ? "0" + minutesCalculated : minutesCalculated;
    seconds.innerHTML = secondsCalculated < 10 ? "0" + secondsCalculated : secondsCalculated;
}

setInterval(updateCountdown, 1000);