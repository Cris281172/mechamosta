import logo from "../../images/logo.webp";
import React from "react";
import {NavLink, useLocation, Link} from "react-router-dom";
import styles from './MainNavigation.module.scss'
import {useEffect, useState} from 'react'
import { HiMiniWrenchScrewdriver, HiMiniWrench } from "react-icons/hi2";
const MainNavigation = () => {

    const location = useLocation();

    const [isNavBackgroundActive, setIsNavBackgroundActive] = useState(false)

    const [isMenuActive, setIsMenuActive] = useState(false)

    useEffect(() => {
        if(location.pathname !== '/'){
            setIsNavBackgroundActive(true)
        }
        else{
            setIsNavBackgroundActive(false)
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setIsNavBackgroundActive(true)
                }
                else if(window.scrollY === 0){
                    setIsNavBackgroundActive(false)
                }
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }


    }, [location.pathname])

    useEffect(() => {

    }, []);

    const NavigationItem = ({text, linkTo}) => {

        return(
            <li className={styles.item}>
                <NavLink  onClick={() => setIsMenuActive(false)} className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`} to={linkTo}>{text}</NavLink>
            </li>
        )
    }
    return(
        <div className={isNavBackgroundActive ? `${styles.navigationWrapper} ${styles.backgroundActive}` : `${styles.navigationWrapper}`}>
            <div className={styles.container}>
                <nav className={styles.navigation}>
                    <Link to="/">
                        <img className={styles.logo} src={logo} alt="Mechamosta logo" />
                    </Link>
                    <ul className={isMenuActive ? `${styles.listItems} ${styles.activeMenu}` : `${styles.listItems}`}>
                        <NavigationItem text="Strona główna" linkTo="/" />
                        <NavigationItem text="O nas" linkTo="/o-nas" />
                        <NavigationItem text="Usługi" linkTo="/uslugi" />
                        <NavigationItem text="Galeria" linkTo="/galeria" />
                        <NavigationItem text="Kontakt" linkTo="/kontakt" />
                    </ul>
                    <div className={styles.hamburgerMenu} onClick={() => setIsMenuActive(prevState => !prevState)}>
                        {isMenuActive ? <HiMiniWrenchScrewdriver className={styles.icon} /> : <HiMiniWrench className={styles.icon} /> }
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MainNavigation;