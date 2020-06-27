import { emailsService } from '../services/email-service.js'
// import deleteEmail from '../cmps/delete-email.cmp.js'

export default {
    // props: ['email'],
    template: `
    <section class="email-btns flex space-between">
    <button  @click="onRead" class="email-btn btn">
    <i title="Read/Unread" class="far fa-bookmark" :class="{btncolor:isReadBtn}"></i>
    </button>
    <button title="Delete email"  @click="deleteEmail" class="delete-btn email-btn btn">
    <i class="far fa-trash-alt"></i></button>
    </section>
    `,
    data() {
        return {
            isReadBtn: false
        }
    },
    methods: {
        deleteEmail() {
            this.$emit('deleteEmail')
        },
        onRead() {
            this.isReadBtn = !this.isReadBtn
            this.$emit('isReadEmail')
        }
    },



}