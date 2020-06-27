import { emailsService } from '../services/email-service.js'
import emailBtns from './email-btns.cmp.js'

export default {
    props: ['email'],
    template: `
    
    <div  class="email-row flex space-between align-center">
    <i title="Change importance" @click="changeImportance" :class="{importance:isImportant}" class="far fa-star"></i>   
    <router-link :to='"/email/" + email.id'> 
    
    <li  v-bind:class="{ read: email.isRead }">
    <section class="email-subject flex space-between" > 
         <span class="msg-from" style="font-size:18px"> {{email.from}}  </span>
   
        <span class="msg-info ">
        <span class="email-subject-info" style="font-size:18px">  {{email.subject}} </span>
        <span class="email-desc-preview" style="color:gray"> - {{email.desc.substring(0,30)}}</span>
        </span>
        <span class="time-sent">{{email.sentAt}}</span> 
    
    </section>
    </li>    
    </router-link>
    <email-btns @isReadEmail="isEmailRead" @deleteEmail="removeEmail(email.id)"></email-btns>
    </div>
    `,
    // :class="(starNum) <= selectedStar ? classNames.marked : classNames.unmarked"
    data() {
        return {
            isImportant: this.email.isImportant
        }
    },


    methods: {
        removeEmail(emailId) {
            this.$emit('removeCurrEmail', emailId)
        },
        isEmailRead() {
            this.$emit('changeIsRead', this.email.id)
                // console.log(this.email.isRead);
        },
        changeImportance() {
            this.isImportant = !this.email.isImportant
            this.$emit("changeIsImportance", this.email.id);
        }
    },
    computed: {
        emailsToShow() {
            return this.emails
        }
    },
    components: {
        emailBtns
    }


}