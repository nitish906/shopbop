var form = document.querySelector("form");
var user = JSON.parse(localStorage.getItem("user"))

form.addEventListener("submit" , function(event){
    event.preventDefault()
    var timeLeft = 30;
var elem = document.getElementById('some_div');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
   
    
})