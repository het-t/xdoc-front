import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './stores'

import Toaster from "@meforma/vue-toaster";

import './assets/main.css'

// global methods
import openMenu from './helpers/globals/BaseMenuOpen.js'
import closeMenu from './helpers/globals/BaseMenuClose.js'
// 

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faDownload,
    faPlus,
    faTag,
    faUser, 
    faChartPie,
    faEnvelope,
    faBars,
    faAnglesLeft,
    faPencil,
    faUniversalAccess,

    faFileMedical, 
    faGear, 
    faFileArrowDown,
    faChevronDown,
    faChevronUp,
    faSquarePen,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
    faIdBadge,
    faComments,
    faPenToSquare,
    faTrashCan,
    faEye,
    faEyeSlash
} from "@fortawesome/free-regular-svg-icons"

library.add(
    faDownload,
    faPlus,
    faTag,
    faUser,
    faIdBadge,
    faChartPie,
    faEnvelope,
    faComments,
    faBars,
    faAnglesLeft,
    faTrashCan,
    faPenToSquare,
    faPencil,
    faEye,
    faEyeSlash,
    faUniversalAccess,

    
    faFileMedical,
    faGear,
    faFileArrowDown,
    faChevronUp,
    faChevronDown,
    faSquarePen,
    faTrash,
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
