import axios from 'axios'

export default axios.create({
    baseURL: import.meta.env.VITE_FASTEN_API_URL,
})
