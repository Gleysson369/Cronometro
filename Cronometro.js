window.onload = function (){
  
    var seconds = 00; 
    var min = 00;
    var appendmin = document.getElementById("min");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval ;
  
    buttonStart.onclick = function () {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function () {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function () {
       clearInterval(Interval);
       min = "00";
        seconds = "00";
      appendmin.innerHTML = min;
      appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer() {
      min++; 
      
      if(min <= 9){
        appendmin.innerHTML = "0" + min;
      }
      
      if (min > 9){
        appendmin.innerHTML = min;
        
      } 
      
      if (min > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        min = 0;
        appendmin.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    

  
  }