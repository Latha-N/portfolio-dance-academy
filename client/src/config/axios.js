import Axios from 'axios'
const URL = window.location.origin.includes('localhost') ? "http://localhost:3099/api" : "/"

const axios=Axios.create({
    baseURL: URL
})
export default axios