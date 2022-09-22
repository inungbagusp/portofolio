/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './portofolio.module.css'

const Portofolio = () => {
    return (
        <div className={styles.wrapperPortofolio}>
            <div className={styles.wrapperHeaderPortofolio}>
                <div className={styles.wrapperTitlePortofolio}>
                    <h1>My Experience.</h1>
                    <p>some of the latest projects that I helped build the website.</p>
                </div>
            </div>
            <div className={styles.wrapperContentPortofolio}>
                <div className={styles.wrapperLeftContent}>
                    <div className={styles.wrapperContent}>
                        <a href="https://www.senheng.com.my/" target="__blank">
                            <img src="/img/senheng.webp" alt="senheng" />
                            <h3>Senheng Malaysia</h3>
                            <p>Senheng is a E-commerce company that has 2 store views with the names senheng and senq. I contributed on the pwa side.</p>
                        </a>
                    </div>
                    <div className={styles.wrapperContent}>
                        <a href="https://bodypack.co.id/" target="__blank">
                            <img src="/img/bodypack.webp" alt="bodypack" />
                            <h3>BodyPack</h3>
                            <p>Bodypack is a project that uses Next JS as the framework and Magento as the BackEnd. I contributed on the pwa side.</p>
                        </a>
                    </div>
                    <div className={styles.wrapperContent}>
                        <a href="https://exsport.co.id/" target="__blank">
                            <img src="/img/exsport.webp" alt="exsport" />
                            <h3>Exsport</h3>
                            <p>Exsport and Bodypack are one company that has 2 websites. I contributed on the pwa side for those website.</p>
                        </a>
                    </div>
                    <div className={styles.wrapperContent}>
                        <a href="https://bahanmakanan.com/" target="__blank">
                            <img src="/img/bahanmakanan.webp" alt="bahanmakanan" />
                            <h3>Bahan Makanan</h3>
                            <p>Bahan Makanan is built with the Magento framework and has not implemented PWA. I contribute as a Front-End developer.</p>
                        </a>
                    </div>
                </div>
                <div className={styles.wrapperRightContent}>
                    <div className={styles.wrapperContent}>
                        <a href="https://guardianindonesia.co.id/" target="__blank">
                            <img src="/img/guardian.webp" alt="guardian" />
                            <h3>Guardian Indonesia</h3>
                            <p>Guardian uses the pwa framework from magento called PWA Studio. I contributed in making some new features and website maintenance.</p>
                        </a>
                    </div>
                    <div className={styles.wrapperContent}>
                        <a href="https://sallangsallang.com/" target="__blank">
                            <img src="/img/sallangsallang.webp" alt="sallangsallang" />
                            <h3>SallangSallang</h3>
                            <p>Sallangsallang uses Magento on front side and implements PWA on checkout side. I contribute on the PWA side.</p>
                        </a>
                    </div>
                    <div className={styles.wrapperContent}>
                        <a href="https://www.nutrimart.co.id/" target="__blank">
                            <img src="/img/nutrimart.webp" alt="nutrimart" />
                            <h3>Nutrimart</h3>
                            <p>Nutrimart uses Magento on front side and implements PWA on checkout side. I contribute on the PWA side</p>
                        </a>
                    </div>
                    <div className={styles.wrapperContent}>
                        <a href="https://bigi.id/" target="__blank">
                            <img src="/img/bigi.webp" alt="bigi" />
                            <h3>Bigi.id</h3>
                            <p>Bigi is built with the magento framework and has not implemented PWA. I contribute as a Front-End developer.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio;
