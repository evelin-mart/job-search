import axios, { AxiosInstance } from 'axios';

export interface RequestOpt {
    [x: string]: string | number;
}

export interface AuthAnswer {
    access_token: string;
    refresh_token: string;
    ttl: number;
}

export class Loader {
    private baseUrl = 'https://api.superjob.ru/2.0/';
    private authOptions = {
        login: 'sergei.stralenia@gmail.com',
        password: 'paralect123',
    };
    private clientOptions = {
        client_id: 2356,
        client_secret:
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    };
    private accessToken = {
        access_token: '',
        refresh_token: '',
        ttl: 0,
    };
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({ baseURL: this.baseUrl });
    }

    private makeUrl(endpoint: string, options: RequestOpt) {
        let url = `${endpoint}?`;
        Object.keys(options).forEach((key) => {
            url = `${url}${key}=${options[key]}&`;
        });

        return url.slice(0, -1);
    }

    private async getAuthData(url: string) {
        const authData = await this.instance.get<AuthAnswer>(url);
        if (authData.status === 200) {
            this.accessToken = authData.data;
        } else {
            throw new Error(authData.statusText);
        }
    }

    public async init() {
        this.getAuthData(
            this.makeUrl('oauth2/password', { ...this.authOptions, ...this.clientOptions }),
        );
    }

    public async getVacancies(options: RequestOpt) {
        if (this.accessToken.ttl <= Date.now()) {
            this.getAuthData(
                this.makeUrl('oauth2/refresh_token', {
                    refresh_token: this.accessToken.refresh_token,
                    ...this.clientOptions,
                }),
            );
        }

        const vacancies = await this.instance.get(this.makeUrl('vacancies', options));
        if (vacancies.status === 200) {
            return vacancies.data;
        } else {
            throw new Error(vacancies.statusText);
        }
    }
}
