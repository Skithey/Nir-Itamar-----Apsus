import { emailsService } from '../services/email-service.js'

export default {
    template: `
    <section class="email-filter flex column" >
    <button class=" flex space-between  stared-btn"> 
                <span> Starred</span>
                <span>
                <i class="far fa-star" :class="{importance:filterBy.byIsImportance}"></i>
                </span>
                <input class="importance-checkbox"  type="checkbox" v-model="filterBy.byIsImportance" @change="filter">
                </button>
    <input type="text" placeholder="Filter by text" v-model="filterBy.byTxt" @input="filter"/>
    <select class="select-filter" v-model="filterBy.byIsRead" @change="filter">
    <option value="all">All</option>
    <option value="read">Read</option>
    <option value="unread">Unread</option>
    </select>
    <button class="clear-btn btn" @click="clearFilters"> Clear </button>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byTxt: null,
                byIsRead: 'all',
                byIsImportance: false
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy);
        },
        clearFilters() {
            this.filterBy = {
                byTxt: '',
                byIsRead: '',
                byIsImportance: false

            };
            this.$emit('filter', this.filterBy);
        }

    },
}