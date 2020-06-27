// import emailPreview from './email-preview.cmp.js';
import { emailsService } from '../services/email-service.js';



export default {
    template: `
    <div class="add-email-container flex">
    <form class="email-modal flex column" @submit="saveEmail">
   
    <header class="new-mail-header flex space-between">
    <h3>New Email</h3> 
    <button>X</button>
    </header>
   
    <input v-model="from" type="text" placeholder="Your mail?" >
    <input v-model="emailToSend" type="text" placeholder="Send-to@email.com">
    <input v-model="emailSubject" type="text" placeholder="Subject" >
    <textarea v-model="emailDesc" placeholder="Your text.." ></textarea>
    <button class="submit-btn">Send</button>
    </form>
    </div>`,
    data() {
        return {
            isVisible: true,
            from: '',
            emailToSend: '',
            emailSubject: '',
            emailDesc: ''
        }
    },
    methods: {
        saveEmail() {
            this.$emit('sendEmail', this.emailToSend, this.emailSubject, this.emailDesc, this.from)
            this.emailSubject = ''
            this.emailToSend = ''
            this.emailDesc = ''
        },

    }

}