let input=document.getElementById('display');
let btn=document.querySelectorAll('button');


let currentinput="";

btn.forEach(function(button){
    button.addEventListener('click',function(){
        let value=button.innerText;

        if (value==='C'|| value==="c"){
            currentinput="";
            input.value="";
        }
        else if(value==="back"){
            currentinput=currentinput.slice(0, -1);
            input.value=currentinput;
        }
        else if(value==="="){
            try{
                currentinput=eval(currentinput).toString();
                input.value=currentinput;
            }catch{
                input.value='Error';
                currentinput="";
            }
            }
        else if(value==='%'){
            currentinput=(eval(currentinput)/100).toString();
            input.value=currentinput;
        }
        else if (value === ".") {
            let lastNumber = currentinput.split(/[\+\-\*\/]/).pop();
            if (!lastNumber.includes(".")) {
                currentinput += ".";
                input.value = currentinput;
            }
        }
        else{
            currentinput+=value;
            input.value=currentinput;
        }
    });
   });
