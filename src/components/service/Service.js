import styles from './Service.module.scss'
import { AiFillCar } from "react-icons/ai";
import { GiHomeGarage } from "react-icons/gi";
import React, {useEffect, useState} from 'react'
import detailingBackground from '../../images/detailing-background.webp'
import mechanicBackground from '../../images/mechanic-background.webp'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";
const Service = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    const [chooseMechanicState, setChooseMechanicState] = useState('')

    const Variants = () => {
        return(
            <div className={styles.variants}>
                <div className={styles.information}>
                    <h1 className={styles.variantsTitle}>{chooseMechanicState === 'mobile' ? 'Usługi mobilne' : 'Usługi stacjonarne'}</h1>
                    <p className={styles.variantsText}>Wybierz wariant aby wyświetlić dostępne usługi:</p>
                </div>

                <div className={styles.variantsWrapper}>
                    <Link to={`/uslugi/detailing`} className={styles.variant}>
                        <h3 className={styles.variantTitle}>Detaling</h3>
                        <img className={styles.backgroundImage} src={detailingBackground} alt="detailing photo" />
                    </Link>
                    <Link to="/uslugi/mechanik" className={styles.variant}>
                        <h3 className={styles.variantTitle}>Mechanik</h3>
                        <img className={styles.backgroundImage} src={mechanicBackground} alt="detailing photo" />
                    </Link>
                </div>
            </div>

        )
    }

    const ServiceNavigation = () => {

        const chooseMechanic = (type) => {
            setChooseMechanicState(type)
        }

        return(
            <>
                <nav className={styles.serviceNavigation}>
                    <button onClick={() => chooseMechanic('mobile')} className={chooseMechanicState === 'mobile' ? `${styles.mobileStationaryButton} ${styles.mobile} ${styles.active}` : `${styles.mobileStationaryButton} ${styles.mobile}`}>Usługi mobilne <AiFillCar className={styles.icon} /></button>
                    <button disabled onClick={() => chooseMechanic('stationary')} className={chooseMechanicState === 'stationary' ? `${styles.mobileStationaryButton} ${styles.stationary} ${styles.active}` : `${styles.mobileStationaryButton} ${styles.stationary}`}>Usługi stacjonarne <GiHomeGarage className={styles.icon} /></button>
                </nav>
                {chooseMechanicState !== '' && <Variants />}
            </>

        )
    }

    return(
        <>
            <Helmet>
                <title>Usługi Mechanik Mobilny - Mechamosta</title>
                <meta name="description" content="Poznaj usługi mobilne mechanika mobilnego. Wymiana oleju, filtrów, klocków i tarcz hamulcowych oraz czyszczenie samochodu, poleorwanie i wiele innych" />
            </Helmet>
            <div className={styles.service}>
                <div className={styles.container}>
                    <ServiceNavigation />
                </div>
            </div>
        </>
    )
}

export default Service;