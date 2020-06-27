import editorNav from './editor-nav.cmp.js'



export default {

    template: `
    
    <div class="note-img" v-bind:style="note.style">
     <textArea  v-bind:style="note.style" class="header-area flex column " ref="titleObj" :value="titleValue" @input="saveTitle" >{{info.title}} </textArea>

    <img v-bind:src="info.url" >
    <editor-nav @getColor="changeBgcColor" :note="note"></editor-nav>
    </div>`,
    props: ['info', 'note'],
    data() {
        return {
            titleValue: '',
            bgc: ''
        }
    },
    components: {
        editorNav
    },
    methods: {

        changeBgcColor(newColor) {
            this.note.style.backgroundColor = newColor
            this.$emit('newColor', newColor, this.note.id)

        },
        saveTitle() {
            let value = this.$refs.titleObj.value;


            this.$emit('newImgTitle', value, this.note.id)
        },
    }


}