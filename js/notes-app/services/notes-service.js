import { utilsService } from '../../utils/utils-service.js'


export const notesService = {
    getNotes,
    addNote,
    getNoteForm,
    removeNote,
    getById,
    addTxtToNote,
    addTitleToNote,
    changeNoteBgc
}


const gNotes = (() => {
    var notes = utilsService.loadFromStorage('NOTES');
    if (!notes) {
        notes = getDefNotes();
        utilsService.saveToStorage('NOTES', notes);
    }
    return notes;
})()

function getDefNotes() {

    return [{
            id: utilsService.getRandomId(),
            type: "NoteText",
            isPinned: true,
            info: {
                url: '',
                txt: "Fullstack Me Baby!",
                title: 'Oh yeah'
            },
            style: {
                backgroundColor: "#ffff"
            }
        },
        {
            id: utilsService.getRandomId(),
            type: "NoteImg",
            info: {
                url: 'https://secure.img1-ag.wfcdn.com/im/53299221/compr-r85/4307/43074449/hanging-pug-puppy-statue.jpg',
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#ffff"
            }
        },
        {
            id: utilsService.getRandomId(),
            type: "NoteTodos",
            info: {
                url: "",
                label: "How was it:",
                todos: [{
                        txt: "Do that",
                        doneAt: null
                    },
                    {
                        txt: "Do this",
                        doneAt: 187111111
                    }
                ]
            },
            style: {
                backgroundColor: "#ffff"
            }
        },

    ]
};


function getNotes() {
    if (!localStorage.NOTES || !localStorage.NOTES.length) {
        utilsService.saveToStorage('NOTES', gNotes)
        return Promise.resolve(gNotes)

    } else {
        const notes = utilsService.loadFromStorage('NOTES')

        return Promise.resolve(notes)
    }
}

function addNote(note) {
    gNotes.unshift(note)
    utilsService.saveToStorage('NOTES', gNotes)
    return Promise.resolve(gNotes)

}

function getNoteForm() {
    return {
        id: utilsService.getRandomId(),
        type: "NoteText",
        isPinned: true,
        info: {
            url: '',
            title: 'Title here',
            txt: 'Txt here'
        },
        style: {
            backgroundColor: "#ffff"
        }
    }
}

function removeNote(noteToRemove) {
    getById(noteToRemove.id)
        .then(note => {
            console.log('sabih: ', note)
            gNotes.splice(note, 1)
            utilsService.saveToStorage('NOTES', gNotes)
        })

    return gNotes
}

function getById(noteId) {
    const note = gNotes.findIndex(note => {
        // console.log(note);

        return note.id === noteId
    })

    return Promise.resolve(note)
}

function addTxtToNote(newTxt, noteIdx) {
    gNotes[noteIdx].info.txt = newTxt
    utilsService.saveToStorage('NOTES', gNotes)


}

function addTitleToNote(newTitle, noteIdx) {
    gNotes[noteIdx].info.title = newTitle
    console.log('in service', gNotes[noteIdx]);

    utilsService.saveToStorage('NOTES', gNotes)


}

function changeNoteBgc(newColor, noteIdx) {
    gNotes[noteIdx].style.backgroundColor = newColor
    utilsService.saveToStorage('NOTES', gNotes)

}