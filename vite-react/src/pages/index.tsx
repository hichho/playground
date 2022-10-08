import React,{useMemo} from 'react';
import less from '@/style/index.module.less';
import Avatar from "@/components/Avatar";

const IndexPage = () => {
    return (
        <div className={less.frame}>
             <div className={less.head}>
                <h1>浏览</h1>
                <Avatar src={'./img/dog.jpeg'} className={less.avatar} />
            </div>

            <input className={less.search} />
        </div>
    )
}
export default IndexPage;
