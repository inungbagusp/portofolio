/* eslint-disable @next/next/no-img-element */
import Layout from '../../layout';
import styles from './profile.module.css';

const ProfileView = () => {
    return (
        <Layout>
            <div className={styles.wrapperProfileView}>
                <h1>About me.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className={styles.wrapperContent}>
                    <img src="/img/profile.png" alt="profile" />
                    <div className={styles.wrapperBio}>
                        <div className={styles.bioLeft}>
                            <p>Full name</p>
                            <p>Email address</p>
                            <p>Phone number</p>
                            <p>Birth date</p>
                            <p>Education</p>
                            <p>Hobby</p>
                        </div>
                        <div className={styles.bioRight}>
                            <p>Inung Bagus Prasetyo</p>
                            <p>inungbagusp@gmail.com</p>
                            <p>0857433745088</p>
                            <p>Malang, 24/03/1996</p>
                            <p>Bachelor of Computer (UMM)</p>
                            <p>Fishing</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProfileView;
