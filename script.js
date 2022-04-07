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
    for (let i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div')
        bookCard.id = `data-book${i}`;

        let bookTitle = document.createElement('h3')
        bookTitle.textContent = myLibrary[i].title;

        let bookAuthor = document.createElement('h3')
        bookAuthor.textContent = myLibrary[i].author;

        let bookPages = document.createElement('h3')
        bookPages.textContent = `${myLibrary[i].pages} pages`;

        let bookRead = document.createElement('h3')
        bookRead.textContent = myLibrary[i].isRead();

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        booksContainer.appendChild(bookCard);
        booksContainer.appendChild(document.createElement('br'))
    }
}

addBookToLibrary('test1', 'tealb', 500, true);
addBookToLibrary('test2', 'taleb', 200, false);

updateDisplay();