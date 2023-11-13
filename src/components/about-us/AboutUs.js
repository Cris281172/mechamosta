import styles from './AboutUs.module.scss'
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
const AboutUs = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const ListConfiguration = [
        {
            title: 'Mobilność:',
            desc: 'Niezależnie od tego, czy potrzebujesz szybkiej naprawy, przeglądu technicznego czy kompleksowej pielęgnacji swojego pojazdu, przyjeżdżamy do Ciebie. Nasza flota wyposażona jest w najnowocześniejszy sprzęt i narzędzia, dzięki czemu możemy świadczyć usługi na miejscu, w dowolnym miejscu w Łodzi.'
        },
        {
            title: 'Pasja i zaangażowanie:',
            desc: 'Jesteśmy prawdziwymi miłośnikami samochodów. Każde auto traktujemy jak własne, dbając o najdrobniejsze detale. Nasza praca opiera się na rzetelności, precyzji i dążeniu do perfekcji. Nie ma dla nas rzeczy niemożliwych!'
        },
        {
            title: 'Profesjonalizm:',
            desc: 'Jesteśmy młodym zespołem, który stara się świadczyć usługi profesjonalnie. Dzięki temu możemy zaoferować Ci usługi na najwyższym poziomie.'
        },
        {
            title: 'Nowoczesność:',
            desc: 'Śledzimy najnowsze trendy i technologie w branży motoryzacyjnej, co pozwala nam sprostać nawet najbardziej wymagającym oczekiwaniom klientów.'
        }
    ]

    const Item = ({title, text}) => {
        return(
            <li className={styles.item}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.itemText}>{text}</p>
            </li>
        )
    }

    return(
        <>
            <Helmet>
                <title>O Nas - Mechamosta</title>
                <meta name="description" content="Niezależnie od tego, czy potrzebujesz szybkiej naprawy, przeglądu technicznego czy kompleksowej pielęgnacji swojego pojazdu, przyjeżdżamy do Ciebie." />
            </Helmet>
            <div className={styles.aboutUs}>
                <div className={styles.container}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>O nas</h2>
                    </div>
                    <p className={styles.text}>
                        Nasza firma to miejsce, gdzie pasja spotyka się z profesjonalizmem. Dążymy do tego, aby każdy nasz klient był w pełni zadowolony z naszych usług i mógł cieszyć się bezpiecznym i pięknym samochodem.
                        Dołącz do naszej rodziny Mechamosta i przekonaj się, że obsługa mobilna może być wygodna, profesjonalna i dostępna dla każdego!
                        <br /><span>Co nas wyróżnia? </span>
                    </p>
                    <ul className={styles.list}>
                        {ListConfiguration.map(item => <Item title={item.title} text={item.desc} />)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutUs;