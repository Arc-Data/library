const openFormBtn = document.querySelector('#openForm');
const closeFormBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('#overlay');
const modalForm = document.querySelector('.modal-form');
const submitBtn = document.querySelector('.submit-btn');

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStatus = document.querySelector('#read-status');

let myLibrary = [];

class Book {
	constructor(title, author, readStatus) {
		this.title = title;
		this.author = author;
		this.readStatus = readStatus;
	}
}

function addBookToLibrary(event) {
	


	event.preventDefault()
	closeForm();
}


function openForm() {
	modalForm.classList.add('active');
	overlay.classList.add('active');
}

function closeForm(e) {
	modalForm.classList.remove('active');
	overlay.classList.remove('active');
}



submitBtn.addEventListener('click', addBookToLibrary)
overlay.addEventListener('click', closeForm);
closeFormBtn.addEventListener('click', closeForm);
openFormBtn.addEventListener('click', openForm);
