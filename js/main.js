 // Change the value of countDownEndDate to the day you want to end the count down
    var countDownEndDate = "november 1, 2023 08:00:00";
    
    var endDate = new Date(countDownEndDate).getTime();
    
    var x = setInterval(function countdown() {
        
        var timeNow = new Date().getTime();

        var timeLeft = endDate - timeNow;

        var days    = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours   = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if(days < 10) {
            days = "0" + days;
        }
      
        if(hours < 10) {
            hours = "0" + hours;
        }

        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        if(seconds < 10) {
            seconds = "0" + seconds;
        }
      
        if (timeLeft > 0) {
            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;
        }
        
    }, 1000);