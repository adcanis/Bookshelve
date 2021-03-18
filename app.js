
//Global Settings
const addBook = document.querySelector('#addBook');
const user = document.querySelector('#user');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.delete');
const cancelBtn = document.querySelector('#cancel');
const saveBtn = document.querySelector('#saveBtn')
const userInputs = document.querySelector('.userInputs');

//Button Functions
user.addEventListener('click', function() {
    alert('login has been disabled, as storage has not been enabled');
})
addBook.addEventListener('click', function() {
    modal.style.display = 'block';
})
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
})
cancelBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    bookList = '';
})
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})
saveBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    addBookToLibrary();
    makeBook();
})

//Library Globals
let myLibrary = [];
let newBook;

//Add Book
class Book {
    constructor(title, author, pages) {
    this.title = title;    
    this.author = author;
    this.pages = pages; 
    }
}
function addBookToLibrary() {
    for (let i = 0; i < myLibrary; i++) {
        createBook(myLibrary[i]);
    }
    newBook = new Book(title.value, author.value, pages.value);
    myLibrary.push(newBook);
    console.log(newBook);
}
function makeBook(book) {
    const library = document.querySelector('.content');
    const myBooks = document.createElement('div')
    const bookTitle = document.createElement('div')
    const bookAuthor = document.createElement('div')
    const bookPages = document.createElement('div')
    const haveRead = document.createElement('button')
    const removeBtn = document.createElement('button');
    const bookImg = document.createElement('div');

    myBooks.classList.add('card');
    myBooks.setAttribute('id', myLibrary.indexOf(book));
    myBooks.appendChild(bookTitle);
    bookImg.classList.add('fa-book');
    myBooks.appendChild(bookImg);
    
    
    bookTitle.textContent = title.value;
    bookTitle.classList.add('card-header-book');
    myBooks.appendChild(bookTitle);

    bookAuthor.textContent = 'Author:  ' + author.value;
    bookAuthor.classList.add('author');
    myBooks.appendChild(bookAuthor);

    bookPages.textContent = 'Pages:  ' + pages.value;
    bookPages.classList.add('pages');
    myBooks.appendChild(bookPages);

    removeBtn.textContent = 'x';
    removeBtn.classList.add('button');
    myBooks.appendChild(removeBtn);
    library.appendChild(myBooks);
    removeBtn.style.backgroundColor = '#ff3860';
    removeBtn.style.color = "#ffffff";
    removeBtn.style.borderRadius = '50px';
    removeBtn.addEventListener('click', function () {
        myLibrary.splice(book, 1);
        myBooks.classList.remove('card');
        bookTitle.remove();
        bookAuthor.remove();
        bookPages.remove();
        bookImg.remove();
        haveRead.remove();
        removeBtn.remove();
    })

    haveRead.textContent = 'Finished'
    haveRead.classList.add('button')
    myBooks.appendChild(haveRead)
    haveRead.addEventListener('click', function () {
        haveRead.style.backgroundColor = '#00d1b2';
        haveRead.style.color = "#ffffff";
    })
}

//Library Storage Settings
// function localData() {
//     localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
// }   if (!localStorage.myLibrary) {
//     addBookToLibrary();
// } else {
//     let objects = localstorage.getItem(`myLibrary`);
//     objects = JSON.parse(objects);
//     myLibrary = objects;
//     addBookToLibrary();
// }












