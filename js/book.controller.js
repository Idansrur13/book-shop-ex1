function onInit() {
  renderBooks()
}

function renderBooks() {
  const books = getBooks(gFilter)

  const elTBody = document.querySelector('tBody')
  const tBody = []
  var strHtml
  if (!books.length) {
    strHtml += `<div class="message">
                        <span>No matching books were found...</span>
                    </div>`
  } else {
    books.map((book, i) => {
      strHtml = `<tr>
  <td>${i}</td>
  <td>  <img class="imgTable" src="${book.imgUrl}" alt=""></td>
  <td>${book.bookName}</td>
  <td>${book.price}₪</td>
  <td>
    <button onclick="onDetailsBook(${book.id})">!</button>
    <button onclick="onUpdateBook(${book.id})">ערוך</button>
    <button onclick="onRemoveBook(${book.id})">מחק</button>
  </td>
</tr>
`
      tBody.push(strHtml)
    })
    elTBody.innerHTML = tBody.join('')
  }
}
