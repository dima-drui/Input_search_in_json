import axios, { AxiosInstance } from 'axios';

class Api {

    private readonly api: AxiosInstance;

    constructor(baseUrl: string) {
        this.api = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    }

    public async get<T>(url: string, params?: any): Promise<T> {
        const response = await this.api.get<T>(this.api.defaults.baseURL + url, params);
        return response.data;
    }

}

export default new Api(`http://localhost:4000/`)