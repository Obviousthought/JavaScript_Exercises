var BookList = function (booksRead, notRead, nextBook, currentBook, lastBook) {
    this.booksRead = booksRead;
    this.notRead = notRead;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.add = function (Book) {
        if (Book.bookReaded === true) {
            this.booksRead++;
        }
        else {
            this.notRead++;
        }
    };
};

var Book = function(bookTitle, bookGenre, bookAuthor, bookReaded, bookReadDate) {
    this.bookTitle = bookTitle;
    this.bookGenre = bookGenre;
    this.bookAuthor = bookAuthor;
    this.bookReaded = bookReaded;
    if (bookReaded === true) {
        this.bookReadDate = new Date(bookReadDate);
    }
    else {
        this.bookReadDate = null;
    }
};

var spiderman = new Book("Spiderman", "Hero", "Geeky-dude", true, "May 19, 1990");
console.log(spiderman);
var superman = new Book("Superman Adventures", "Hero", "Other geek", false);
console.log(superman);
var princessComic = new Book("Princess Stories", "Fantasy", "Little girl", true, "Sep 13, 1988");
console.log(princessComic);