let inputTextArea = document.getElementById("input-textarea");
let charCount = document.getElementById("charc-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () =>{

    charCount.textContent = inputTextArea.value.length;

    let txt = inputTextArea.value.trim();

    wordCount.textContent = txt.split(/\s+/).length; //filter((item) => item).

})