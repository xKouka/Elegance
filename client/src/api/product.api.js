import axios from 'axios'

const urlApi = "http://localhost:3000/api/"

const productApi = axios.create({
    baseURL:urlApi
})
 export default productApi;