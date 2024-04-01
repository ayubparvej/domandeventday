
//style with js
const headers = document.querySelectorAll('header');

for (const header of headers) {
    header.style.border = '1px solid black';  // Add a border
    header.style.borderRadius = '5px';       // Make it rounded
    header.style.padding = '7px'
    header.style.margin = '10px'
    header.style.backgroundColor = '#f2f2f2';   //
}

//24.8: Create HTML element using js and append child
//Where to add
const placesList = document.getElementById('places-list');
//what to added
const li = document.createElement('li');
li.innerText = 'bonobashe gese';

placesList.appendChild(li);

//where to add

const mainContent = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My food list"
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriany';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Pizza';
ul.appendChild(li2);

section.appendChild(ul);

mainContent.appendChild(section);

//set inner HTML Directly

const section2 = document.createElement('section');
section2.innerHTML = `
<h1>More Info</h1>
<p>This is a paragraph.</p>
<p>This section is append with  innerHTML</p>`;
mainContent.appendChild(section2);  
