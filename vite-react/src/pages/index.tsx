import React from 'react';
import {Router, Route} from "react-router";
import less from '@/style/index.module.less';

const IndexPage = (props: any) => {
    return (
        <div className={less.frame}>
            <h1
                onClick={() => props.history.push('/home')}>index</h1>
        </div>
    )
}
export default IndexPage;
