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
