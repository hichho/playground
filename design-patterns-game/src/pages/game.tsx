import React, {FC, useContext} from 'react';
import {IThemeContext} from "@/typings/themeTyping";
import {ThemeContext} from "@/layouts";
import {IPattern} from "@/typings/typing";
import mixed from "@/patterns";
// @ts-ignore
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
// @ts-ignore
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';
import less from './less/game.less'
import Flex from "@/components/Flex";


const IndexPage: FC = () => {

    const context = useContext<IThemeContext | null>(ThemeContext);
    // console.log(patterns);

    console.log(mixed);

    return (
        <>
            <Flex className={less.code}>
                <SyntaxHighlighter language="javascript"
                                   style={tomorrow}>
                    {mixed[0].codeES6}
                </SyntaxHighlighter>
            </Flex>

        </>
    );
};
export default IndexPage;
