// holds data for input values
const myLibrary = [];

//Input values and submit button
const ADD_BOOK = document.getElementById('add');

function Book(title, name, pages) {
	this.title = title;
	this.name = name;
	this.pages = pages;
	this.date = Date.now();

	this.info = function() {
		return `<div class="book-container">
                    <h1>${title}</h1>
                </div>`;
	};

	myLibrary.push(this);
	render(this);
	clearForm();
}

//adding a new book to the myLibrary variable
function addBookToLibrary(event) {
	event.preventDefault();

	const title = document.getElementById('bookName').value;
	const name = document.getElementById('name').value;
	const pages = document.getElementById('bookPages').value;

	const book = new Book(title, name, pages);
}

// clear form values
function clearForm() {
	const title = (document.getElementById('bookName').value = '');
	const name = (document.getElementById('name').value = '');
	const pages = (document.getElementById('bookPages').value = null);
}

// rendering content to the webpage
function render(addBook) {
	const bookList = document.getElementById('library');
	const bookCard = document.createElement('div');

	bookList.appendChild(bookCard);
	bookCard.setAttribute('class', 'book-container');

	//mapping through myLibrary to grab certain values to render on the webpage
	bookList.innerHTML = `${myLibrary.map(item => {
		return `
		<div class="book-container">
			<div class="title sub-book-container">
				<h1>${item.title}</h2>
			</div>
			<div class="author sub-book-container">
				<h3>${item.name}</h3>
			</div>
			<div class="pages sub-book-container">
				<h4>${item.pages}</h4>
			</div>
		</div>`;
	})}`;
}

// Event listeners
ADD_BOOK.addEventListener('click', addBookToLibrary);

//example books
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310);
const fellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 352);
