import { booksService } from '../services/book-service.js';
// import { utilService } from '../utill-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import addBook from '../cmps/add-book.cmp.js'
import bookDetails from '../Pages/book-details.cmp.js'
import { utilsService } from '../../utils/utils-service.js'

export default {
    template: `
    <div>
    <main class="main-books-container container flex column align-center" >
    <h2 class="bookpage-header">Sus-Books</h2>
    <add-book @addBook="renderList"> </add-book> 
    <section class="filter-container">
    <book-filter @filter="setFilter"></book-filter>
    <book-details @close="setCurrBook" v-if="currBook" :book="currBook" ></book-details>
    <book-list @bookSelected="setCurrBook" v-else v-bind:books="booksToShow"></book-list>
    </section>
    </main>
    </div>
    `,
    data() {
        return {
            books: [],
            filterBy: {
                searchStr: '',
                fromPrice: null,
                toPrice: null
            },
            currBook: null,

        }
    },
    computed: {
        booksToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.books;
            var filteredBooks = this.books.filter(book => {
                return book.title.toLowerCase().includes(filterBy.searchStr.toLowerCase());
            });
            filteredBooks = filteredBooks.filter(book => {
                return (filterBy.fromPrice && filterBy.toPrice) ? book.listPrice.amount > filterBy.fromPrice && book.listPrice.amount < filterBy.toPrice : true;
            })
            return filteredBooks
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setCurrBook(book) {
            this.currBook = book;
        },
        renderList() {
            console.log('rendering')
            booksService.getBooks()
                .then(books => {
                    console.log(books)
                    this.books = books
                })
        }

    },

    components: {
        bookList,
        bookFilter,
        bookDetails,
        addBook

    },
    created() {
        if (!localStorage.books || !localStorage.books.length) {
            booksService.getBooks()
                .then(books => {
                    this.books = books
                })
        } else {
            this.books = utilsService.loadFromStorage('books')
        }
    }
}