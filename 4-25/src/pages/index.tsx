import React, {Suspense, useEffect, useRef, useState} from 'react';
import {useRequest} from "@@/plugin-request/request";
import style from '@/styles/index.less'
import {IUserInfo} from "@/type";
import useQuery from "@/hooks/useQuery";
import {Input, Toast, DatePicker} from "antd-mobile";
import {ToastHandler} from "antd-mobile/2x/es/components/toast";
import dayjs from "dayjs";

export default function IndexPage() {
    //logic
    const [userInfo, setUserInfo] = useState<IUserInfo>({
        id: '', time: '', code: ''
    });
    const handler = useRef<ToastHandler>();
    const {loading, data} = useRequest({url: '/wxController/getopenid', params: useQuery()});
    const [visible, setVisible] = useState<boolean>(false);
    useEffect(() => {
        if (loading) {
            handler.current = Toast.show({
                content: '获取用户信息中',
                duration: 0,
                position: 'top',
            })
        } else {
            handler.current?.close();
        }
    }, [loading]);

    //render
    const renderDate = () => {
            return (
                <div className={userInfo?.time?style.date:style.empty}
                     onClick={()=>setVisible(true)}>
                    {userInfo?.time||'请选择日期'}
                </div>
            )
    }

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
                    <div className={style.input_frame}>
                        <div className={style.label_block}>
                            <span>用</span>
                            <span>户</span>
                            <span>编</span>
                            <span>号</span>
                        </div>
                        <div className={style.line}></div>
                        <Input placeholder={'请输入用户编号'}
                               className={style.input}
                               value={userInfo.id}
                               onChange={(val) => setUserInfo({...userInfo, id: val})}
                        />
                    </div>
                    <div className={style.input_frame}>
                        <div className={style.label_block}>
                            <span>日</span>
                            <span>期</span>
                        </div>
                        <div className={style.line}></div>
                        {renderDate()}
                        <DatePicker
                            value={new Date(userInfo.time)}
                            title='时间选择'
                            visible={visible}
                            onClose={() => {
                                setVisible(false)
                            }}
                            onConfirm={val => {
                                setUserInfo({...userInfo,time:dayjs(val).format('YYYY-MM-DD')})
                            }}
                        />
                    </div>
                    <div className={style.input_frame}>
                        <span className={style.label_block}>
                            <span>随</span>
                            <span>机</span>
                            <span>码</span>
                        </span>
                        <div className={style.line}></div>
                        <Input placeholder={'请输入用户编号'}
                               className={style.input}
                               value={userInfo.code}
                               onChange={(val) => {
                                   if (val.length > 4) {
                                       Toast.show({
                                           content: '数字码最多4位',
                                       })
                                       return;
                                   }
                                   setUserInfo({...userInfo, code: val})
                               }}
                        />
                    </div>

                </div>
            </div>
        </Suspense>
    );
}
