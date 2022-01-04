import React, {Suspense, lazy, createContext, useState} from 'react';
import {Spin} from 'antd';
import {IThemeContext, THEME_MODE} from "@/typings/themeTyping";
import {IProps} from "@/typings/typing";
import {initialTheme} from "@/constants/theme";

const ErrorBoundary = lazy(() => import('@/components/ErrorBoundary'));
export const ThemeContext = createContext<IThemeContext | null>(null);

const Layout = (props: IProps) => {
    const [themeMode, setTheme] = useState<THEME_MODE>(initialTheme());
    return (
        <Suspense fallback={<Spin/>}>
            <ErrorBoundary>
                <ThemeContext.Provider value={{
                    themeType: themeMode,
                    changeTheme: (theme: THEME_MODE) => setTheme(theme),
                }}>
                    {props.children}
                </ThemeContext.Provider>
            </ErrorBoundary>
        </Suspense>
    );
};
export default Layout;
