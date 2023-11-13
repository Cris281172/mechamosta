import styles from './Footer.module.scss'
import logo from '../../images/logo.webp'
import {Link} from 'react-router-dom'
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {

    const FooterNavigation = () => {
        return(
            <nav className={styles.footerNavigation}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="" className={styles.link}>Strona główna</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="" className={styles.link}>O nas</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="" className={styles.link}>Usługi</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="" className={styles.link}>Galeria</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="" className={styles.link}>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        )
    }

    const FooterInformation = () => {
        return(
            <address>
                <ul className={styles.footerInformation}>
                    <li className={styles.item}>
                        <h5 className={styles.title}>Email: </h5>
                        <a className={styles.link} href="mailto:mechamosta@gmail.com" target="_blank">mechamosta@gmail.com</a>
                    </li>
                    <li className={styles.item}>
                        <h5 className={styles.title}>Numer telefonu: </h5>
                        <a className={styles.link} href="tel:453454696" target="_blank">+48 453 454 696</a>
                    </li>
                    <li className={styles.item}>
                        <h5 className={styles.title}>Adres: </h5>
                        <a className={styles.link} href="https://goo.gl/maps/ghm3ku4zjBXtviqL8" target="_blank">Armii Krajowej 44, Łódź</a>
                    </li>
                </ul>
            </address>
        )
    }

    const SocialMediaIcons = () => {
        return(
            <ul className={styles.socialMediaIcons}>
                <li className={styles.item}>
                    <a className={styles.link} href="https://www.facebook.com/profile.php?id=100095224160033" target="_blank">
                        <AiFillFacebook className={`${styles.icon} ${styles.facebook}`} />
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="https://www.instagram.com/mechamosta/" target="_blank">
                        <AiOutlineInstagram className={`${styles.icon} ${styles.instagram}`} />
                    </a>
                </li>
            </ul>
        )
    }

    const CopyRightInformation = () => {
        return(
            <div className={styles.copyRightInformation}>Wszelkie prawa zastrzeżone <Link className={styles.webLink} to="">mechamosta.pl</Link> <span className={styles.copyIcon}>&copy;</span> 2023</div>
    )
    }

    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerWrapper}>
                    <div className={styles.leftSide}>
                        <img className={styles.logo} src={logo} alt="logo" />
                        <FooterInformation />
                        <FooterNavigation />
                        <SocialMediaIcons />
                    </div>
                    <div className={styles.rightSide}>
                        <iframe className={styles.map} src="https://www.google.com/maps/d/embed?mid=1vHp2IOmhX5na0JkP5ltmf574_U5-C1c&ehbc=2E312F" width="640" height="480"></iframe>
                    </div>
                </div>
                <CopyRightInformation />
            </div>
        </footer>
    )
    }

    export default Footer;