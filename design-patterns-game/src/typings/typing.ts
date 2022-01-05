import {ReactNode} from "react";

export interface IHttpResult<T> {
    code: number;
    message: string;
    data: T;
    recordsTotal?: number;
}

export interface IProps {
    children: ReactNode;
}

export enum ES_VERSION {
    ES6,
    PRE
}

export interface INavigationItem {
    name: string;
    id: number;
    path: string;
}
