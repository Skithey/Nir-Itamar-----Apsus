import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note-img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmps.js'
import editorNav from '../cmps/editor-nav.cmp.js'
import { notesService } from '../services/notes-service.js'


export default {
    template: `
    <div class="notes-page container ">
    <h2 class="notepage-header">Sus-Notes</h2>

    <section class="note-btn-section flex justify-center">
    <button class="note-style-btn btn" @click="ChangeTypeToImg">Add pic</button>
    <button class="note-style-btn btn" @click="ChangeTypeToTxt">Add text</button>
    <button class="note-style-btn btn" @click="ChangeTypeToTodos">Add list</button>
    <label class="color-palette-btn btn ">
    <i class="fas fa-palette"></i> 
    <input type="color" v-model="bgcColor" @input="changeAddedBgc">
    </label>
    </section>
    <form v-if="type==='NoteText'" class="add-section flex column  align-center" @submit.prevent="addTextNote">
    
    <input class="note-input"  type="text" placeholder="Title" v-model="titleVal">
    <input class="note-input" type="text" placeholder="Add a note here!" v-model="txtVal">
    
    <button class="add-btn" >Add</button>
    </form >
   
    <form class="add-section flex column  align-center" v-if="type==='NoteImg'" @submit.prevent="addImgNote">
    <input class="img-input note-input" type="text" placeholder="Place img url here" v-model="imgUrl">
    <button class="add-btn">Add</button>
     
    </form>
    <form class="add-section flex column  align-center" v-if="type==='NoteTodos'">
   
    
    <br>
    #work in progress#
    
    </form>
    


   <section class="notes-container grid">
    <div  v-for=" note in notes" :key="note.id">
        <component  @newColor="changeBgcColor"  @newTitle="changeTitle" @newImgTitle="changeTitle" @NewTxt="ChangeTxt" @sendNewNotes="renderNotes" :is="note.type" class="note" :note="note" :info="note.info" ></component>
    </div>
    </section>

    </div>
    `,
    data() {
        return {
            bgcColor: '',
            type: 'NoteText',
            noteToSave: notesService.getNoteForm(),
            titleVal: '',
            txtVal: '',
            imgUrl: '',
            notes: []
        }
    },
    components: {
        notesService,
        NoteText,
        NoteImg,
        NoteTodos,
        editorNav,

    },
    created() {
        notesService.getNotes()
            .then(notes => {
                this.notes = notes
            })
    },
    methods: {
        addTextNote() {
            this.noteToSave.type = this.type
            if (this.txtVal) this.noteToSave.info.txt = this.txtVal
            console.log(this.txtVal);

            if (this.titleVal) this.noteToSave.info.title = this.titleVal
            console.log(this.titleVal);

            notesService.addNote(this.noteToSave)
                .then(notes => this.notes = notes)
            console.log(this.notes);
            this.noteToSave = notesService.getNoteForm()
            this.titleVal = ''
            this.txtVal = ''
        },

        addImgNote() {
            this.noteToSave.type = this.type
            this.noteToSave.info.url = this.imgUrl
            console.log(this.noteToSave)
            notesService.addNote(this.noteToSave)
                .then(notes => {

                    this.notes = notes
                })
            this.noteToSave = notesService.getNoteForm()
            this.imgUrl = ''

        },
        renderNotes(NewNoteList) {
            this.notes = NewNoteList
        },
        ChangeTxt(newTxt, noteId) {
            notesService.getById(noteId)
                .then(noteIdx => {
                    notesService.addTxtToNote(newTxt, noteIdx)
                    this.notes[noteIdx].info.txt = newTxt

                })

        },
        changeTitle(newTitle, noteId) {
            console.log(newTitle, 'id', noteId);

            notesService.getById(noteId)
                .then(noteIdx => {
                    notesService.addTitleToNote(newTitle, noteIdx)
                    this.notes[noteIdx].info.title = newTitle
                    console.log(this.notes[noteIdx]);
                })
        },
        changeBgcColor(newColor, noteId) {
            notesService.getById(noteId)
                .then(noteIdx => {
                    notesService.changeNoteBgc(newColor, noteIdx)
                    this.notes[noteIdx].style.backgroundColor = newColor
                })
        },
        ChangeTypeToImg() {
            this.type = 'NoteImg'

        },
        ChangeTypeToTodos() {
            this.type = 'NoteTodos'

        },
        ChangeTypeToTxt() {
            this.type = 'NoteText'
        },
        changeAddedBgc() {

            this.noteToSave.style.backgroundColor = this.bgcColor
        }

    }
}