import {FC, ReactElement} from "react";

interface IProps {
    src: string;
    className?: string;
}

const Avatar: FC<IProps> = ({src, className}): ReactElement => {
    return (<div className={className}>
        <img src={src} alt={'头像'}/>
    </div>)
}
export default Avatar;
