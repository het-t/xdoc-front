import { createStore } from "vuex";

import fields from './modules/fields.js'
import users from './modules/users.js'
import records from "./modules/records.js"

export default createStore({
    modules: {
        fields,
        users,
        records
    }
})