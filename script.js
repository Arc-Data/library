const openFormBtn = document.querySelector('#openForm');
const closeFormBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('#overlay');
const modalForm = document.querySelector('.modal-form');
let myLibrary = [];



class Book {
	constructor(title, author, readStatus) {
		this.title = title;
		this.author = author;
		this.readStatus = readStatus;
	}
}

function addBookToLibrary() {
	
}


function openForm() {
	modalForm.classList.add('active');
	overlay.classList.add('active');
}

function closeForm(e) {
	
	modalForm.classList.remove('active');
	overlay.classList.remove('active');
}


overlay.addEventListener('click', closeForm);
closeFormBtn.addEventListener('click', closeForm);
openFormBtn.addEventListener('click', openForm);
