import axios from 'axios'
const BASE_URL = 'https://devgoodopetbackend.darkube.app/api/v1/accounts'

const defaultApi = axios.create({
    baseUrl: BASE_URL,
})
export const login = (
    phone_or_email,
    password) => {
    return defaultApi({
        method: 'post',
        url: `${BASE_URL}/login/`,
        data: {
            phone_or_email,
            password
        }
    })
        .then((res) => res)
        .catch((err) => err)
}