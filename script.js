let myLibrary = [];
let libraryContainer = document.querySelector('.libraryContainer')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

function displayBooks(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        let ul = document.createElement('ul')
        
        for(const prop in myLibrary[i]) {
            li = document.createElement('li')
            li.innerHTML = myLibrary[i][prop]
            ul.appendChild(li)
        }
        
        libraryContainer.appendChild(ul)
    }
}

addBookToLibrary(new Book('The Crumpet', 'Kingsworth', 222, true))
addBookToLibrary(new Book('Sinful Pride', 'Coia Lucioa', 123, false))
addBookToLibrary(new Book('Orange of Wrath', 'Gulliver Smith', 84, true))
displayBooks(myLibrary)