import router from "@/router/index";
import {TYPE} from "@/constant";

const goList = (type: TYPE) => {
    if (type === TYPE.HOME) {
        router.push('/');
    } else {
        router.push({
            path: '/list',
            query: {type}
        });
    }
}
export {
    goList
}
