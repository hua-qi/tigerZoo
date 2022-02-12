import axios from 'axios'

export default function request(config: any) {
    const instance = axios.create({
        baseURL: 'http://httpbin.org/',
    })

    instance.interceptors.request.use(
        config => {
            return config
        },
        err => {
            console.log(err)
        },
    )

    instance.interceptors.response.use(
        res => {
            return res.data
        },
        err => {
            console.log(err)
        },
    )

    return instance(config)
}
