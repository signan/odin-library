let myLibrary = [];
const booksContainer = document.querySelector('.books-container');
const newBookButton = document.querySelector('#new-book-btn');
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
    bookCard.setAttribute('data-book-index', book);
    bookCard.classList.add('book');

    let bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    bookTitle.classList.add('title');

    let bookAuthor = document.createElement('h3');
    bookAuthor.textContent = book.author;
    bookAuthor.classList.add('author');

    let bookPages = document.createElement('h3');
    bookPages.textContent = `${book.pages} pages`;
    bookPages.classList.add('pages');

    let bookStatus = document.createElement('h3');
    if (book.status) {
        bookStatus.textContent = "read";
        bookStatus.classList.add('status-read');
    }
    else {
        bookStatus.textContent = "not read yet";
        bookStatus.classList.add('status-notread');
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

function deleteBook() {
    let bookIndex = event.currentTarget.parentNode.getAttribute('data-book-index');
    myLibrary.splice(bookIndex, 1);
    updateDisplay();
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


addBookToLibrary('test1', 'tealb', 500, true);
addBookToLibrary('test2', 'taleb', 200, false);
addBookToLibrary('test2', 'taleb', 200, false);
addBookToLibrary('test3', 'tealb', 300, true);
addBookToLibrary('test4', 'taleb', 400, false);
addBookToLibrary('test5', 'tealb', 700, true);
addBookToLibrary('test6', 'taleb', 1000, false);


updateDisplay();