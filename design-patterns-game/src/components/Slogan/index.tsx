import React, {FC, ReactElement} from 'react';
import Flex from "@/components/Flex";
import {ThemeContext} from "@/layouts";
import {themeStyle} from "@/styles/themeColor";
import {fTextGather} from "@/helpers/business";

const Slogan: FC = (): ReactElement => {

    const textGather = fTextGather();

    return (
        <ThemeContext.Consumer>
            {value => {
                const style = themeStyle(value?.themeType);
                return (
                    <Flex className={value?.themeType ? style.slogan_light : style.slogan_light}
                          direction={"column"}
                          justify={"center"} alignItems={"center"}>
                        <h1>
                            {textGather['TITLE']}
                        </h1>
                        <h2>
                            {textGather['SLOGAN']}
                        </h2>
                    </Flex>
                )
            }}
        </ThemeContext.Consumer>
    );

}
export default Slogan;
