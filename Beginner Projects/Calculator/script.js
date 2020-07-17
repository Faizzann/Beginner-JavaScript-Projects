var num1 = 0;
var num2 = 0;
var opSign = "";
var isdecimal = false;

function pressedButton(btn){
    if(btn>=0 && btn<=9){
        number(btn);
    }
    else{
        operation(btn);
    }
}

function number(num){
    var text = document.querySelector(".display-text").innerHTML;

    if(text === '0'){
        document.querySelector(".display-text").innerHTML = num;
    }
    else{
        document.querySelector(".display-text").innerHTML += num;
    }
      
}

function operation(op){
    var text = document.querySelector(".display-text").innerHTML;
    if(op == 'C'){
        document.querySelector(".display-text").innerHTML = 0;
        num1 = 0;
        num2 = 0;
        isdecimal = false;
        opSign = "";
    }
    else if(op == 'B'){
        var newText = '';
        if(text.length>1){
            for(var i = 0; i<text.length-1; i++){
                newText += text[i];
            }
            document.querySelector(".display-text").innerHTML = newText;
        }
        else{
            document.querySelector(".display-text").innerHTML = 0;
        }
        
    }
    else if(op == '.' && isdecimal === false ){
        document.querySelector(".display-text").innerHTML += '.';
        isdecimal = true;
    }
    else if(op == '='){
        num2 = parseFloat(text);
        if(opSign == '+'){
            ans = num1 + num2;
        }
        else if(opSign == '-'){
            ans = num1 - num2;
        }
        else if(opSign == '*'){
            ans = num1 * num2;
        }
        else if(opSign == '/'){
            ans = num1 / num2;
        }
        else if(opSign == '%'){
            ans = num1 % num2;
        }
        isdecimal = false;
        num2 = 0;
        document.querySelector(".display-text").innerHTML = ans;
    }
    else{

        opSign = op;
        isdecimal = false;
        if(num1 == 0 && isdecimal==false){
            num1 = parseFloat(text);
            document.querySelector(".display-text").innerHTML = 0;
        }
        else{
            num1 = parseFloat(text);
            document.querySelector(".display-text").innerHTML = 0;
        }
    }
}