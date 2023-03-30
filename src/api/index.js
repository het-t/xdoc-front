import makeDeleteReq from "./makeDeleteReq";
import makeGetReq from "./makeGetReq";
import makePostReq from "./makePostReq";

export const fields = {
    get: (args) => makeGetReq('/api/fields/', args),
    getTypes: () => makeGetReq('/api/fields/types'),
    create: (args) => makePostReq('/api/fields/', args),
    delete: (args) => makeDeleteReq('/api/fields/', args),
}

export const records = {
    get: (args) => makeGetReq('/api/records/', args),
    getIndividual: (args) => makeGetReq('/api/records/individual', args),
    getBases: (args) => makeGetReq('/api/records/bases', args),
    create: (args) => makePostReq('/api/records/', args),
    delete: (args) => makeDeleteReq('/api/records/', args)
}

export const users = {
    get: (args) => makeGetReq('/api/users/', args),
    create: (args) => makePostReq('/api/users/', args),
    delete: (args) => makeDeleteReq('/api/users/', args)
}

export const Block = {
    get: (args) => makeGetReq('/api/blocks/', args),
}