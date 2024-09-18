import axios, {AxiosInstance, CancelTokenStatic } from 'axios';

class AxiosService {
    axiosInstance: AxiosInstance;
    cancelTokenStatic: CancelTokenStatic;
    
    constructor(){
        this.axiosInstance = axios.create({
            headers: {
                Accept: 'applications/json',
                'Content-Type': 'applications/json',
            },
            baseURL: `http://localhost:4000/`
        })
        this.cancelTokenStatic = axios.CancelToken;
    }

    public setBaseURL(url: string): void {
        this.axiosInstance.defaults.baseURL = url;
    }
    
}