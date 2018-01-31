export default function selectBook(book) {
   return {
        type: 'SELECT_BOOK',
        payload: book
   }
}
