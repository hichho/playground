import Link from 'next/link';
import {FC, ReactElement} from "react";
import {MenuData} from "../../constant/menu";
import {IMenuTyping} from "../../typing/menuTyping";
import styles from "../../styles/Home.module.css";


const Menu: FC = (): ReactElement => {
    return (
        <div className={styles.container}>
            <h1>react-playground build by next</h1>
            <ul>
                {MenuData.map((item: IMenuTyping) => {
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
export default Menu
