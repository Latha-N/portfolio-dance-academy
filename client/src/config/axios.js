import Axios from 'axios'
// const URL = window.location.origin.includes('localhost') ? "http://localhost:3099" : "/"

const axios=Axios.create({
    baseURL: '/'
})
export default axios