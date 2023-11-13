import { useParams } from 'react-router-dom';
import styles from './ChooseService.module.scss'
import {Link} from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import {useEffect, useState} from 'react';
import interiorCleaning from '../../images/detailing/interior-cleaning.webp'
import carPolishing from '../../images/detailing/car-polishing.webp'
import brakeDiscs from '../../images/mechanic/brake-discs.webp'
import brakePads from '../../images/mechanic/brake-pads.webp'
import sparkPlugs from '../../images/mechanic/spark-plugs.webp'
import filters from '../../images/mechanic/filters.webp'
import oil from '../../images/mechanic/oil.webp'
import accumulator from '../../images/mechanic/accumulator.webp'
import {Helmet} from "react-helmet";

const Text = {
    detailing: {
        mainTitle: "Usługi detailingu",
        variants: [
            {
                title: "Czyszecznie Wnętrza",
                imageSrc: interiorCleaning,
                desc: "Zachęcamy do skorzystania z naszej usługi czyszczenia wnętrza samochodu, która przywróci Twojemu pojazdowi pierwotny blask i świeżość. Nasz doświadczony zespół specjalistów zadbają o każdy detal, gwarantując, że Twój samochód będzie prezentować się jak nowy.",
                actions: ['wyjęcie dywaników i odkurzanie wnętrza pojazdu', "mycie plastików", "mycie szyb (wewnątrz)"],
                carType: {
                    small: {
                        title: "Auto małe",
                        price: 100,
                        time: 1.5,
                    },
                    medium:{
                        title: "Auto średnie",
                        time: 2,
                        price: 150
                    },
                    big: {
                        title: "Auto duże",
                        time: 3,
                        price: 200
                    }
                }
            },
            {
                title: "Polerowanie samochodu",
                imageSrc: carPolishing,
                desc: "Zapewnij swojemu samochodowi blask i połysk, jak w dniu, gdy wyjechał z salonu, dzięki naszej usłudze polerowania auta. Nasz doświadczony zespół specjalistów używa najnowocześniejszych technik i wysokiej jakości środków polerskich, aby przywrócić Twojemu pojazdowi jego pierwotne piękno.",
                actions: ['nałożenie na samochodu wosku naturalnego', "polerowanie auta"],
                carType: {
                    small: {
                        title: "Auto małe",
                        price: 150,
                        time: 1.5,
                    },
                    medium:{
                        title: "Auto średnie",
                        time: 2,
                        price: 200
                    },
                    big: {
                        title: "Auto duże",
                        time: 3,
                        price: 250
                    }
                }
            },
        ]
    },
    mechanik: {
        mainTitle: "Usługi mechanika",
        variants: [
            {
                title: "Wymiana tarcz hamulcowych",
                imageSrc: brakeDiscs,
                desc: "Nasz serwis oferuje profesjonalną usługę wymiany tarcz hamulcowych dla Twojego pojazdu. Dzięki naszym doświadczonym mechanikom oraz wysokiej jakości częściom zapewniamy skuteczną i bezpieczną wymianę, która poprawi wydajność hamowania Twojego samochodu. Zadbaj o swoje bezpieczeństwo na drodze i skorzystaj z naszej szybkiej i solidnej usługi wymiany tarcz hamulcowych.",
                actions: ['zdjęcie starych tarcz hamulcowych', "założenie nowych tarcz hamulcowych"],
                price: 100,
                priceInfo: 'za oś',
                time: 1.5
            },
            {
                title: "Wymiana klocków hamulcowych",
                imageSrc: brakePads,
                desc: "Zapewnij sobie pewność na drodze dzięki naszej usłudze wymiany klocków hamulcowych. Nasz zespół doświadczonych mechaników dokładnie i sprawnie wymieni zużyte klocki na wysokiej jakości nowe części. Dzięki temu zyskasz optymalną skuteczność hamowania i komfort jazdy. Zaufaj nam i ciesz się bezpieczeństwem podczas każdej podróży.",
                actions: ["zdjęcie starych klocków hamulcowych", "założenie nowych klocków hamulcowych"],
                price: 100,
                priceInfo: 'za oś',
                time: 1.5
            },
            {
                title: "Wymiana świec zapłonowych",
                imageSrc: sparkPlugs,
                desc: "Nasz serwis oferuje szybką i profesjonalną usługę wymiany świec zapłonowych. Dbamy o sprawność Twojego silnika, dlatego nasz zespół wykwalifikowanych mechaników zadba o precyzyjną instalację wysokiej jakości świec zapłonowych. Poprawiamy osiągi Twojego pojazdu i zapewniamy płynniejszy rozruch. Zaufaj nam, by Twój samochód pracował bezawaryjnie i zawsze dostarczał pełnej mocy.",
                actions: ['wyjęcie dywaników i odkurzanie wnętrza pojazdu', "mycie plastików", "mycie szyb (wewnątrz)"],
                price: 15,
                priceInfo: 'za jedną',
                time: 1
            },
            {
                title: "Wymiana filtrów",
                imageSrc: filters,
                desc: "Oferujemy usługę szybkiej wymiany filtrów, która poprawi wydajność i żywotność Twojego pojazdu. Nasz doświadczony zespół mechaników zadba o profesjonalne zastąpienie filtrów powietrza, oleju i paliwa, co wpłynie na lepsze osiągi oraz zmniejszy zużycie paliwa. Zapewnij swojemu samochodowi odpowiednią pielęgnację dzięki naszej usłudze wymiany filtrów.",
                actions: ['wyjęcie filtrów', 'założenie nowych filtrów'],
                price: 50,
                time: 1.5
            },
            {
                title: "Wymiana filtru oleju i oleju silnikowego",
                imageSrc: oil,
                desc: "Nasza usługa wymiany oleju silnikowego pomoże zachować sprawność i trwałość Twojego pojazdu. Zespół naszych wykwalifikowanych mechaników zadba o szybką i skuteczną wymianę oleju, używając tylko wysokiej jakości produktów. Zaufaj nam, by Twój silnik pracował płynnie i dłużej zachował swoją wydajność. Optymalizuj koszty eksploatacji i umów się na wymianę oleju już teraz!",
                actions: ['spuszczenie starego oleju', 'wymiana filtru oleju', 'wlanie nowego oleju'],
                price: 60,
                time: 1
            },
            {
                title: "Wymiana akumulatora",
                imageSrc: accumulator,
                desc: "Nasza usługa wymiany akumulatora to kluczowy krok w dbaniu o sprawność i niezawodność Twojego pojazdu. Dzięki naszemu doświadczonemu zespołowi mechaników, możesz być pewien, że Twój pojazd będzie gotowy do drogi w krótkim czas",
                actions: ['wyjęcie starego akumulatora', 'założenie nowego akumulatora'],
                price: 40,
                time: 0.5
            },
        ]
    }
}

const VariantsLoop = ({id, activeCarVariant}) =>{

    return(
        <>
            {Text[id].variants.map((variants, index) => (
                <div className={styles.serviceItem}>
                    <div className={styles.leftSide}>
                        <h3 className={styles.serviceItemTitle}>{variants.title} {id !== 'mechanik' && <>({variants.carType[activeCarVariant].title})</>}</h3>
                        <div className={styles.description}>
                            <h4 className={styles.descriptionTitle}>Opis:</h4>
                            <p className={styles.descriptionText}>
                                {variants.desc}
                            </p>
                        </div>

                        <div className={styles.activities}>
                            <h4 className={styles.activitiesTitle}>Czynności:</h4>
                            <ul>
                                {variants.actions.map((action, index) => <li className={styles.activitiesItem}>- {action}</li>)}
                            </ul>
                        </div>
                        <div className={styles.workTime}>
                            <h4 className={styles.workTimeTitle}>Czas wykonania: <span className={styles.workTimeSpan}>około {id !== 'mechanik' ? variants.carType[activeCarVariant].time : variants.time} h</span></h4>
                        </div>
                        <div className={styles.price}>
                            <h4 className={styles.priceTitle}>Cena: <span className={styles.priceSpan}>od {id !== 'mechanik' ? variants.carType[activeCarVariant].price : variants.price} zł {variants.priceInfo}</span></h4>
                        </div>
                        <Link to="/kontakt" className={styles.visitButton}>Umów się</Link>
                        <div className={styles.drive}>
                            <p className={styles.top}>Dojazd tylko na terenie Łodzi!</p>
                            <p className={styles.bottom}>Koszt dojazdu: 2zł/1km od Armii Krajowej</p>
                        </div>
                    </div>
                    <img src={variants.imageSrc} className={styles.serviceItemImage} alt="Czyszczenie wnętrza zdjęcie" />
                </div>
            ))}
        </>

    )
}

const SoonMore = () => {
    return(
        <div className={styles.soonMore}>Niedługo pojawi się więcej!</div>
    )
}

const ChooseService = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    const { id } = useParams();

    const [activeCarVariant, setActiveCarVariant] = useState('small')

    return(
        <>
            <Helmet>
                <title>Usługi {id.slice(0, 1).toUpperCase() + id.slice(1)} - Mechamosta</title>
                <link rel="canonical" href={`https://mechamosta.pl/uslugi/${id}`} />
            </Helmet>
            <div className={styles.chooseService}>
                <div className={styles.container}>
                    <Link to="/uslugi" className={styles.backLink}><MdArrowBack className={styles.backIcon} /> Wróć</Link>
                    <div className={styles.chooseServiceTitleWrapper}>
                        <h1 className={styles.chooseServiceTitle}>{Text[id].mainTitle}</h1>
                    </div>
                    {id !== 'mechanik' &&
                        <nav className={styles.carVariantNavigation}>
                            <ul className={styles.carVariantList}>
                                <li className={styles.carVariantItem}>
                                    <button className={activeCarVariant === 'small' ? `${styles.carVariantButton} ${styles.active}` : `${styles.carVariantButton}`} onClick={(e) => setActiveCarVariant(e.target.dataset.carVariantId)} data-car-variant-id="small" >Auto małe</button>
                                </li>
                                <li className={styles.carVariantItem}>
                                    <button className={activeCarVariant === 'medium' ? `${styles.carVariantButton} ${styles.active}` : `${styles.carVariantButton}`} onClick={(e) => setActiveCarVariant(e.target.dataset.carVariantId)} data-car-variant-id="medium">Auto średnie</button>
                                </li>
                                <li className={styles.carVariantItem}>
                                    <button className={activeCarVariant === 'big' ? `${styles.carVariantButton} ${styles.active}` : `${styles.carVariantButton}`} onClick={(e) => setActiveCarVariant(e.target.dataset.carVariantId)} data-car-variant-id="big">Auto duże</button>
                                </li>
                            </ul>
                        </nav>
                    }
                    <VariantsLoop id={id} activeCarVariant={activeCarVariant} />
                    <SoonMore />
                </div>
            </div>
        </>

    )
}

export default ChooseService;