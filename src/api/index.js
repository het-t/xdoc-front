// import makeDeleteReq from "./makeDeleteReq";
import makeGetReq from "./makeGetReq";
import makePostReq from "./makePostReq";
import makePatchReq from "./makePatchReq"

export const Block = {
    get: (args) => makeGetReq('/api/blocks/', args),
    edit: (args) => makePatchReq('/api/blocks/', args),
}

export const TransactionApi = {
    save: (args) => makePostReq('/api/saveTransaction', args)
}