import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {

    const router = useRouter();
    console.log(router);
    return (
        <div className={styles.wrapperHeader}>
            <Image img src="/terpopow.svg" alt="logo" width={166} height={32} />
            <div className={styles.midHeader}>
                <p className={router.pathname === '/' ? styles.active : styles.midHeaderItem}>Home</p>
                <p className={router.pathname === '/profile' ? styles.active : styles.midHeaderItem}>Profile</p>
                <p className={router.pathname === '/experience' ? styles.active : styles.midHeaderItem}>Experience</p>
            </div>
            <button type="button">Contact Me</button>
        </div>
    )
}

export default Header;
