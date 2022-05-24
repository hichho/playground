import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import useTitle from "../hooks/useTitle";
import Menu from "../components/Menu";

const Home: NextPage = () => {

    useTitle('playground');
    return (
        <div className={styles.container}>
            <Menu/>
        </div>
    );
}

export default Home
