import router from "@/router/index";
import {TYPE} from "@/constant";

const toList = (type: TYPE) => {
    if (type === TYPE.HOME) {
        router.push('/');
    } else {
        router.push({
            path: '/list',
            query: {type}
        });
    }
}
const toDetail = (type: TYPE, id: number) => {
    router.push({
        path: '/detail',
        query: {type, id}
    });
}
export {
    toList, toDetail
}
