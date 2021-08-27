'use strict';
(
    function(){
        const second = 1000;
        const minute = second *60,
        hour = minute * 60,
        day = hour * 24;

        let gpday = "Aug 27, 2021 15:00:00",
        countdown = new Date(gpday).getTime(),
        x = setInterval(function(){
            let now = new Date().getTime(),
            distance = countdown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),

            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),

            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));

            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
                if (distance < 0) {
                let headline = document.getElementById("headline"),countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
            headline.innerText = "Lights out and away we go! ";
            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
            }
        },0)
    }
());