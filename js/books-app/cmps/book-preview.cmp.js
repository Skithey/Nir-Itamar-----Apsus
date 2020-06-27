export default {
    props: ['book', 'currencyCode'],
    template: ` 
    <router-link class="book-preview" :to='"/book/" + book.id' >
    <li class=" flex column space-between align-center">
    <span class="book-title">{{book.title}}</span>
    <img style="height:180px" class="book-img" :src="book.thumbnail">
    <span class="book-price">Price: {{book.listPrice.amount}} {{currencyToIcon}}</span>
    </li>
    </router-link>
    
    `,
    computed: {
        currencyToIcon() {
            switch (this.currencyCode) {
                case 'EUR':
                    return `€`;
                case 'USD':
                    return '$';
                case 'ILS':
                    return '₪'
            }
        }
    }
}