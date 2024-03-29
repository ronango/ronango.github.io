// Set the date we're counting down to
var countDownDate = new Date("May 26, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

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
  document.getElementById("days").innerHTML = (days >= 10 ? days : "0" + days);
  document.getElementById("hours").innerHTML = (hours >= 10 ? hours : "0" + hours);
  document.getElementById("minutes").innerHTML = (minutes >= 10 ? minutes : "0" + minutes);
  document.getElementById("seconds").innerHTML = (seconds >= 10 ? seconds : "0" + seconds);
  
  /*
  (days >= 10 ? days : "0" + days) + " : " + 
  (hours >= 10 ? hours : "0" + hours) + " : " + 
  (minutes >= 10 ? minutes : "0" + minutes) + " : " + 
  (seconds >= 10 ? seconds : "0" + seconds);*/

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
