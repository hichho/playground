import {RequestConfig} from 'umi';

/**
 * 为项目配置token
 */

export const request: RequestConfig = {
    timeout: 10000,
    errorConfig: {
        adaptor: (resData) => {
            return {
                ...resData,
                success: resData.ok,
                errorMessage: resData.message,
            };
        },
    },
};
