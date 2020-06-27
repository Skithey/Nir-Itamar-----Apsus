import { booksService } from "../services/book-service.js";
import starRate from '../cmps/str-rate.cmp.js';



export default {
    template: `
    <div class="review-container container">
    <form class="review-form flex column align-center" @submit.prevent="addReview">
    <h1>Book-review!!</h1>
    <input  v-model="reviewToEdit.fullName" ref="fullName"  placeholder="Reader's Name"/>
    <label>Rating: <star-rate @starSelection="setRate"/></label>
    <input v-model="reviewToEdit.readAt" type="date">
    <textarea class="text-area" placeholder="add something..." v-model="reviewToEdit.txt"></textarea>
    <button class="btn">Submit</button>
    </form>
    </div>
    `,
    // <select style=" border-radius:4px ">
    // <option>1</option>
    // <option>2</option>
    // <option>3</option>
    // <option>4</option>
    // <option>5</option>
    // </select>
    data() {
        return {
            reviewToEdit: {
                fullName: 'Books reader',
                stars: 1,
                readAt: new Date().toISOString().substring(0, 10),
                txt: ''
            }

        }
    },
    mounted() {
        this.$refs.fullName.focus();
    },
    methods: {
        setRate(stars) {
            this.reviewToEdit.stars = stars;
        },
        addReview() {
            booksService.addReview(this.bookId, this.reviewToEdit)
        }
    },
    components: {
        starRate,
    },
    computed: {
        bookId() {
            return this.$route.params.bookId
        }
    }
}