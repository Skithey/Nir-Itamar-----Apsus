import bookDesc from '../cmps/book-desc.cmp.js'
import bookReview from './book-review.cmp.js'
import { booksService } from '../services/book-service.js'
// import { booksService } from '../../../img/books-imgs-gifs/sale.webp'


export default {
    template: `
    <section class="book-container container " v-if="book" >
    <router-link to="/books">
    <button  class="X-btn" @click="close">X</button>
    </router-link> 

    <div>
    <ul class="book-details">
    <li class="book-details-title">
    {{book.title}}
    </li>
    <li class="etc-detail">
    Page count: {{book.pageCount}}
    </li>
    <li class="etc-detail">
    Publish date: {{book.publishedDate}} - {{publishedDate}}
    </li>
    <li class="etc-detail" v-bind:class="{red: isExpensive , green: isCheap }">
    {{bookPrice}}
    </li>
    <li>
    <img :src="book.thumbnail">
    </li>
    <li class="desc-detail">
    <book-desc :txt="book.description"></book-desc>
    </li>
    

    <li class="book-review btn">
    <router-link :to="'review/' + book.id">Review</router-link>
    </li>
    
    
    <li class="reviews-container" v-if="(book.reviews)">

        <ul  v-for=" review in book.reviews">
 
            <li class="review-on-screen flex space-between">
             <span class="rev-comp reviewer-name">{{review.fullName}}:</span> 
                <span class="rev-comp review-text">{{review.txt}}</span> 
                 <span class="rev-comp reading-time">{{review.readAt}}</span>
        </li>
    </ul> 
</li> 
 
    <li class="sale-detail">
    <img v-bind:src="onSale">
    </li>
    
    </ul>
    
    </div>
    </section>
    `,
    // <router-link :to='book/book-review/'>Review</router-link> 


    data() {
        return {
            book: null,
            isExpensive: false,
            isCheap: false,
            isOnSale: false

        }
    },
    methods: {
        close() {
            this.$emit('close', null);
        },
    },
    computed: {
        pageCount() {
            if (this.book.pageCount > 500) return `${this.book.pageCount} pages , long reading`;
            else if (this.book.pageCount > 200 && this.book.pageCount < 500) return `${this.book.pageCount} pages , decent reading`;
            else if (this.book.pageCount < 100) return `${this.book.pageCount}  pages , light reading`;
        },
        publishedDate() {
            var currYear = new Date().getFullYear();
            var bookPublishYear = this.book.publishedDate
            var difference = currYear - bookPublishYear;
            if (difference > 10) return `This book is a veteran book!!`
            if (difference < 10 && difference > 1) return `This book is like new!`
            if (difference < 1) return `This is a new book!`
        },
        bookPrice() {
            if (this.book.listPrice.amount > 150) {
                this.isExpensive = true
                console.log(this.book);

                return `Price: ${this.book.listPrice.amount} ${this.book.listPrice.currencyCode}`
            } else if (this.book.listPrice.amount < 20) {
                this.isCheap = true
                return `Price: ${this.book.listPrice.amount} ${this.book.listPrice.currencyCode}`

            } else if (this.book.listPrice.amount < 150 || this.book.listPrice.amount > 20) {
                this.isCheap = false
                this.isExpensive = false
                return `Price: ${this.book.listPrice.amount} ${this.book.listPrice.currencyCode}`
            }

        },
        onSale() {
            // var elImg = document.querySelector('.sale-detail');
            if (this.book.listPrice.isOnSale) return "../../../img/books-imgs-gifs/sale.webp"
        },
    },
    components: {
        bookDesc,
        bookReview
    },
    created() {
        console.log(this.$route.params);
        const { bookId } = this.$route.params;
        booksService.getById(bookId)
            .then(book => {
                console.log(book);
                this.book = book;
                console.log(this.book);
            })

        console.log('CMP CarDetails Created', bookId);
    }
}