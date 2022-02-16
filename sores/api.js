import axios from "axios";

// export const baseURL = "http://192.168.100.162:8080/api"
export const baseURL = "http://192.168.8.130:8080/api"

const api = axios.create({baseURL:`${baseURL}/api` })

export default api;