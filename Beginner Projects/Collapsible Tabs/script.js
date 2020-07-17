function expandTab(num){
    document.querySelector(".content"+num).style.display = "block";
    document.querySelector(".tab"+num+" .plus").style.display = "none";
    document.querySelector(".tab"+num+" .minus").style.display = "block";
}

function collapseTab(num){
    document.querySelector(".content"+num).style.display = "none";
    document.querySelector(".tab"+num+" .plus").style.display = "block";
    document.querySelector(".tab"+num+" .minus").style.display = "none";
}