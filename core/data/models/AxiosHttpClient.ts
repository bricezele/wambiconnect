import axios, {AxiosInstance, AxiosRequestConfig, ResponseType} from 'axios'
import {HttpHeaders, IHttpClient} from '../../domain/models/IHttpClient'

export class AxiosHttpClient implements IHttpClient {
    private httpInstance: AxiosInstance
    baseUrl: string

    constructor(baseURL: string) {
        const config: AxiosRequestConfig = {
            baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.baseUrl = baseURL
        this.httpInstance = axios.create(config)
    }

    async post<R>(url: string, body: object, headers?: HttpHeaders, responseType?: ResponseType): Promise<R> {
        const response = await this.httpInstance.post(url, body, {headers: headers, responseType})
        return response.data as R
    }

    async put<R>(url: string, body: object, headers?: HttpHeaders): Promise<R> {
        const response = await this.httpInstance.put(url, body, {headers: headers})
        return response.data as R
    }

    async get<R>(url: string, headers?: HttpHeaders): Promise<R> {
        const response = await this.httpInstance.get(url, {headers: headers})
        return response.data as R
    }

    async delete<R>(url: string, headers?: HttpHeaders): Promise<R> {
        const response = await this.httpInstance.delete(url, {headers: headers})
        return response.data as R
    }
}
