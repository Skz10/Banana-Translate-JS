var inpTextArea = document.querySelector("#inp-txtarea");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output-txtarea");

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function geturl(text){

    return serverurl+"?"+"text="+text;

}

function errorhandler(error){
    console.log("error occurred", error);
}

btnTranslate.addEventListener("click", clickEventHandler)

function clickEventHandler(){

    var inpText = inpTextArea.value;

    fetch(geturl(inpText))
    .then(response => response.json())
    .then(json => 
        {
            var translatedtxt=json.contents.translated;
            outputText.innerText = translatedtxt;
        })
    .catch(errorhandler)

}