do{
    var inputTime = prompt("Enter Time (day:hour:minute:second):");
    var timeList = inputTime.split(":");
}while(inputTime == "" || timeList.length < 4);

var day = parseInt(timeList[0]);
var hour = parseInt(timeList[1]);
var minute = parseInt(timeList[2]);
var second = parseInt(timeList[3]);

function countdownStarter(days=0, hours=0, minutes=0, seconds=0){
    document.querySelector(".day h3").innerHTML = days;
    document.querySelector(".hour h3").innerHTML = hours;
    document.querySelector(".minute h3").innerHTML = minutes;
    document.querySelector(".second h3").innerHTML = seconds;
}

countdownStarter(day,hour,minute,second);

var interval = setInterval(function(){
    second--;
    document.querySelector(".day h3").innerHTML = day;
    document.querySelector(".hour h3").innerHTML = hour;
    document.querySelector(".minute h3").innerHTML = minute;
    document.querySelector(".second h3").innerHTML = second;

    if(second == 0 && minute == 0 && hour == 0 && day == 0){
        clearInterval(interval);
        alert("Time Over");
        location.reload();
    }
    else if(second == 0 && minute > 0){
        second = 60;
        minute--;
    }
    else if(second == 0 && minute == 0 && hour > 0){
        second = 60;
        minute = 59;
        hour--;
    }
    else if(second == 0 && minute == 0 && hour == 0 && day > 0){
        second = 60;
        minute = 59;
        hour = 23;
        day--;
    }
},1000);
