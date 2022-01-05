import React, {FC, useContext} from 'react';
import {IThemeContext} from "@/typings/themeTyping";
import {ThemeContext} from "@/layouts";


const IndexPage: FC = () => {

    const context = useContext<IThemeContext | null>(ThemeContext);


    return (
        <>

        </>
    );
};
export default IndexPage;
