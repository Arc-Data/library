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

	addBookToLibrary(new Book(title, author, pageCount, status));

	bookTitle.value = '';
	bookAuthor.value = '';

	event.preventDefault()
	closeForm();
}

function addBookToLibrary(book) {
	myLibrary.push(book);
	renderList(book)
}

function changeStatus(event) {
	let statusNode = event.target
	let idx = event.target.parentNode.dataset.index

	myLibrary[idx].readStatus = myLibrary[idx].readStatus === 'planning' ? "finished" : "planning";
	statusNode.textContent = myLibrary[idx].readStatus;

	if(statusNode.textContent === 'finished') {
		statusNode.classList.add('finished');
	} else {
		statusNode.classList.remove('finished');
	}
}

function removeFromList(event) {
	let idx = event.target.parentNode.dataset.index

	myLibrary.splice(idx, 1);
	renderList();
}

function renderList(book) {
	tbody.innerHTML = "";

	myLibrary.forEach((book, idx) => {
		let tr = document.createElement('tr');
		const removeButton = document.createElement('button');
		const changeStatusButton = document.createElement('button');
		let td;

		for(prop in book) {
			td = document.createElement('td');
			
			if(prop === 'readStatus') {
				changeStatusButton.classList.add('button');
				
				if(book[prop] === 'finished') {
					changeStatusButton.classList.add('finished');
				}

				changeStatusButton.addEventListener('click', changeStatus);

				changeStatusButton.textContent = book[prop];
				td.dataset.index = idx;
				td.appendChild(changeStatusButton);
				tr.appendChild(td);
				continue;
			}

			td.textContent = book[prop];
			tr.appendChild(td);
		}


		td = document.createElement('td');
		td.dataset.index = idx;
		removeButton.classList.add('button');
		removeButton.classList.add('delete');
		removeButton.textContent = 'Delete';
		removeButton.addEventListener('click', removeFromList);

		td.appendChild(removeButton);
		tr.appendChild(td);
		tBody.appendChild(tr);
	})	

}

function openForm() {
	modalForm.classList.add('active');
	overlay.classList.add('active');
}

function closeForm(e) {
	modalForm.classList.remove('active');
	overlay.classList.remove('active');
}


submitBtn.addEventListener('click', validateData)

overlay.addEventListener('click', closeForm);
openFormBtn.addEventListener('click', openForm);
