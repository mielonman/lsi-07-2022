import { Rates } from "./rates.interface";

export interface Columns {
    field: keyof Rates; 
    type: 'text' | 'numeric' | 'date';
    header: string;
}