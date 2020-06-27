export default {
    props: ['txt'],
    template: `
    <div class= "read-more">
    <span>Description: {{txtToShow}}</span>
    <span class="toggle-read" v-on:click="isShowMore = !isShowMore">{{this.showMore}}</span>
     </div>
     `,

    data() {
        return {
            isShowMore: false,
            showMore: ''
        }
    },
    computed: {
        txtToShow() {
            // console.log(this.isShowMore);
            if (this.isShowMore) {
                this.showMore = 'Show less'
                return this.txt

            } else {
                this.showMore = 'Show more'
                return this.txt.substring(0, 10) + '...';
            }
        }
    }


}