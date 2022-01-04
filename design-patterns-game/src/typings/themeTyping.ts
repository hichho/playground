export interface IThemeContext {
    themeType: THEME_MODE;
    changeTheme: (theme: THEME_MODE) => void;
    themeConfiguration?: unknown;
}

export enum THEME_MODE {
    LIGHT,
    DARK
}
