let myLibrary = [];
let libraryContainer = document.querySelector('.libraryContainer')
let btn = document.getElementById('toggle-btn');
let submit = document.querySelector('input[type="submit"]')
let form = document.querySelector("form")

form.onsubmit = function(event) {
    event.preventDefault()
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").checked

    addBookToLibrary(new Book(title, author, pages, read))
    displayBooks(myLibrary)
}

btn.addEventListener('click', () => {
    const form = document.getElementById('form');

    if(form.style.display === 'none') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
})

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
    libraryContainer.innerHTML = ""

    for (let i = 0; i < myLibrary.length; i++) {
        let ul = document.createElement('ul')
        ul.setAttribute("data-libraryIndex", `${i}`)

        for(const prop in myLibrary[i]) {
            li = document.createElement('li')
            li.innerHTML = myLibrary[i][prop]
            ul.appendChild(li)
        }
        
        let deleteBtn = document.createElement('button')
        deleteBtn.onclick = function() {
            deleteBtn.parentElement.remove()
            myLibrary.splice(i, 1)
            displayBooks(myLibrary)
        }
        deleteBtn.innerHTML = 'Delete Book'
        ul.appendChild(deleteBtn)
        libraryContainer.appendChild(ul)
    }
}

addBookToLibrary(new Book('The Crumpet', 'Kingsworth McGee', 222, true))
addBookToLibrary(new Book('Sinful Pride', 'Coia Lucioa', 123, false))
addBookToLibrary(new Book('Orange of Wrath', 'Gulliver Smith', 84, true))
displayBooks(myLibrary)