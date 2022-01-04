import {THEME_MODE} from "@/typings/themeTyping";

export const initialTheme = (): THEME_MODE => {
    const now = Number(new Date().toTimeString().substring(0, 2));
    return now > 18 ? THEME_MODE.DARK : THEME_MODE.LIGHT;
}
