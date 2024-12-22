const timer = document.getElementById("stopwatch");

    let hr = 0;
    let min = 0;
    let sec = 0;
    let stoptime = true;

    function startTimer() {
      if (stoptime) {
        stoptime = false;
        timerCycle();
      }
    }

    function stopTimer() {
      stoptime = true;
    }


    function timerCycle() {
      if (!stoptime) {
        sec++;
        if (sec === 60) {
          min++;
          sec = 0;
        }
        if (min === 60) {
          hr++;
          min = 0;
        }

        const formatTime = (time) => (time < 10 ? `0${time}` : time);

        timer.innerHTML = `${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}`;

        setTimeout(timerCycle, 1000);
      }
    }


    // ==========One Min Timer============

    function oneTimer(){
      if (stoptime) {
        stoptime = false;
        oneCycle();
      }

    }

    function oneCycle() {
      if (!stoptime) {
        sec++;
        if (sec === 60) {
          min++;
          sec = 0;
        }
       
        
        const formatTime = (time) => (time < 10 ? `0${time}` : time);

        timer.innerHTML = `${formatTime(min)}:${formatTime(sec)}`;

       
        if(min<1){
          setTimeout(oneCycle, 1000);
        }
       
      }
    }
    // /===============5 Min timer=========

    function fiveTimer(){
      if (stoptime) {
        stoptime = false;
        oneCycle();
      }

    }

    function fiveCycle() {
      if (!stoptime) {
        sec++;
        if (sec === 60) {
          min++;
          sec = 0;
        }
       
        
        const formatTime = (time) => (time < 10 ? `0${time}` : time);

        timer.innerHTML = `${formatTime(min)}:${formatTime(sec)}`;

       
        if(min<5){
          setTimeout(fiveCycle, 1000);
        }
       
      }
    }
    

    function resetTimer() {
      stoptime = true;
      hr = 0;
      min = 0;
      sec = 0;
      timer.innerHTML = "00:00:00";
    }




// const timer = document.getElementById("stopwatch");

// var hr = 0;
// var min = 0;
// var sec = 0;
// var stoptime = true;

// function startTimer() {
//   if (stoptime == true) {
//     stoptime = false;
//     timerCycle();
//   }
// }

// function stoptimer() {
//   if (stoptime == false) {
//     stoptime = true;
//   }
// }

// function timerCycle() {
//   if (stoptime == false) {
//     sec++;

//     if (sec == 60) {
//       min++
//       sec = 0;
//     }
//     if (min == 60) {
//      hr++;
//      min=0;
//     }

//     timer.innerHTML = hr + ":" + min + ":" + sec;
    

//     setTimeout(" timerCycle", 1000);
//   }
// }

// function resetTimer(){
//     timer.innerHTML="00:00:00";
//     stoptime=true;
//     hr=0;
//     sec=0;
//     min=0;
// }
