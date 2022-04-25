import React, {Suspense} from 'react';
import {useRequest} from "@@/plugin-request/request";
import style from '@/styles/index.less'


export default function IndexPage() {

    // const swiper = useRequest({url: '/app/ajxq/slideshow/home'});

    return (
        <Suspense fallback={<h3>loading...</h3>}>
            <div
                className={style.frame}>
                <img src={'./image/bg.png'} className={style.bg} alt={''}/>
                {/*    head*/}
                <div className={style.head}>
                    <img src={'./image/lock-icon.png'} className={style.icon}/>
                    <span className={style.title}>监管密码宝V5.5</span>
                </div>
                {/*body*/}
                <div className={style.container}>

                </div>
            </div>
        </Suspense>
    );
}
