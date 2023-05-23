import axios, { AxiosError, AxiosInstance } from 'axios';
import { VacancyFull } from '../types';

interface RequestOpt {
    [x: string]: string | number;
}

interface AuthAnswer {
    access_token: string;
    refresh_token: string;
    ttl: number;
}

interface ResponseType {
    objects: VacancyFull[];
}

interface ErrorData {
    error: {
        code: number;
        message: string;
    };
}

export class Loader {
    private baseUrl = 'https://startup-summer-2023-proxy.onrender.com/2.0/';
    private authOptions = {
        login: 'sergei.stralenia@gmail.com',
        password: 'paralect123',
    };
    private clientOptions = {
        client_id: 2356,
        client_secret:
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    };
    private secret_key = 'GEU4nvd3rej*jeh.eqp';
    private accessToken = {
        access_token: '',
        refresh_token: '',
        ttl: 0,
    };
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'x-secret-key': this.secret_key,
            },
        });
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
        this.accessToken = authData.data;
    }

    private async auth() {
        await this.getAuthData(
            this.makeUrl('oauth2/password', { ...this.authOptions, ...this.clientOptions }),
        );
    }

    private async refresh() {
        await this.getAuthData(
            this.makeUrl('oauth2/refresh_token', {
                refresh_token: this.accessToken.refresh_token,
                ...this.clientOptions,
            }),
        );
    }

    public async getVacancies(options: RequestOpt): Promise<VacancyFull[]> {
        try {
            if (!this.accessToken.access_token) {
                await this.auth();
            }

            const response = await this.instance.get<ResponseType>(
                this.makeUrl('vacancies', options),
                {
                    headers: {
                        'X-Api-App-Id': this.clientOptions.client_secret,
                    },
                },
            );
            return response.data.objects;
        } catch (e: unknown) {
            if (e instanceof AxiosError) {
                const data = e.response?.data as ErrorData;
                if (data.error.code === 410) {
                    await this.refresh();
                    return await this.getVacancies(options);
                } else {
                    throw new Error(e.response?.data.error.message);
                }
            } else {
                throw new Error((e as Error).message);
            }
        }
    }
}
