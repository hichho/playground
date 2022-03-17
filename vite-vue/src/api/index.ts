import {useRequest} from "vue-request";
import {IService} from "vue-request/dist/types/core/utils/types";
import {BaseOptions} from "vue-request/dist/types/core/types";
import {RequestResult} from "vue-request/dist/types/useRequest";
import {HTTP_CODE} from "@/constant";

export interface IResult<T> {
    code: HTTP_CODE,
    data: T,
    recordsTotal?: number
}


function useApi<R, P extends unknown[] = any>(service: IService<R, P>, options?: BaseOptions<R, P>): RequestResult<R, P> {
    return useRequest(service, {
        ...options, onError: (error, params) => {
            alert(JSON.stringify(error));
            console.log(error, params);
        }
    })
}

export default useApi;
