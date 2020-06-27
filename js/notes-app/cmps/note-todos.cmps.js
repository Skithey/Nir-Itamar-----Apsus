import editorNav from './editor-nav.cmp.js'
export default {

    // <textArea  v-bind:style="note.style" class="header-area flex column " ref="titleObj" :value="titleValue" @input="saveTitle" >{{info.txt}} </textArea>
    template: `
    
    <div class="note-todods" v-bind:style="note.style">
    <ul>
    <li v-for=" todo in info.todos">

    <p>{{todo.txt}}</p>

    </li>
    </ul>
    <editor-nav @getColor="changeBgcColor" :note="note"></editor-nav>

    </div>`,
    props: ['info', 'note'],
    components: {
        editorNav
    },
    methods: {
        changeBgcColor(newColor) {
            this.note.style.backgroundColor = newColor
            this.$emit('newColor', newColor, this.note.id)

        }
    }
}