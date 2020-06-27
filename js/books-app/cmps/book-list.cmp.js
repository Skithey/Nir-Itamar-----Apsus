import bookPreview from './book-preview.cmp.js'


export default {
    props: ['books'],
    template: `
    <ul  class="book-list grid  ">
    <book-preview @click.native="selectBook(book)"  v-for="book in books" :book="book" :currencyCode="book.listPrice.currencyCode" :key="book.id"></book-preview>
    </ul>`,
    methods: {
        selectBook(book) {
            this.$emit('bookSelected', book);
        }
    },
    components: {
        bookPreview
    }
}