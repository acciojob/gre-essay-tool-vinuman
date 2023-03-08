//your code here

const entry = document.getElementById('evaluatedText');
const display = document.querySelector('h3');

entry.addEventListener('input', function(e){

	let wordCount = entry.value.trim() === "" ? 0 : entry.value.trim().split(' ').length;
    display.textContent = wordCount;
})







