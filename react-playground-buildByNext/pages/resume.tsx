import React, {FC, ReactElement} from 'react';
import styles from './resume.module.css';

const Resume: FC = (): ReactElement => {

    return (
        <div className={styles.frame}>
            <div className={styles.container}>
                {Title('联系方式')}
                <div className={styles.table}>
                    <div className={styles.item_1}>
                        <div className={styles.dot}/>
                        {light('联系方式：')}
                        {dark('178267864085')}
                    </div>
                    <div className={styles.item_1}>
                        <div className={styles.dot}/>
                        {light('邮箱：')}
                        {dark('hichhozz@gmail.com')}
                    </div>
                    <div className={styles.item_2}>
                        <div className={styles.dot}/>
                        {light('微信：')}
                        {dark('hichh-_zo')}
                    </div>
                </div>


                <div style={{height: 12}}/>
                {Title('个人信息')}

                <div className={styles.table}>
                    <div className={styles.item_1}>
                        <div className={styles.dot}/>
                        {light('')}
                        {dark('应鑫炯｜男｜1996-01')}
                    </div>
                    <div className={styles.item_1}>
                        <div className={styles.dot}/>
                        {light('')}
                        {dark('本科：浙江大学宁波理工学院 - 软件工程 2019级(英语四级)')}
                    </div>
                    <div className={styles.item_2}>
                        <div className={styles.dot}/>
                        {light('')}
                        {dark('前端开发｜2年工作经验')}
                    </div>
                </div>

                <div style={{height: 12}}/>
                {Title('技术栈')}

                <div className={styles.body}>
                    <div className={styles.body_item}>
                        <div className={styles.dot} style={{marginTop: 6}}/>
                        <div
                            style={{width: 'calc(100% - 24px)'}}>熟悉 {highLight('TypeScript')} , {highLight('JavaScript')}，熟悉ES6以来的新特性。
                        </div>
                    </div>

                    <div className={styles.body_item}>
                        <div className={styles.dot} style={{marginTop: 6}}/>
                        <div
                            style={{width: 'calc(100% - 24px)'}}>熟悉 {highLight('React、Hook')}及相关工具链（{highLight('Umi,aHooks，Taro，NextJs')} ）。
                        </div>
                    </div>

                    <div className={styles.body_item}>
                        <div className={styles.dot} style={{marginTop: 6}}/>
                        <div>熟悉 {highLight('微信、钉钉小程序以及H5、Electron')}的相关开发。</div>
                    </div>

                    <div className={styles.body_item} style={{border: 'none'}}>
                        <div className={styles.dot} style={{marginTop: 6}}/>
                        <div>了解{highLight('网站的加载优化、SEO优化')}、{highLight('webpack')}打包配置，了解 {highLight('http网络请求协议')}相关知识</div>
                    </div>
                </div>

                <div style={{height: 12}}/>
                {Title('项目经历（2019.06 - 至今 杭州铁晟科技有限公司）—— 2018.12 - 2019.06 浙江天派科技有限公司')}

                <div className={styles.article}>
                    <div className={styles.article_title}>
                        <div className={styles.dot}/>
                        <h3>智慧校园</h3>
                    </div>
                    <div style={{marginBottom: 8}}>技术栈：TypeScript、React、Umi</div>
                    <div
                        style={{textIndent: 16}}>服务于小和山多个高校，包括新闻富文本展示、问卷调查、疫情打卡、课表管理、自动出卷等模块。负责后台管理系统的文件上传、视频上传、富文本编辑组件封装，钉钉、微信h5端定位打卡、请假提交、审核
                        ，学生打卡数据展示 等功能的实现。
                    </div>
                    <div style={{textIndent: 16, marginTop: 12}}>
                        使用G2图表展示校园内发生各类警告信息、停车位等信息，同时对接监控系统、接入高德地图，展示校园内摄像头分布情况、工作情况、实时监控画面、疫情期间打卡数据。封装获取组件渲染次数 的Hook，配合React Dev
                        Tool优化项目。
                    </div>

                    <div className={styles.article_title}>
                        <div className={styles.dot}/>
                        <h3>景点商城</h3>
                    </div>
                    <div style={{marginBottom: 8}}>技术栈：TypeScript、React、Taro、Redux</div>
                    <div>该小程序应用于杭州某景点。用户类型包含：游客、村民、管理员等。游客部分负责展示热门景点、美食、停车位，社区分享等，包含音视频、地图展示等多种表现形式。
                        村民部分包含：商城、房屋出租、社区分享（类似朋友圈）、积分领取、排行榜、家庭管理、大数据展示等功能。村民可以查看、上架、筛选、购买商品。
                        租房评级模块。
                    </div>

                    <div className={styles.article_title}>
                        <div className={styles.dot}/>
                        <h3>校园监控大数据展示</h3>
                    </div>
                    <div style={{marginBottom: 8}}>技术栈：React、G2</div>
                    <div>该项目
                    </div>
                </div>

                {/*<div className={styles.article} style={{marginBottom: 12}}>*/}
                {/*    <div style={{height: 12}}/>*/}
                {/*    {Title('其它')}*/}
                {/*    <div className={styles.article_title}>*/}
                {/*        <div className={styles.dot}/>*/}
                {/*        <a href={'https://github.com/hichho/better-todoList'} target={'_blank'} rel="noreferrer">*/}
                {/*            <h3>Better-TodoList</h3>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div>这个repository的想法来源于复现*/}
                {/*        <a href={'https://www.youtube.com/watch?v=8dUpL8SCO1w&t=16354s'} target={'_blank'}*/}
                {/*           rel="noreferrer">React Conf2021</a>*/}
                {/*        中Hux展示React*/}
                {/*        forget时的demo。封装了useRef（我将它publish到了{<a*/}
                {/*            href={'https://www.npmjs.com/package/react-render-times'}>npm上</a>}），配合React Dev*/}
                {/*        Tool直观展现React*/}
                {/*        useMemo,useCallback带来的优化。<a*/}
                {/*            href={'https://github.com/hichho/tips-in-work'}>(这里是我关于这个repository的想法。)</a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


        </div>
    )
}
export default Resume;

const Title = (text: string) => {
    return (
        <div className={styles.title}>
            <div className={styles.color}/>
            <div>{text}</div>
        </div>
    )
}

const light = (text: string) => {
    return (<span style={{color: "#696969", margin: 0, padding: 0}}>
{text}
</span>);
}

const dark = (text: string) => {
    return (<span style={{
        color: '#1C1C1C', margin: 0, padding: 0
    }}>{text}</span>);
}

const highLight = (text: string) => {
    return (
        <span style={{color: '#1E90FF'}}>{text}</span>
    )
}
