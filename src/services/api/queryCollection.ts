import axios from "axios"

export const queryCollection = async function(
    collectionView: {
        id: String,
        spaceId: String
    },
    loader: {
        reducers: Object,
        searchQuery: String,
        sort: Array<any>,
        userId: String,
        userTimeZone: String,
    },
    source: {
        type: String,
        id: String,
        spaceId: String
    }
) {
    try {
        return await axios.post("/api/v1/queryCollection", {
            collectionView,
            loader,
            source
        });
    }
    catch (error: any) {
        throw new Error(error);
    }
}