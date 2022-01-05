import React, {FC, ReactElement} from 'react';
import Flex from "@/components/Flex";
import {Link, useLocation} from 'umi';
import less from './index.less';
import {ES_VERSION} from "@/typings/typing";
import {ThemeContext} from "@/layouts";
import {themeStyle} from "@/styles/themeColor";
import {Navigation} from "@/constants/constant";
import {changeLanguage, fTextGather} from "@/helpers/business";
import {THEME_MODE} from "@/typings/themeTyping";
import {getLocale} from "@@/plugin-locale/localeExports";

interface IProps {
    esVersion: ES_VERSION;
    changeVersion: () => void;
}

const Head: FC<IProps> = ({esVersion, changeVersion}): ReactElement => {
    const textGather = fTextGather();
    const currentPath = useLocation().pathname;
    return (
        <ThemeContext.Consumer>
            {value => {
                const style = themeStyle(value?.themeType);
                return (<Flex className={less.frame} justify={"space-between"} alignItems={"center"}>
                    <Flex className={less.navigation} alignItems={"center"}>
                        {Navigation.map(item => <Link key={item.id} to={item.path}
                                                      className={item.path === currentPath ? style.selected_link : style.link_style}>
                            {textGather[item.name]}
                        </Link>)}
                    </Flex>


                    <Flex>
                        <Flex onClick={() => changeVersion()} justify={"center"} alignItems={"center"}
                              className={esVersion === ES_VERSION.ES6 ? style.es_select : style.es_no_select}>
                            ES6
                        </Flex>

                        <Flex className={value?.themeType === THEME_MODE.LIGHT ? style.theme_light : style.theme_dark}
                              justify={"center"} alignItems={"center"} onClick={() => value?.changeTheme()}>
                            <img src={value?.themeType === THEME_MODE.LIGHT ? './image/night.png' : './image/day.png'}
                            />
                        </Flex>

                        <Flex justify={"center"} alignItems={"center"}
                              className={getLocale() === 'zh-CN' ? style.es_select : style.es_no_select}
                              onClick={changeLanguage}>
                            CN
                        </Flex>
                    </Flex>
                </Flex>)
            }}
        </ThemeContext.Consumer>
    )
}
export default Head;
