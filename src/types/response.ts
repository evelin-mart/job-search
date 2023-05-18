import { Vacancy } from "./vacancy";

export interface ResponseType {
    objects: Vacancy[];
    total: number;
}
