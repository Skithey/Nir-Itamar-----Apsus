import { booksService } from '../services/book-service.js'

export default {

    template: `
<input class="add-book search-input" placeholder="Add a book">
     `,
    data() {
        return {

            bookToSave: null,
            title: '',
            bookList: null

        }


    },

    methods: {
        searchBooks() {
            booksService.getNewBooks(this.title)
                .then(books => {
                    console.log('lala', books)

                    this.bookList = books
                })

        },
        addBookToList(bookId) {
            console.log(this.bookList);
            this.bookToSave = this.bookList.find(book => bookId === book.id)
            booksService.addChosenBook(this.bookToSave)
            this.$emit('addBook')
        }
    }


}