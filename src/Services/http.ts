import axios, { AxiosRequestConfig as _AxiosRequestConfig, Method } from 'axios'
import qs from 'qs'
import { message } from 'antd'

import { userInfo } from '@store/AuthStore/syncUserInfo'

export interface AxiosRequestConfig extends _AxiosRequestConfig {
    startTime?: Date
}

export interface HttpRequest {
    get?(url: string, data: object, baseUrl?: string): Promise<any>
    post?(url: string, data: object, baseUrl?: string): Promise<any>
    delete?(url: string, data: object, baseUrl?: string): Promise<any>
    put?(url: string, data: object, baseUrl?: string): Promise<any>
}

enum HTTP_ERROR {
    LOGIC_ERROR,
    TIMEOUT_ERROR,
    NETWORK_ERROR
}

const TOKEN_ERROR = [401, 402, 403]

const DEFAULT_CONFIG = {
    baseURL: process.env.BASEURL
}



const http: HttpRequest = {}
const methods: Method[] = ['get', 'post', 'put', 'delete']

let authTimer: NodeJS.Timer = null

const isSuccess = res => res.errCode === 0
const resFormat = res => res.response || res.data || {}

methods.forEach(v => {
    http[v] = (url: string, data: object, baseUrl?: string) => {
        const axiosConfig: AxiosRequestConfig = {
            method: v,
            url,
            baseURL: baseUrl || DEFAULT_CONFIG.baseURL,
            headers: { Authorization: `Bearer ${userInfo.token}` }
        }
        const instance = axios.create(DEFAULT_CONFIG)

        // Add a request interceptor
        instance.interceptors.request.use(
            cfg => {
                cfg.params = { ...cfg.params, ts: Date.now() / 1000 }
                return cfg
            },
            error => Promise.reject(error)
        )
        // Add a response interceptor
        instance.interceptors.response.use(
            response => {
                const rdata =
                    typeof response.data === 'object' && !isNaN(response.data.length) ? response.data[0] : response.data
                if (!isSuccess(rdata)) {
                    return Promise.reject({
                        msg: rdata.msg,
                        errCode: rdata.errCode,
                        type: HTTP_ERROR[HTTP_ERROR.LOGIC_ERROR],
                        config: response.config
                    })
                }
                return resFormat(rdata)
            },
            error => {
                if (TOKEN_ERROR.includes(error.response.status)) {
                    message.destroy()
                    message.error('Authentication failure, Please relogin!')
                    clearTimeout(authTimer)
                    authTimer = setTimeout(() => {
                        location.replace('/#/login')
                    }, 300)
                    return
                }
                return Promise.reject({
                    msg: error.response.statusText || error.message || 'network error',
                    type: /^timeout of/.test(error.message)
                        ? HTTP_ERROR[HTTP_ERROR.TIMEOUT_ERROR]
                        : HTTP_ERROR[HTTP_ERROR.NETWORK_ERROR],
                    config: error.config
                })
            }
        )
        if (v === 'get') {
            axiosConfig.params = data
        } else if (data instanceof FormData) {
            axiosConfig.data = data
        } else {
            axiosConfig.data = qs.stringify(data)
        }
        axiosConfig.startTime = new Date()
        return instance
            .request(axiosConfig)
            .then(res => res)
            .catch(err => {
                message.destroy()
                message.error(err.response || err.msg || err.stack || 'unknown error')
                return Promise.reject(
                    axiosConfig.url.includes('autoScript.set') ? { err } : { err, stack: err.msg || err.stack || '' }
                )
            })
    }
})

export default http
