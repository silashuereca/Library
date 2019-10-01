//Holds all of my books
let myLibrary = ['Hunger Games', 'Hunger Games 2', 'Hunger Games 3'];
let addMovie = document.getElementById('addMovie').addEventListener('click', handleClick);

function handleClick() {
	let newBook = document.getElementById('movieValue').value;
	return console.log(newBook);
}

function Book() {}

function addBookToLibrary(name) {}

let render = function(template, node) {
	node.innerHTML = template;
};
let template = myLibrary.map(item => {
	return `<div class="book-container">
                <div class="book">
                <h1>${item}</h1>
                </div>
            </div>`;
});
render(template, document.querySelector('#library'));
