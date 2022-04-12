console.log("It is working");

var btnTranslate = document.querySelector("#btn-translate");
var inpTxtArea = document.querySelector("#inp-txtarea");
var outputDiv = document.querySelector("#output-txtarea");



function clickEventListener(){
    outputDiv.innerText = inpTxtArea.value;
}

btnTranslate.addEventListener("click", clickEventListener );