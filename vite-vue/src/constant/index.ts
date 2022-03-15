export enum TYPE {
    HOME,
    INFO,
    NEWS,
    NOTICE,
    MEETING,
    FILE
}

export enum TYPE_NAME {
    HOME = '首页',
    INFO = '信息公开',
    NEWS = '工作动态',
    NOTICE = '通知公告',
    MEETING = '会议资料',
    FILE = '政策文件',
}

export interface INavigationItem {
    key: TYPE,
    name: TYPE_NAME
}

export const Navigation: INavigationItem[] = [
    { key: TYPE.HOME, name: TYPE_NAME.HOME },
    { key: TYPE.INFO, name: TYPE_NAME.INFO },
    { key: TYPE.NEWS, name: TYPE_NAME.NEWS },
    { key: TYPE.NOTICE, name: TYPE_NAME.NOTICE },
    { key: TYPE.MEETING, name: TYPE_NAME.MEETING },
    { key: TYPE.FILE, name: TYPE_NAME.FILE }
];
export enum HTTP_CODE {
    SUCCESS = 200,
    NOT_FOUND = 404,
    ERROR = 500
}
