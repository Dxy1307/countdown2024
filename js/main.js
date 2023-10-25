$(document).ready(
    button = document.getElementsByClassName('button-64')
  );
  
  
  function start() {
    document.getElementById('title').innerText='NEW YEAR COUNT DOWN'  
    var countDownDate = new Date("2023  Jan 22 00:00:00").getTime();
    var sayTime = new Date("2023 Jan 21 23:59:49").getTime();
  
    // Update the count down every 1 second
    var x = setInterval(function () {
      var audio = new Audio("./song/countdownsound.mp3");
      // Get today's date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="demo"
      document.getElementById("day").innerHTML = "<span>" + days + "</span>DAYS";
      document.getElementById("hour").innerHTML = "<span>" + hours + "</span>HOURS";
      document.getElementById("minute").innerHTML = "<span>" + minutes + "</span>MINUTES";
      document.getElementById("second").innerHTML = "<span>" + seconds + "</span>SECONDS";
      // If the count down is finished, write some text
      if (now - (now % 1000) == sayTime) {
        audio.play();
      }
      if (distance <= 0) {
        clearInterval(x);
        document.getElementById("full").style.zIndex = "1";
        document.getElementById("container").style.zIndex = "0";
        document.getElementById("container").innerHTML = "<h1>HAPPY NEW YEAR <br> <span>2023</span> </h1>";
        var audio = new Audio("./song/Happy New Year.mp3");
        audio.play();
        Run();
  
      }
  
    }, 1000);
  }