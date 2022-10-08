import React, {useState} from 'react';
import {Select} from 'antd';
import styles from '../styles/ask.module.css';

enum Gender {
    '男',
    '女'
}

interface IMockData {
    id: string;
    sex: Gender;
    name: string;
}

const mockData: IMockData[] = [
    {
        id: "8b71bBeC-CAF8-0ce8-e8AB-8D6d74CCC15b",
        sex: 0,
        name: "邓超"
    },
    {
        id: "51D61b38-Bcfa-9E87-3739-f0fA1E9E2F51",
        sex: 0,
        name: "姜平"
    },
    {
        id: "3cB5FDaA-1EcC-cbdB-2EeB-1319Fdd5d5af",
        sex: 0,
        name: "韩刚"
    },
    {
        id: "fdFD86fB-AB3f-3051-fEEB-cEef84bFe552",
        sex: 1,
        name: "雷娜"
    },
    {
        id: "52e5Ac5d-bADC-33D7-C2B7-FE1C71fDfDEF",
        sex: 0,
        name: "宋杰"
    },
    {
        id: "a89EA983-Cb28-7f88-2880-29ad328bc7FA",
        sex: 1,
        name: "白丽"
    },
    {
        id: "Db027828-4Ea6-e5ba-BCDd-bf6Cbe9FB4ef",
        sex: 0,
        name: "方洋"
    }
];


const AskPage = () => {


    const [sex, setSexType] = useState<Gender | undefined>(undefined);
    const [keyword, setKeyword] = useState<string | undefined>('');

    return (
        <div className={styles.frame}>
        {/*    filter Bar*/}
            <div className={styles.head}>
                <Select value={sex} style={{width:120}}>
                    <Select.Option value={0}>男</Select.Option>
                    <Select.Option value={1}>女</Select.Option>
                </Select>
            </div>
        </div>
    )
}
export default AskPage;
