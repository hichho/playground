import {ApiHost, ImageAlt} from '@/constants/constant';
import React, {CSSProperties, FC, ReactElement} from 'react';

interface IProps {
    src: string | undefined;
    alt?: string;
    className?: string;
    style?: CSSProperties | undefined;
    onClick?: () => any;
}

const Image: FC<IProps> = ({
                               src,
                               alt,
                               className,
                               style,
                               onClick,
                           }): ReactElement => {
    let imgStyle: CSSProperties | undefined;
    if (onClick) {
        imgStyle = Object.assign(style ?? {}, {cursor: 'pointer'});
    } else {
        imgStyle = style;
    }
    const transSrcPath = (path: string | undefined) => {
        if (path) {
            if (path.startsWith('./image')) {
                return path;
            } else {
                return ApiHost + path;
            }
        }
    };
    return (
        <img
            src={transSrcPath(src)}
            alt={alt ?? ImageAlt}
            className={className}
            style={imgStyle}
            onClick={() => onClick && onClick()}
        />
    );
};
export default Image;
