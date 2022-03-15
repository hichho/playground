import useApi, {IResult} from "@/api/index";
import {TYPE} from "@/constant";

interface IBannerResult {
    id: number,
    pic: string | undefined
}

interface INewsItem {
    id: number,
    name: string,
    createTime: string
}

interface IFoot {
    data: string;
}

const useBannerApi = () => {
    return useApi<IResult<IBannerResult[]>>('/app/banner/list');
}

const useNewsItemApi = (type: TYPE.NEWS | TYPE.NOTICE | TYPE.MEETING | TYPE.FILE) => {
    let typeValue: 2 | 3 | 4 | 5 = 2;
    switch (type) {
        case TYPE.NEWS:
            typeValue = 2;
            break;
        case TYPE.NOTICE:
            typeValue = 3;
            break;
        case TYPE.MEETING:
            typeValue = 4;
            break;
        case TYPE.FILE:
            typeValue = 5;
            break;
        default:
            break;
    }
    return useApi<IResult<INewsItem[]>>({url: '/app/info/list?type=' + typeValue + '&start=0&pageNo=1&length=5'});
}
const useFootApi = () => {
    return useApi<IResult<IFoot>>('/app/index_bottom_txt');
}

export {
    useBannerApi, useNewsItemApi, useFootApi
}
