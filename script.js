let myLibrary = [];
let booksContainer = document.querySelector('.books-container')

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (this.read) {
            return `${this.title}, ${pages} pages, read.`;
        }
        else {
            return `${this.title}, ${pages} pages, not read yet.`;
        }
    }

    this.isRead = function() {
        return this.read;
    }
}

function addBookToLibrary(title, author, pages, read) {
  // create a Book object
    myLibrary.push(new Book(title, author, pages, read));
}

function updateDisplay() {
    clearDisplay();
    displayBooks();
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        booksContainer.appendChild(createBookCard(i));
    }
}

function createBookCard(bookIndex) {
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

    let bookRead = document.createElement('h3');
    if (book.isRead()) {
        bookRead.textContent = "read";
        bookRead.classList.add('status-read');
    }
    else {
        bookRead.textContent = "not read yet";
        bookRead.classList.add('status-notread');
    }

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', deleteBook);

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(deleteButton);

    return bookCard;
}

function deleteBook() {
    let bookIndex = event.currentTarget.parentNode.getAttribute('data-book-index');
    myLibrary.splice(bookIndex, 1)
    updateDisplay();
}

function clearDisplay() {
    while (booksContainer.firstChild) {
        booksContainer.removeChild(booksContainer.lastChild);
      }
}







addBookToLibrary('test1', 'tealb', 500, true);
addBookToLibrary('test2', 'taleb', 200, false);
addBookToLibrary('test3', 'tealb', 300, true);
addBookToLibrary('test4', 'taleb', 400, false);
addBookToLibrary('test5', 'tealb', 700, true);
addBookToLibrary('test6', 'taleb', 1000, false);

updateDisplay();