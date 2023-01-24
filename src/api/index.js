import makeDeleteReq from "./makeDeleteReq";
import makeGetReq from "./makeGetReq";
import makePostReq from "./makePostReq";

export const fields = {
    get: (args) => makeGetReq('/api/fields/', args),
    create: (args) => makePostReq('/api/fields/', args),
    delete: (args) => makeDeleteReq('/api/fields/', args),
}

export const records = {
    get: (args) => makeGetReq('/api/records/', args),
    getBases: (args) => makeGetReq('/api/records/bases', args),
    create: (args) => makePostReq('/api/records/', args),
    delete: (args) => makeDeleteReq('/api/records/', args)
}

export const users = {
    get: (args) => makeGetReq('/api/users/', args),
    create: (args) => makePostReq('/api/users/', args),
    delete: (args) => makeDeleteReq('/api/users/', args)
}