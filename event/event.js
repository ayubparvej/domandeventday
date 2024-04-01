const makePink = document.getElementById('make-pink').addEventListener("click", function () {

    document.body.style.backgroundColor = 'pink'
})


const btnInpt = document.getElementById('show-text').addEventListener("click", function () {

    const getText = document.getElementById('inpt-text');
    const text = getText.value;

    const display = document.getElementById('text-display');
    display.innerText = text;

    getText.value = '';


});