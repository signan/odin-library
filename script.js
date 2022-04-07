let myLibrary = [];

function Book(title, pages, read) {
    this.title = title;
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
}

function addBookToLibrary(title, pages, read) {
    // create a Book object
      myLibrary.push(new Book(title, pages, read));
  }
  
  