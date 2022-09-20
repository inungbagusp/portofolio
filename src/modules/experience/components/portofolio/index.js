/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './portofolio.module.css'

const Portofolio = () => {
    return (
        <div className={styles.wrapperPortofolio}>
            <div className={styles.wrapperHeaderPortofolio}>
                <div className={styles.wrapperTitlePortofolio}>
                    <h1>Our Portofolio.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className={styles.wrapperContentPortofolio}>
                <div className={styles.wrapperLeftContent}>
                    <div className={styles.wrapperContent}>
                        <img src="/img/senheng.png" alt="senheng" />
                        <h3>Senheng</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className={styles.wrapperContent}>
                        <img src="/img/bodypack.png" alt="bodypack" />
                        <h3>BodyPack</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className={styles.wrapperContent}>
                        <img src="/img/exsport.png" alt="exsport" />
                        <h3>Exsport</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className={styles.wrapperContent}>
                        <img src="/img/bahanmakanan.png" alt="bahanmakanan" />
                        <h3>Bahan Makanan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className={styles.wrapperRightContent}>
                    <div className={styles.wrapperContent}>
                        <img src="/img/guardian.png" alt="guardian" />
                        <h3>Guardian Indonesia</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className={styles.wrapperContent}>
                        <img src="/img/sallangsallang.png" alt="sallangsallang" />
                        <h3>SallangSallang</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className={styles.wrapperContent}>
                        <img src="/img/nutrimart.png" alt="nutrimart" />
                        <h3>Nutrimart</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className={styles.wrapperContent}>
                        <img src="/img/bigi.png" alt="bigi" />
                        <h3>Bigi.id</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio;
