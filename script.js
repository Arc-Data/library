const openFormBtn = document.querySelector('#openForm');
const overlay = document.querySelector('#overlay');
const modalForm = document.querySelector('.modal-form');
const submitBtn = document.querySelector('#submit');

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStatus = document.querySelector('#read-status');
const bookPageCount = document.querySelector('#page-count');

const tBody = document.querySelector('#tbody')

let myLibrary = [];

class Book {
	constructor(title, author, count, readStatus) {
		this.title = title;
		this.author = author;
		this.pageCount = count;
		this.readStatus = readStatus;
	}
}

function validateData(event) {
	event.preventDefault();
	const title = bookTitle.value;
	const author = bookAuthor.value;
	const pageCount = bookPageCount.value;
	const status = bookStatus.value;


	if(title === '' || author === '') {
		return;
	}

	const obj = new Book(title, author, pageCount, status);
	myLibrary.push(obj);

	addBookToLibrary(obj);

	bookTitle.value = '';
	bookAuthor.value = '';

	event.preventDefault()
	closeForm();
}

function addBookToLibrary(book) {
	console.log(book)
	const removeButton = document.createElement('button')
	const tr = document.createElement('tr');
	
	tr.data = "hello";
	for(prop in book) {
		let td = document.createElement('td');
		td.textContent = book[prop];

		tr.appendChild(td);
	}

	let td = document.createElement('td');
	
	removeButton.classList.add('button');
	removeButton.classList.add('delete');
	removeButton.textContent = 'Delete';

	td.appendChild(removeButton);
	tr.appendChild(td);

	tBody.appendChild(tr);
}


function openForm() {
	modalForm.classList.add('active');
	overlay.classList.add('active');
}

function closeForm(e) {
	modalForm.classList.remove('active');
	overlay.classList.remove('active');
}


function initializeTableContents() {

}


submitBtn.addEventListener('click', validateData)

overlay.addEventListener('click', closeForm);
openFormBtn.addEventListener('click', openForm);
