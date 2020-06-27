export default {
    template: `
<form v-on:submit.prevent="filter" class="filter-inputs flex column align-center">
<input class="search-input" type="text" placeholder="which book?" v-model="filterBy.searchStr"/>
<input class="search-input-price"  type="number" placeholder="from price?" v-model.number="filterBy.fromPrice"  />
<input class="search-input-price"  type="number" placeholder="to price?" v-model.number="filterBy.toPrice" />
<button class="submit-btn" v-bind:disabled="isDisabled">Filter books</button>
</form>
`,
    data() {
        return {
            filterBy: {
                searchStr: '',
                fromPrice: '',
                toPrice: ''
            }
        }
    },
    computed: {
        isDisabled() {
            return (this.filterBy.searchStr ||
                this.filterBy.fromPrice && this.filterBy.toPrice) ? false : true;
        }
    },
    methods: {
        filter() {
            this.$emit('filter', {...this.filterBy })
        }
        //   filterPrice() {
        //       this.$emit('filterPrice', this.filterBy.price)
        //   }
    }
}