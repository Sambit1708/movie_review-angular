import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options
{
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Products {
    data: Product[];
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
}

export interface Product {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: true;
}

export interface PaginationParams {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    per_page: number;
}