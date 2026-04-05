function onInit() {
  const books = getBooks()
  renderBooks()
}

function renderBooks() {
  const elTBody = document.querySelector('tBody')
  const tBody = []
  bookService.map((book, i) => {
    const currentTr = `<tr>
  <td>${i}</td>
  <td>${book.bookName}</td>
  <td>${book.price}₪</td>
  <td>
    <button onclick="onDetailsBook(${book.id})">!</button>
    <button onclick="onUpdateBook(${book.id})">ערוך</button>
    <button onclick="onRemoveBook(${book.id})">מחק</button>
  </td>
</tr>
`
    tBody.push(currentTr)
  })
  elTBody.innerHTML = tBody.join('')
}
