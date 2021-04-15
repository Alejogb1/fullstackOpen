import axios from "axios"
const BASE_URL = "http://localhost:3001/db"


const getData = () => {
        return axios.get(BASE_URL)
}

export default {
    getData: getData
}