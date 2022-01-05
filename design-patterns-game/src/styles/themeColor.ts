import lightLess from './light.less';
import {THEME_MODE} from "@/typings/themeTyping";


export const themeStyle = (themeMode: THEME_MODE = THEME_MODE.LIGHT) => {
    console.log(themeMode,THEME_MODE)
    switch (themeMode) {
        case THEME_MODE.DARK:
            return DarkMode;
        case THEME_MODE.LIGHT:
            return LightMode;
        default:
            return LightMode
    }
}

export const LightMode = {
    //head
    link_style: lightLess.link_style,
    selected_link: lightLess.selected_link,

    es_no_select: lightLess.es_no_select,
    es_select: lightLess.es_select,

    theme_light: lightLess.theme_light,
    theme_dark: lightLess.theme_dark,

//    slogan
    slogan_light: lightLess.slogan_light,

};


//todo
export const DarkMode = {
    link_style: lightLess.link_style,
    selected_link: lightLess.selected_link,

    es_no_select: lightLess.es_no_select,
    es_select: lightLess.es_select,

    theme_light: lightLess.theme_light,
    theme_dark: lightLess.theme_dark,

    slogan_light: lightLess.slogan_light,
};
