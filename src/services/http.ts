import axios from "axios"

export const baseURL = "https://planner.milliysavdo.store/api/v1/"

const http = axios.create({ baseURL })

http.interceptors.request.use(
    (conf) => {

        const token = localStorage.getItem('token')

        if (token) {
            conf.headers.Authorization = `Bearer ${token}`
        }

        return conf
    },
    (err) => Promise.reject(err)
)

export default http