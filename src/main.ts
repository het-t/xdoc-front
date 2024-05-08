import { createApp } from "vue";

import App from "./ui/App.vue";
import router from "./ui/router";

import "./assets/index.css";

// global methods
import openMenu from "./helpers/globals/BaseMenuOpen";
import closeMenu from "./helpers/globals/BaseMenuClose";
//

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCirclePlus,
  faGear,
  faShare,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { createPinia } from "pinia";

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

const pinia = createPinia();

const app = createApp(App);

app.config.globalProperties.openMenu = openMenu;
app.config.globalProperties.closeMenu = closeMenu;

app.use(pinia);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
