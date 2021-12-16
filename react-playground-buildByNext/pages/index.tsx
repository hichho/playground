import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>this is my react-playground build by next</h1>
            <Link href={'/context'}>
                <a>react-context-class-component</a>
            </Link>
        </div>
    );
}

export default Home
