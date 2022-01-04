import qs from 'qs';
import {history} from 'umi';

interface IParams {
    menuId: string;
    subMenuId?: string | undefined;
}

export const routerPush = (path: string, params?: object) => {
    if (params) {
        path = path + '?' + qs.stringify(params);
    }
    history.push(path);
};

export const routerBack = (): void => {
    history.goBack();
};

const goIndex = (): void => {
    routerPush('/');
}


export default {
    goIndex
}


