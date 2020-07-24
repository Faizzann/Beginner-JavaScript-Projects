
var day = 0;
var hour = 0;
var minute = 0;
var second = 0;
var interval;

document.getElementById("start").addEventListener("click", function(){
    day = document.getElementById("days").value;
    hour = document.getElementById("hours").value;
    minute = document.getElementById("minutes").value;
    second = document.getElementById("seconds").value;

    document.querySelector(".user-input-container").setAttribute("class", "hide");
    interval = setInterval(countdown,1000);
})

document.getElementById("days").addEventListener("blur", valueChecker);
document.getElementById("hours").addEventListener("blur", valueChecker);
document.getElementById("minutes").addEventListener("blur", valueChecker);
document.getElementById("seconds").addEventListener("blur", valueChecker);


function valueChecker(){
    if(parseInt(this.value) > parseInt(this.max)){
        this.value = this.max;
    }
    else if(parseInt(this.value) < parseInt(this.min)){
        this.value = this.min;
    }

    if(this.value == ""){
        this.value = 0;
    }
}

function countdown(){
    document.querySelector(".day h3").innerHTML = day;
    document.querySelector(".hour h3").innerHTML = hour;
    document.querySelector(".minute h3").innerHTML = minute;
    document.querySelector(".second h3").innerHTML = second;

    if(second <= 0 && minute == 0 && hour == 0 && day == 0){
        clearInterval(interval);
        alert("Time Over");
        location.reload();
    }
    else if(second <= 0 && minute > 0){
        second = 60;
        minute--;
    }
    else if(second <= 0 && minute <= 0 && hour > 0){
        second = 60;
        minute = 59;
        hour--;
    }
    else if(second <= 0 && minute <= 0 && hour <= 0 && day > 0){
        second = 60;
        minute = 59;
        hour = 23;
        day--;
    }
    second--;
}