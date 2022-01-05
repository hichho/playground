export interface IThemeContext {
    themeType: THEME_MODE;
    changeTheme: () => void;
    themeConfiguration?: unknown;
}

export enum THEME_MODE {
    LIGHT,
    DARK
}
