import { myRouter } from './routes.js';
import appHeader from './email-app/cmps/app-header.cmp.js';
import appFooter from './email-app/cmps/app-footer.cmp.js';

new Vue({
    el: '#app',
    router: myRouter,
    template: `
    <div>
    <app-header @makeBgiVisible="makeBgiVisible" @makeBgiDisapper="makeImgDisapper"></app-header>
    <router-view/>
    <div class="bgc-img" :class={visible:isVisible}></div>
    <div>
    <app-footer/>
    </div>
    </div>
    `,
    data() {
        return {
            isVisible: false
        }
    },
    components: {
        appHeader,
        appFooter
    },
    methods: {
        makeImgDisapper() {
            this.isVisible = true
        },
        makeBgiVisible() {
            this.isVisible = false
        }
    }
})