import React, {FC, Suspense, useContext} from 'react';
import {IThemeContext, THEME_MODE} from "@/typings/themeTyping";
import {ThemeContext} from "@/layouts";


const IndexPage: FC = () => {

    const context = useContext<IThemeContext | null>(ThemeContext);

    console.log(context)

    return (
        <Suspense fallback={<div>123</div>}>
            <>
                <ThemeContext.Consumer>
                    {value => {
                        return <div
                            onClick={() => value?.changeTheme(value?.themeType ?
                                THEME_MODE.LIGHT : THEME_MODE.DARK
                            )}
                        >123</div>
                    }}
                </ThemeContext.Consumer>

            </>
        </Suspense>
    );
};
export default IndexPage;
