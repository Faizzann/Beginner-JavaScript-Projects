document.querySelector(".increase").addEventListener("click", function(){
    var num = parseInt(document.querySelector(".display h2").innerHTML);
    document.querySelector(".display h2").innerHTML = num+1; 
})

document.querySelector(".decrease").addEventListener("click", function(){
    var num = parseInt(document.querySelector(".display h2").innerHTML);
    document.querySelector(".display h2").innerHTML = num-1; 
})

document.querySelector(".reset").addEventListener("click", function(){
    document.querySelector(".display h2").innerHTML = 0; 
})