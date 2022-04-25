import React, {Suspense, useEffect, useRef, useState} from 'react';
import {useRequest} from "@@/plugin-request/request";
import style from '@/styles/index.less'
import {IUserInfo} from "@/type";
import useQuery from "@/hooks/useQuery";
import {Input, Toast} from "antd-mobile";
import {ToastHandler} from "antd-mobile/2x/es/components/toast";
import Constants from "@/constants";
import dayjs from "dayjs";

const init = (): string => {
    return dayjs().format('YYYY-MM-DD');
}

export default function IndexPage() {
    //hook
    const [userInfo, setUserInfo] = useState<IUserInfo>({
        id: '', time: init(), code: ''
    });
    const handler = useRef<ToastHandler>();
    const {loading, data} = useRequest({url: '/wxController/getopenid', params: useQuery()});
    const submit = useRequest({
        url: '/app/system/download', method: 'GET', params: userInfo
    }, {manual: true});
    const [password,setPassword] = useState<string>('');
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

    const verify = () => {
        return (userInfo.id && userInfo.time && userInfo.code) && (userInfo.code.length === 4);
    }

    const handleClick = () => {
        if (verify()) {
            submit.run();
        } else {
            Toast.show({
                content: '请填写完整',
                duration: 500
            })
        }
    }

    console.log(submit.data)
    return (
        <Suspense fallback={<h3>loading...</h3>}>
            <div
                className={style.frame}>
                <img src={'./image/bg.png'} className={style.bg} alt={''}/>
                {/*    head*/}
                <div className={style.head}>
                    <img src={'./image/lock-icon.png'} className={style.icon} alt={Constants.Title}/>
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
                        <div className={style.date}>
                            {userInfo.time}
                        </div>
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

                    <div className={style.tips}>
                        请先输入任意4位数字的随机码，再点击生成登录密码
                    </div>

                    <div className={verify() ? style.btn : style.block_btn}
                         onClick={() => handleClick()}
                    >生成登录密码
                    </div>


                    <div className={style.pw}>本次登录密码</div>
                    <div className={style.pw}>123434444</div>
                </div>
            </div>
        </Suspense>
    );
}
