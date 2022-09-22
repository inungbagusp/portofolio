/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './portofolio.module.css'

const Portofolio = () => {
    return (
        <div className={styles.wrapperPortofolio}>
            <div className={styles.wrapperHeaderPortofolio}>
                <p>My portofolio</p>
                <div className={styles.wrapperTitlePortofolio}>
                    <h1>My latest cool project.</h1>
                    <Link href='/experience' as='/experience'>
                        <a>
                            <span>Show all</span>
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
                        <a href="https://www.senheng.com.my/" target="__blank">
                            <img src="/img/senheng.webp" alt="senheng" />
                            <h3>Senheng Malaysia</h3>
                            <p>Senheng is a e-commerce company that has 2 store views with the names senheng and senq. I contributed on the pwa side.</p>
                        </a>
                    </div>
                    <div className={styles.wrapperContent}>
                        <a href="https://bodypack.co.id/" target="__blank">
                            <img src="/img/bodypack.webp" alt="bodypack" />
                            <h3>BodyPack</h3>
                            <p>Bodypack is a project that uses Next JS as the framework and Magento as the BackEnd. I contributed on the pwa side.</p>
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
                        <a href="https://bigi.id/" target="__blank">
                            <img src="/img/bigi.webp" alt="bigi" />
                            <h3>Bigi.id</h3>
                            <p>Bigi is built with the magento framework and has not implemented PWA. I contribute as a Front-End developer.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperAboutMe}>
                <div className={styles.title}>
                    <h1>My journey to become a software developer.</h1>
                </div>
                <div className={styles.aboutMe}>
                    <p>A developer who currently lives in Malang, East Java. I started studying informatics by pursuing the world of internet networks. I graduated from high school in the field of networking and then continued college also in the field of networking.</p>
                    <p>I started to change my interest in becoming a developer because when I did an internship at Garuda Indonesia, I was required to be able to create an event website. with the demands, I began to learn little by little about the world of programming.</p>
                    <p>After finishing my internship at Garuda Indonesia, I tried to start working at Icube as a magento front-end by relying on CSS skills and left my interest in the internet network because I think being a developer is more exciting and challenging.</p>
                    <p>The programming world is not as simple as I imagined, our code must be clean, easy to understand, simple and structured. especially if we work as a team, we need to learn all of that and apply it.</p>
                    <p>The programming world is also always evolving from time to time and there is a lot that I dont know. therefore I try not to stop to always follow developments and always learn new things about programming.</p>
                </div>
            </div>
        </div>
    )
}

export default Portofolio;
