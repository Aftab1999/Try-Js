console.log("javaScript Class Exerice")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library{
    constructor(booklist){
        this.booklist = booklist;
        this.booklist = {}
    }

    getBookList(){
        this.booklist.forEach(Element =>{
            console.log(element);
        });
    }
    issuBook(bookname, user){
        if (this.issuBooks[bookname] ==undefined){
            this.issuBooks[bookname] = user;
        }
        else{
            console.log("This book is already issued!");
        }
    }
    returnBook(bookname){
        delete this.issuBooks[bookname];
    }
}
