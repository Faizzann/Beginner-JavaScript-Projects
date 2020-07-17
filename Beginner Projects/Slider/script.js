var contentNum = 1;

function nextContent(){
    document.getElementById("content"+contentNum).style.zIndex = -1;
    contentNum = (contentNum % 4)+1;
    document.getElementById("content"+contentNum).style.zIndex = 1;
}

function prevContent(){
    document.getElementById("content"+contentNum).style.zIndex = -1;
    contentNum--;
    if(contentNum <= 0){
        contentNum = 4;
    }
    document.getElementById("content"+contentNum).style.zIndex = 1;
}