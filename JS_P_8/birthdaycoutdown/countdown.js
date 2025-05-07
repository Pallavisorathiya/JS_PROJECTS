function countdown() {
    
    let birthday = new Date("2025-10-23T00:00:00");
    let now = new Date();
    let timeLeft = birthday - now;
  if (timeLeft <= 0) {
      document.querySelector(".countdown").innerHTML = "<h2>🎂 Happy Birthday! 🎂</h2>";
      return;
    }
 let secondsTotal = Math.floor(timeLeft / 1000);
    let days = Math.floor(secondsTotal / (60 * 60 * 24));
    let hours = Math.floor((secondsTotal / (60 * 60)) % 24);
    let minutes = Math.floor((secondsTotal / 60) % 60);
    let seconds = secondsTotal % 60;
  

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
  
 
  countdown();
  setInterval(countdown, 1000);
  