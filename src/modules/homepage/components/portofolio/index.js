/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './portofolio.module.css'

const Portofolio = () => {
    return (
        <div className={styles.wrapperPortofolio}>
            <div className={styles.wrapperHeaderPortofolio}>
                <p>our portofolio</p>
                <div className={styles.wrapperTitlePortofolio}>
                    <h1>Our latest cool project.</h1>
                    <Link href='/experience' as='/experience'>
                        <a>
                            <span>show all</span>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L16.57 7.393L24.15 15H4V17H24.15L16.57 24.573L18 26L28 16L18 6Z" fill="#2C3136"/>
                            </svg>
                        </a>
                    </Link>
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
                </div>
                <div className={styles.wrapperRightContent}>
                    <div className={styles.wrapperContent}>
                        <img src="/img/guardian.png" alt="guardian" />
                        <h3>Guardian Indonesia</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className={styles.wrapperContent}>
                        <img src="/img/bigi.png" alt="bigi" />
                        <h3>Bigi.id</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperAboutMe}>
                <div className={styles.title}>
                    <h1>I love to create something simple and clean</h1>
                </div>
                <div className={styles.aboutMe}>
                    <p>Seorang User Interface Designer, saat ini tinggal di kota Surakarta yang banyak sekali makanan enak. Suka melakukan eksplorasi design yang minimalis dan memiliki fungsionalitas yang baik.</p>
                    <p>Bisa menghabiskan waktu berjam-jam setiap hari nya untuk melakukan eksplorasi design. Kalian dapat melihat beberapa eksplorasi design saya di Dribbble.</p>
                    <p>Saya juga suka menulis di Medium, kebanyakan tulisan saya membahas tentang bagaimana memulai menjadi UI Designer, beberapa tips dasar untuk membuat UI Design lebih menarik, dan bisnis design.</p>
                    <p>Aktif di Twitter membahas hal hal seputar industri design dan jika kamu punya pertanyaan jangan ragu untuk mention saya di twitter, pasti akan jadi obrolan yang menarik.</p>
                    <p>Dan akhir akhir ini lagi hobi ngerakit gundam dan motret gundam. Kalian bisa melihat beberapa eksperiman motret gundam saya di sini Semoga kalian menikmati nya. Kalau kalian pengen tanya tanya tentang Gundam bisa langsung DM saya di Twitter, dengan senang hati bakal saya jawab.</p>
                </div>
            </div>
        </div>
    )
}

export default Portofolio;
