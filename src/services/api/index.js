// import makeDeleteReq from "./makeDeleteReq";
import makeGetReq from "./makeGetReq";
import makePostReq from "./makePostReq";
import makePatchReq from "./makePatchReq"

export const Block = {
    get: (args) => makeGetReq('/api/blocks/', args),
    edit: (args) => makePatchReq('/api/blocks/', args),
}

export const TransactionApi = {
    save: async function (args) {
        try {
            const res = makePostReq('/api/saveTransaction', args);
            console.log(res);
        } catch (error) {
            throw new Error(error);
        }
    }
}