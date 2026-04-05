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
