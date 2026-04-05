function onRemoveBook(bookId) {
  removeBook(bookId)
}
function removeBook(bookId) {
  bookService.splice(bookId, 1)
  renderBooks()
}

function onUpdateBook(bookId) {
  const newPriceUpdate = +prompt('set new price')
  bookService[bookId].price = newPriceUpdate
  renderBooks()
}

function onAddBook() {
  newBook = {
    id: bookService.length,
    bookName: prompt('set new book name'),
    price: +prompt('set new book price'),
  }
  bookService.push(newBook)
  renderBooks()
}
