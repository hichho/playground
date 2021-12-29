import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import useTitle from "../hooks/useTitle";
import Menu from "../components/Menu";
import {useEffect, useState} from "react";

const Home: NextPage = () => {

    useTitle('playground');

    const [count, setCount] = useState(0);
    console.log(count)


    return (
        <div className={styles.container}>
            <Menu/>

            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    );
}

export default Home
