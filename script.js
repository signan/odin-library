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
        if (this.read) {
            return `read`;
        }
        else {
            return `not read yet`;
        }
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
    let bookCard = document.createElement('div')
    bookCard.id = `data-book${bookIndex}`;

    let bookTitle = document.createElement('h3')
    bookTitle.textContent = myLibrary[bookIndex].title;

    let bookAuthor = document.createElement('h3')
    bookAuthor.textContent = myLibrary[bookIndex].author;

    let bookPages = document.createElement('h3')
    bookPages.textContent = `${myLibrary[bookIndex].pages} pages`;

    let bookRead = document.createElement('h3')
    bookRead.textContent = myLibrary[bookIndex].isRead();

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);

    return bookCard;
}

function clearDisplay() {
    while (booksContainer.firstChild) {
        booksContainer.removeChild(booksContainer.lastChild);
      }
}







addBookToLibrary('test1', 'tealb', 500, true);
addBookToLibrary('test2', 'taleb', 200, false);

updateDisplay();