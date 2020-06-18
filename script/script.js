const library = document.querySelector('.lib');
const openForm = document.querySelector('.open-form');
const closeForm = document.querySelector('.close-form');
const submitForm = document.querySelector('.submit-form');
// const section = document.querySelector('section');
const form = document.querySelector('.book-form');
const params = document.querySelectorAll('.params');

let myLibrary = [
    {author: 'J.K Rowlings', title: 'Harry Potter', pages: 234, read: 'Yes'},
    {author: 'Y.K Rowlings', title: 'Larry Potter', pages: 834, read: "No"},
    {author: 'J.P Rowlings', title: 'Marry Potter', pages: 9034, read: "Yes"}
];

function Book(author, title, pages, read) {
  this.author =  author
  this.title = title
  this.pages = pages
  this.read = read
};

function addBookToLibrary(book) {
  myLibrary.push(book);
};

function render() {
  myLibrary.forEach(book => {
    const html = `
      <tr>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
    </tr>
    `
    library.innerHTML += html;
  });

  const removeBook = document.createElement('button');
  const readStatus = document.createElement('button');
    
};

// reload section tag
function reload() {
  library.innerHTML = '';
}

function addBook(e) {
  let _ = undefined;
  const newBook = new Book(_, _, _, 'No');
  e.preventDefault();
  params.forEach(param => {
    if (param.name === 'author' || param.name === 'title') {
      newBook[param.name] = param.value;
    } else if (param.name === 'pages') {
      newBook[param.name] = parseInt(param.value, 10);
    } else if (param.id === 'read-1' && param.checked === true) {
      newBook[param.name] = 'Yes';
    }
  });
  addBookToLibrary(newBook);
  // console.log(myLibrary);
  reload();
  render();
  // clear form fields and close form
  clearCloseForm();
}

function clearCloseForm() {
  form.reset();

}

openForm.addEventListener('click', (e)=> {
  e.preventDefault();
  form.style.display = 'block';
});

submitForm.addEventListener('click', addBook);
closeForm.addEventListener('click', e=> {
  e.preventDefault();
  form.style.display = 'none';
})

render();