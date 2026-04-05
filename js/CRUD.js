function onRemoveBook(bookId) {
  removeBook(bookId)
}
function removeBook(bookId) {
  if (bookService.length === bookId - 1) {
    bookService.shift()
  } else {
    bookService.splice(bookId, 1)
  }
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

function onDetailsBook(selectedBook) {
  const backdropModal = document.querySelector('.backdropModal')
  const modal = document.querySelector('.modal')
  const p = modal.querySelector('.curBookPrice')
  const title = modal.querySelector('.curBookTitle')
  const currentBook = bookService.find((book) => book.id === selectedBook)
  console.log(currentBook)
  backdropModal.style.display = 'flex'
  title.innerText = currentBook.bookName
  p.innerText = currentBook.price + '₪'

  //   backdropModal.p.innerText = 'asgerga'
}

function onCloseModal() {
  const backdropModal = document.querySelector('.backdropModal')
  backdropModal.style.display = 'none'
}
