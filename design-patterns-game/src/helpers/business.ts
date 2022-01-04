import {IHttpResult} from "@/typings/typing";

interface IHandleResult<T> {
    total: number;
    list: T[];
}

const handleResDataForArray = <T>(resData: IHttpResult<T[]>): IHandleResult<T> => {
    return {
        total: resData.recordsTotal ?? 0,
        list: resData.data,
    };
}
export default {
    handleResDataForArray
}
