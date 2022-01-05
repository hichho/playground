import React, {createContext, lazy, Suspense, useCallback, useState} from 'react';
import {Spin} from 'antd';
import {IThemeContext, THEME_MODE} from "@/typings/themeTyping";
import {ES_VERSION, IProps} from "@/typings/typing";
import {initialTheme} from "@/constants/theme";
import Head from "@/components/Head";
import Flex from "@/components/Flex";
import less from './index.less';
import Slogan from "@/components/Slogan";


const ErrorBoundary = lazy(() => import('@/components/ErrorBoundary'));
export const ThemeContext = createContext<IThemeContext | null>(null);

const Layout = (props: IProps) => {
    const [themeMode, setTheme] = useState<THEME_MODE>(initialTheme());
    const [esVersion, setVersion] = useState<ES_VERSION>(ES_VERSION.ES6);
    const changeTheme = () => setTheme(
        prevState => prevState === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT);
    const changeVersion = useCallback(() => setVersion(
            prevState => prevState === ES_VERSION.ES6 ? ES_VERSION.PRE : ES_VERSION.ES6)
        , []);

    return (
        <Suspense fallback={<Spin/>}>
            <ErrorBoundary>
                <ThemeContext.Provider value={{
                    themeType: themeMode,
                    changeTheme,
                }}>
                    <Flex direction={"column"} className={less.frame} alignItems={"center"}>
                        <Flex direction={'column'} className={less.container} alignItems={'center'}>
                            <Head esVersion={esVersion} changeVersion={changeVersion}/>
                            <Slogan/>
                            {props.children}
                        </Flex>
                    </Flex>
                </ThemeContext.Provider>
            </ErrorBoundary>
        </Suspense>
    );
};
export default Layout;
