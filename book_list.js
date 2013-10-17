var BookList = function (bookArray) {
    this.bookArray = bookArray;
    this.booksRead = 0;
    this.notRead = 0;
    this.nextBook = null;
    this.currentBook =null;
    this.lastBook = null;
    this.add = function (Book) {
        this.bookArray.push(Book);
        if (Book.bookReaded === true) {
            this.booksRead++;
            this.lastBook = checkDates(this.bookArray);
        }
        else {
            this.notRead++;
        }
    };
    this.finishBook = function(Book) {
        bookIsThere = false;
        for (var i = 0; i < bookArray.length; i++) {
            if (Book === bookArray[i]) {
                bookIsThere = true;
            }
        }
        if (bookIsThere === true) {
            Book.bookReaded = true;
            Book.bookReadDate = new Date();
            this.booksRead++;
            this.notRead--;
        }
        else {
            console.log("Sorry, that Book is not in this Book List.");
        }

    };

};

var checkDates = function(bookArray) {
    var lastRead = bookArray[0];
    for (var i =1; i < bookArray.length; i++) {
        if (bookArray[i].bookReadDate >= lastRead.bookReadDate) {
            lastRead = bookArray[i];
        }
    }
    return lastRead;

};


var Book = function(bookTitle, bookGenre, bookAuthor, bookReaded, bookReadDate) {
    this.bookTitle = bookTitle;
    this.bookGenre = bookGenre;
    this.bookAuthor = bookAuthor;
    this.bookReaded = bookReaded;
    this.bookReadDate = bookReadDate;
};

var spiderman = new Book("Spiderman", "Hero", "Geeky-dude", true, new Date(2000, 5, 4));
var superman = new Book("Superman Adventures", "Hero", "Other geek", false);
var princessComic = new Book("Princess Stories", "Fantasy", "Little girl", true, new Date(2001,12,14));
var sorcerersStone = new Book("sorcerersStone", "Fantasy", "Rowling", true, new Date(2013,05,10));
var chamberOfSecrets = new Book("chamberOfSecrets", "Fantasy", "Rowling", true, new Date(2004,08,16));
var prisonerOfAzcaban = new Book("prisonerOfAzcaban", "Fantasy", "Rowling", true, new Date(1995,04,04));
var gobletOfFire = new Book("gobletOfFire","Fantasy", "Rowling", false);
var orderOfThePhoenix = new Book("orderOfThePhoenix","Fantasy", "Rowling", false);
var halfBloodPrince = new Book("halfBloodPrince","Fantasy", "Rowling", false);
var deathlyHallows = new Book("deathlyHallows","Fantasy", "Rowling", false);

var HarryPotter = new BookList([]);
var ComicList = new BookList([]);

ComicList.add(spiderman);
ComicList.add(superman);
ComicList.add(princessComic);

HarryPotter.add(sorcerersStone);
HarryPotter.add(chamberOfSecrets);
HarryPotter.add(prisonerOfAzcaban);
HarryPotter.add(gobletOfFire);
HarryPotter.add(orderOfThePhoenix);
HarryPotter.add(halfBloodPrince);
HarryPotter.add(deathlyHallows);


HarryPotter.finishBook(gobletOfFire);
