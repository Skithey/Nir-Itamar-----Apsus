export default {
    template: `
    <header class="header-container">
    <nav class="app-header flex space-between align-center container">
   <div class="head-full-logo flex align-center">
   <img class="header-logo" src="/img/horse.png" alt=""> 
   <router-link   to="/"> 
   <a @click="makeBgiVisible" class="main-appsus-logo">Appsus</a>
   </router-link> 
   
   
   </div>
   <div>
   <button  @click="toggleMenu"  class="hamburger-btn">☰</button>
   </div>
    <div class="routs-container flex space-between">
    <router-link @click.native="toggleMenu() " class="nav-btn underline no-list router-a" to="/email"> Email </router-link> 
    <router-link @click.native="toggleMenu()" class="nav-btn underline no-list router-a" to="/notes"> Notes </router-link> 
    <router-link @click.native="toggleMenu()" class="nav-btn underline no-list router-a" to="/books"> Books </router-link>
    </div>
    </nav>
   </header>`,
    //    :class="{menuopen:isMenuOpen}"
    data() {
        return {
            isMenuOpen: false,
            elHam: '☰'
        }
    },
    methods: {
        makeBgiNone() {
            this.$emit('makeBgiDisapper')
        },
        makeBgiVisible() {
            this.$emit('makeBgiVisible')
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
            document.body.classList.toggle('menuopen')
        }
    }
};