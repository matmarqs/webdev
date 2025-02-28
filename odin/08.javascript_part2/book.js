function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        const readString = read ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${readString}`;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

//console.log(typeof theHobbit.prototype());
//console.log(typeof Object.getPrototypeOf(theHobbit));
console.log(Book.prototype);
