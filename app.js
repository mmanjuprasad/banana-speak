var btnTranslate = document.querySelector("#btn-translate")

var txtInput = document.querySelector("#txt-input")

var outputDiv = document.querySelector("#output");



function clickHandler() {
    outputDiv.innerText = "ajsjsjsjsj " + txtInput.value
};

btnTranslate.addEventListener("click" ,clickHandler )

