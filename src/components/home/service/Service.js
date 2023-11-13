import styles from './Service.module.scss'
import {Link} from 'react-router-dom'

const Service = () => {

    const Offer = ({title, servicesArray, link}) => {
        return(
            <div className={styles.offer}>
                <h3 className={styles.offerTitle}>{title}</h3>
                <ul className={styles.list}>
                    {servicesArray.map((item, index) => {
                        return(
                            <li className={styles.item} key={index}>
                                <Link className={styles.link} to={link}>- {item}</Link>
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }

    return(
        <div className={styles.service}>
            <div className={styles.container}>
                <div className={styles.serviceTitleWrapper}>
                    <h2 className={styles.serviceTitle}>Usługi</h2>
                </div>
                <div className={styles.offerWrapper}>
                    <Offer title="Usługi mobilne (mechanik)" servicesArray={['Wymiana klocków hamulcowych', 'Wymiana tarcz hamulcowych', 'Wymiana świec zapłonowych', 'Wymiana filtrów', 'Wymiana filtru oleju i oleju silnikowego', 'Wymiana akumulatora']} link="uslugi/mechanik" />
                    <Offer title="Usługi mobilne (detailing)" servicesArray={['Czyszecznie wnętrza ', 'Polerowanie samochodu']} link="uslugi/detailing" />
                    <Offer title="Usługi stacjonarne (mechanik)" servicesArray={['Wymiana klocków hamulcowych', 'Wymiana tarcz hamulcowych', 'Wymiana świec zapłonowych', 'Wymiana filtrów', 'Wymiana filtru oleju i oleju silnikowego', 'Wymiana akumulatora']} />
                    <Offer title="Usługi stacjonarne (detailing)" servicesArray={['Czyszecznie wnętrza ', 'Polerowanie samochodu']} />
                </div>
                <div className={styles.seeMoreWrapper}>
                    <Link className={styles.seeMore} to="uslugi">Przejdź do usług</Link>
                </div>
            </div>
        </div>
    )
}

export default Service;