import homePage from './main-homePage.js'
import emailApp from './email-app/Pages/email-app.js'
import notesApp from './notes-app/Pages/notes-app.js'
import emailDetails from './email-app/Pages/email.details.cmp.js'
import bookDetails from './books-app/Pages/book-details.cmp.js';
import bookReview from './books-app/Pages/book-review.cmp.js';
import booksList from './books-app/Pages/book-app.cmp.js'

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/notes',
        component: notesApp
    },
    {
        path: '/email/:emailId',
        component: emailDetails
    },
    {
        path: '/books',
        component: booksList
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    }, {
        path: '/book/review/:bookId',
        component: bookReview
    }
]
export const myRouter = new VueRouter({ routes: myRoutes })