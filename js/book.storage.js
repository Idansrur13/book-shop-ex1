const storageBookKey = 'books'
function getBooksStorage() {
  const books = localStorage.getItem(storageBookKey)

  return JSON.parse(books)
}

function setBooksStorage() {
  const json = JSON.stringify(gBooks)
  localStorage.setItem(storageBookKey, json)
}
