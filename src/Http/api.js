import axios from 'axios'

export const Http = axios.create({
    /*global process*/
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers:{
        'Content-Type': 'application/json'
    }    

})