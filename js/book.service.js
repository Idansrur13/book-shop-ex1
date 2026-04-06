const bookService = [
  {
    id: 0,
    bookName: 'המטופלת השקטה',
    imgUrl: 'img/image.png',
    price: 89,
  },
  {
    id: 1,
    bookName: 'הנופלים',
    imgUrl: 'img/image copy.png',
    price: 73,
    autor: 'ציפי',
  },
  {
    id: 2,
    bookName: 'סערת נפש',
    imgUrl: 'img/image copy 2.png',
    price: 89,
    autor: 'אוריה',
  },
  {
    id: 3,
    bookName: 'אחרי כל המדבר הזה',
    imgUrl: 'img/image copy 3.png',
    price: 80,
    autor: 'גבי',
  },
  {
    id: 4,
    bookName: 'ישראל שיחת נפש',
    imgUrl: 'img/image copy 4.png',
    price: 72,
    autor: 'גבי',
  },
]

function getBooks() {
  gBooks = getBooksStorage() ?? bookService

  if (gFilter === '') return gBooks

  return gBooks.filter((book) => book.bookName.includes(gFilter))
}
