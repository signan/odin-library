let myLibrary = [];
const booksContainer = document.querySelector('.books-container');
const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', submitBook);

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

}

function addBookToLibrary(title, author, pages, status) {
  // create a Book object
    myLibrary.push(new Book(title, author, pages, status));
}

function updateDisplay() {
    // wipe the display then repopulate it
    clearDisplay();
    displayBooks();
}

function clearDisplay() {
    // removes all book cards. it doesn't alter the library array
    while (booksContainer.firstChild) {
        booksContainer.removeChild(booksContainer.lastChild);
      }
}

function displayBooks() {
    // create all book cards
    for (let i = 0; i < myLibrary.length; i++) {
        booksContainer.appendChild(createBookCard(i));
    }
}

function createBookCard(bookIndex) {
    //create individual book card 
    let book = myLibrary[bookIndex]

    let bookCard = document.createElement('div');
    bookCard.setAttribute('data-book-index', bookIndex);
    bookCard.classList.add('book');

    let bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;
    bookTitle.classList.add('title');

    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    bookAuthor.classList.add('author');

    let bookPages = document.createElement('p');
    bookPages.textContent = `${book.pages} pages`;
    bookPages.classList.add('pages');

    let bookStatus = document.createElement('p');
    bookStatus.addEventListener('click', toggleStatus);
    bookStatus.classList.add('status');
    if (book.status) {
        bookStatus.textContent = "read";
        bookStatus.classList.add('read');
    }
    else {
        bookStatus.textContent = "not read yet";
        bookStatus.classList.add('not-read');
    }

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', deleteBook);

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookStatus);
    bookCard.appendChild(deleteButton);

    return bookCard;
}

function toggleStatus() {
    // get the index of the book
    // check if the status value and flip it
    // update the display
    let bookIndex = event.currentTarget.parentNode.getAttribute('data-book-index');
    if (myLibrary[bookIndex].status) {
        myLibrary[bookIndex].status = false;
    }
    else {
        myLibrary[bookIndex].status = true
    }
    updateDisplay();
}

function deleteBook() {
    let bookIndex = event.currentTarget.parentNode.getAttribute('data-book-index');
    if (confirm(`are you sure you want to delete "${myLibrary[bookIndex].title}"?`)) {
        myLibrary.splice(bookIndex, 1);
        updateDisplay();    
    }
}

function submitBook() {
    const newTitle = document.querySelector('#name').value;
    const newAuthor = document.querySelector('#author').value;
    const newPages = document.querySelector('#pages').value;
    const newStatus = document.querySelector('#status').value;

    if (newTitle === '' || newAuthor === '' || newPages === '') {
        alert('Please fill all the information');
        return;
    }
    if (isNaN(newPages)) {
        alert('Please enter a number for pages')
        return;
    }

    if (bookAlreadyExists(newTitle, newAuthor, newPages)) {
        alert('This book is already in the library');
        return;
    }
    
    addBookToLibrary(newTitle, newAuthor, newPages, newStatus);
    updateDisplay();
}

function bookAlreadyExists(title, author, pages) {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        if (title === book.title && author === book.author && pages === book.pages) {
            return true;
        }
    }
}


addBookToLibrary('A ​Court of Silver Flames', 'Sarah J. Maas', 757, true);
addBookToLibrary('Under the Whispering Door', 'T.J. Klune', 373, false);
addBookToLibrary('The ​Crown of Gilded Bones', 'Jennifer L. Armentrout', 654, false);
addBookToLibrary('She Who Became the Sun', 'Shelley Parker-Chan', 416, true);
addBookToLibrary('Ariadne', 'Jennifer Saint', 320, false);
addBookToLibrary('The Last Graduate', 'Naomi Novik', 388, true);
addBookToLibrary('The Book of Magic', 'Alice Hoffman', 400, false);


updateDisplay();