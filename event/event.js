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

const textValue = document.getElementById('input-value').addEventListener('keyup', function (event) {

    const textInput = document.getElementById('input-value');
    const text = event.target.value;

    const btnDelete = document.getElementById("btn-delete");

    if (text === 'delete' || text === 'Delete') {
        //btnDelete.disabled = false;
        btnDelete.removeAttribute("disabled");

    } else {
        //btnDelete.disabled = true;
        btnDelete.setAttribute("disabled", true);
    }
})

const deleteBtn = document.getElementById('btn-delete').addEventListener('click', function () {
    const textHide = document.getElementById('hide-text');
    textHide.style.display = 'none';


})