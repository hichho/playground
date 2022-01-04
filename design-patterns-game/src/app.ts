import {RequestConfig} from 'umi';
import HttpHandler from "@/helpers/httpHandler";


export const request: RequestConfig = {
    timeout: 10000,
    middlewares: [],
    requestInterceptors: [],
    responseInterceptors: [],
    errorConfig: {
        adaptor: (resData) => {
            //在该项目中不需要
            HttpHandler.handleHttpResult(resData);
            return {
                ...resData,
                success: resData.ok,
                errorMessage: resData.message,
            };
        },
    },
};
