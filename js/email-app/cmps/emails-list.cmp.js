import emailPreview from './email-preview.cmp.js';


export default {
    props: ['emails'],
    template: `
    <ul  class="emails-list flex column no-list ">
    <email-preview @changeIsImportance="changeEmailImp" @changeIsRead="changeEmailIsRead"  @removeCurrEmail="removeCurrentEmail"   @click.native="selectEmail(email)"  v-for="email in emails" :email="email"  :key="email.id"></email-preview>
    </ul>`,
    components: {
        emailPreview
    },
    methods: {
        selectEmail(email) {
            this.$emit('emailSelected', email)
        },
        removeCurrentEmail(emailId) {
            this.$emit('emailToRemove', emailId)
        },
        changeEmailIsRead(emailId) {
            this.$emit('emailToRead', emailId)
        },
        changeEmailImp(emailId) {
            this.$emit('emailImpChange', emailId)

        }
    }
}