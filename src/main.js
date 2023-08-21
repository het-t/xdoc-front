import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './stores'

import Toaster from "@meforma/vue-toaster";

import './assets/index.css'

// global methods
import openMenu from './helpers/globals/BaseMenuOpen.js'
import closeMenu from './helpers/globals/BaseMenuClose.js'
// 

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCirclePlus, faGear, faShare, faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

library.add(
    faBell,
    faUser,
    faBars,
    faCirclePlus,
    faGear,
    faStar,
    faShare,
    faAnglesRight,
    faAnglesLeft
);


const app = createApp(App)

app.config.globalProperties.openMenu = openMenu
app.config.globalProperties.closeMenu = closeMenu
app.use(router)
app.use(store)
app.use(Toaster, {
    position: 'top-right'
})
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
