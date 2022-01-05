import {getLocale, setLocale} from "@@/plugin-locale/localeExports";
import {useIntl} from 'umi';

export const changeLanguage = () => {
    setLocale(getLocale() === 'en-US' ? 'zh-CN' : 'en-US');
}

export const fTextGather = (): any => {
    return useIntl().messages;
}






