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

