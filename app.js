
const parent = document.getElementById('container');
let card


let books = [
    {
        title: "Bible",
        author: "God",
        pages: 555,
        read: false
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        pages: 345,
        read: true
    },
]

function refreshBooks() {
    books = []
}


function displayBooks () {
    for (i = books.length - 1; i >= 0; i--) {
        card = document.createElement('div');
        card.classList.add('card');
        let titleString = document.createElement('h3');
        let authorString = document.createElement('p');
        let pagesString = document.createElement('p');
        let readString = document.createElement('p');
        titleString.innerText = books[i].title;
        authorString.innerText = `By: ${books[i].author}`;
        pagesString.innerText = `${books[i].pages} pages`;
        readString.innerText = `Read: ${books[i].read}`;
        card.append(titleString);
        card.append(authorString);
        card.append(pagesString);
        card.append(readString);
        parent.append(card)}
}

displayBooks()


document.getElementById('myButton').addEventListener('click', function() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    let book = {
        title: title,
        author: author,
        pages: pages,
        read: read
    }

    refreshBooks()

    books.push(book)
    displayBooks()





})






// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = false
// }

// Book.prototype.tellInfo = function() {
//     let readInfo = "not read yet"
//     if (this.read == true) {
//         readInfo = "is read"
//     }
//     let infoString = `The book ${this.title}, by ${this.author}, ${this.pages} pages, ${readInfo}.`
//     return infoString
// }







