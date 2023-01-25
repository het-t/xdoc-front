import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './stores'

import Toaster from "@meforma/vue-toaster";

import './assets/main.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faDownload,
    faPlus,
    faTag,
    faUser, 
    faChartPie,
    faEnvelope,

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
    faComments
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

    faFileMedical,
    faGear,
    faFileArrowDown,
    faChevronUp,
    faChevronDown,
    faSquarePen,
    faTrash
);


const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toaster, {
    position: 'top-right'
})
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
