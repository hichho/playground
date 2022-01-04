import {IHttpResult} from "@/typings/typing";
import {message} from "antd";

const handleHttpResult = (httpResult: IHttpResult<never>) => {
    if (httpResult.code !== 200) {
        message.error(httpResult.message);
    }
}
export default {
    handleHttpResult
}
