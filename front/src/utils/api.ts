import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ReqMap } from './types';


class Api {
    private readonly api: AxiosInstance;
    private pendingRequests: ReqMap = {}

    constructor(baseUrl: string) {
        this.api = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            timeout: 10000,
        });

        this.api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            if (config?.url) {
                this.removePendingRequest(config.url);
                const controller = new AbortController();
                config.signal = controller.signal; 
                this.pendingRequests[config.url] = controller;
            }
            return config;
        });

        axios.interceptors.response.use(
            (response: AxiosResponse) => {
                this.removePendingRequest(response.request.responseURL);
                return response;
            },
            (error: AxiosError) => {
                this.removePendingRequest(error.config?.url);
                return error.message;
            }
        );
    }

    public async get<T>(url: string, params?: any): Promise<T> {
        const response = await this.api.get<T>(this.api.defaults.baseURL + url, params)
        return response.data;
    }

    private removePendingRequest = (url: string | undefined): void => {
        if (url && this.pendingRequests[url]) {
            this.pendingRequests[url].abort();
            delete this.pendingRequests[url];
        }
    };

}

export default new Api(`http://localhost:4000/`)