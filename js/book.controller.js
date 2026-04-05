function onInit() {
  const books = getBooks()
  renderBooks(books)
}

function renderBooks(books) {
  const elTBody = document.querySelector('tBody')
  const tBody = []
  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i]
    const currentTr = `<tr>
  <td>${currentBook.bookName}</td>
  <td>${currentBook.price}₪</td>
  <td>
    <button>ערוך</button>
    <button>מחק</button>
  </td>
</tr>
`
    tBody.push(currentTr)
  }
  elTBody.innerHTML = tBody.join('')
  console.log(tBody)
}
