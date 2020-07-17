document.querySelector(".title1").addEventListener("click", function(){
    document.querySelector(".content1").style.zIndex = 1;
    document.querySelector(".content2").style.zIndex = -1;
    document.querySelector(".content3").style.zIndex = -1;

    document.querySelector(".title1").style.backgroundColor = "#2a8be6";
    document.querySelector(".title2").style.backgroundColor = "#17548d";
    document.querySelector(".title3").style.backgroundColor = "#17548d";
})

document.querySelector(".title2").addEventListener("click", function(){
    document.querySelector(".content1").style.zIndex = -1;
    document.querySelector(".content2").style.zIndex = 1;
    document.querySelector(".content3").style.zIndex = -1;

    document.querySelector(".title1").style.backgroundColor = "#17548d";
    document.querySelector(".title2").style.backgroundColor = "#2a8be6";
    document.querySelector(".title3").style.backgroundColor = "#17548d";
})

document.querySelector(".title3").addEventListener("click", function(){
    document.querySelector(".content1").style.zIndex = -1;
    document.querySelector(".content2").style.zIndex = -1;
    document.querySelector(".content3").style.zIndex = 1;

    document.querySelector(".title1").style.backgroundColor = "#17548d";
    document.querySelector(".title2").style.backgroundColor = "#17548d";
    document.querySelector(".title3").style.backgroundColor = "#2a8be6";
})
