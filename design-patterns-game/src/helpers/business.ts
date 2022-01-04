import {IHttpResult} from "@/typings/typing";

interface IHandleResult<T> {
    total: number;
    list: T[];
}

