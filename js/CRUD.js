var gFilter = ''
var gBooks

function onRemoveBook(bookId) {
  removeBook(bookId)
  setBooksStorage()
  renderBooks()
  setBooksStorage()
}
function removeBook(bookId) {
  if (gBooks.length === bookId - 1) {
    gBooks.shift()
  } else {
    gBooks.splice(bookId, 1)
  }
}

function onUpdateBook(bookId) {
  const newPriceUpdate = +prompt('set new price')
  gBooks[bookId].price = newPriceUpdate
  setBooksStorage()

  renderBooks()
}

function onAddBook() {
  newBook = {
    id: gBooks.length,
    bookName: prompt('set new book name'),
    price: +prompt('set new book price'),
  }
  if (!newBook.bookName || !newBook.price) return
  gBooks.push(newBook)
  setBooksStorage()

  renderBooks()
}

function onDetailsBook(selectedBook) {
  const backdropModal = document.querySelector('.backdropModal')
  const modal = document.querySelector('.modal')
  const p = modal.querySelector('.curBookPrice')
  const title = modal.querySelector('.curBookTitle')
  const img = modal.querySelector('.curBookImgUrl')
  const currentBook = gBooks.find((book) => book.id === selectedBook)
  console.log(currentBook)
  img.src = currentBook.imgUrl
  backdropModal.style.display = 'flex'
  title.innerText = currentBook.bookName
  p.innerText = currentBook.price + '₪'

  //   backdropModal.p.innerText = 'asgerga'
}

function onCloseModal() {
  const backdropModal = document.querySelector('.backdropModal')
  backdropModal.style.display = 'none'
}

function searchBook(elInput) {
  if (!elInput) return
  gFilter = elInput.value
  renderBooks()
}
