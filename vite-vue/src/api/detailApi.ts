import useApi, {IResult} from "@/api/index";
import {useRoute} from "vue-router";

interface IDetail {
    content: {
        content: any
    }
}

const useDetailApi = () => {
    return useApi<IResult<IDetail>>({url: '/app/info/detail?id=' + useRoute().query.id});
}
export {
    useDetailApi
}
