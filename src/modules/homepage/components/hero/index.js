/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import SocialMedia from '../../../common/socialMedia';
import styles from './hero.module.css';

const Hero = () => {
    return (
        <div className={styles.wrapperHero}>
            <div className={styles.wrapperBackground}>
                <img className={styles.patternLeft} src="/img/pattern-left.svg" alt="background-pattern-left"/>
                <img className={styles.patternMid} src="/img/pattern-middle.svg" alt="background-pattern-middle"/>
            </div>
            <div className={styles.wrapperHeroDescription}>
                <div className={styles.HeroDescription}>
                    <div>
                        <h3>Hello I'm</h3>
                        <h1>Inung BP</h1>
                        <p>I started getting to know informatics by studying computer networks.
                            then about 4 years ago, I switched to being a programmer
                            because I think programming is more varied and challenging.
                        </p>
                    </div>
                    <SocialMedia />
                </div>
                <div className={styles.HeroProfile}><img src="/img/me.png" alt="hero" /></div>
                <div className={styles.HeroSkill}>
                    <div className={styles.HeroSkillImg}><img src="/img/skill1.svg" alt="skill1" /><p>React JS Developer</p></div>
                    <div className={styles.HeroSkillImg}><img src="/img/skill2.svg" alt="skill2" /><p>PWA</p></div>
                    <div className={styles.HeroSkillImg}><img src="/img/skill3.svg" alt="skill3" /><p>Javascript</p></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
