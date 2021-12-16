import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {Menu} from "../constant/menu";
import {IMenuTyping} from "../typing/menuTyping";

const Home: NextPage = () => {


    return (
        <div className={styles.container}>
            <h1>this is my react-playground build by next</h1>
            <ul>
                {Menu.map((item: IMenuTyping) => {
                    return <li key={item.id}>
                        <Link href={item.path}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Home
