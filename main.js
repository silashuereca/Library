// holds data for input values
const myLibrary = [];
let myIndex = 0;

//Input values and submit button
const ADD_BOOK = document.getElementById('add');

function Book(title, name, pages) {
	this.title = title;
	this.name = name;
	this.pages = pages;
	this.index = myIndex;

	myLibrary.push(this);
	render(this);
	clearForm();
	myIndex += 1;
}

//adding a new book to the myLibrary variable
function addBookToLibrary(event) {
	event.preventDefault();

	const title = document.getElementById('bookName').value;
	const name = document.getElementById('name').value;
	const pages = document.getElementById('bookPages').value;

	if (title != '' && name != '' && pages != '') {
		const book = new Book(title, name, pages);
	} else {
		alert('Need to fill out form');
	}
}

// clear form values
function clearForm() {
	const title = (document.getElementById('bookName').value = '');
	const name = (document.getElementById('name').value = '');
	const pages = (document.getElementById('bookPages').value = null);
}

//find the selected book item to delete from array
function findBook(data) {
	const bookObject = myLibrary.find(i => i.index == data);
	return bookObject;
}

//select book to delete
function selectBookCard(data) {
	const book = document.querySelector(`div[id="item${data}"]`);
	return book;
}

function removeBook(data) {
	const deleteCard = selectBookCard(data);
	const deleteObject = findBook(data);
	deleteCard.remove();
	myLibrary.splice(deleteObject, 1);
	console.log(deleteObject);
}

// rendering content to the webpage
function render(addBook) {
	const bookList = document.getElementById('library');
	const bookCard = document.createElement('div');

	bookList.appendChild(bookCard);
	bookCard.setAttribute('class', 'book-container');
	//checking if index is incrementing
	console.log(addBook.index);
	//mapping through myLibrary to grab certain values to render on the webpage
	bookList.innerHTML = `${myLibrary.map(item => {
		return `
		<div id="item${item.index}" class="book-container">
			<div class="title sub-book-container">
				<h1>${item.title}</h2>
			</div>
			<div class="author sub-book-container">
				<h3>${item.name}</h3>
			</div>
			<div class="pages sub-book-container">
				<h4>${item.pages}</h4>
			</div>
			<div><button onclick="removeBook(${item.index})">Remove</button></div>
		</div>`;
	})}`;
}

// Event listeners
ADD_BOOK.addEventListener('click', addBookToLibrary);
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310);
const fellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 352);
