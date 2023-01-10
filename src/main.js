import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import bootstrap */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHome, faPerson, faUsers, faMobileScreenButton, faGear, faAnglesRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faPerson, faHome, faMobileScreenButton, faGear, faUsers, faAnglesRight, faRightFromBracket)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')