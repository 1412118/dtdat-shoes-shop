import axios from "axios"

export const getCollections = () => {
    return axios.get('/cats').then(res => res.data);
}