import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {

    const router = useRouter();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const header = document.getElementById('header');
            const checkScrollTop = () => {
                // handle show hide header
                if (header) {
                    if (window.pageYOffset > 84) {
                        header.classList.add('change-background');
                    } else {
                        header.classList.remove('change-background');
                    }
                }
            };
            window.addEventListener('scroll', checkScrollTop);
        }
    }, [])

    return (
        <div className={styles.wrapperHeader} id='header'>
            <Image img src="/img/terpopow.svg" alt="logo" width={166} height={32} />
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
