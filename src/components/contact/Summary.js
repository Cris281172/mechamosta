import styles from './Summary.module.scss'
import CarConfig from "../../config/CarConfig";
import { BsFillSendFill } from "react-icons/bs";
import {useState} from "react";
import {Formik} from 'formik'
import { useNavigate  } from "react-router-dom";
import sendMail from "../../utils/sendMail";
const Summary = ({isActive, setActiveIndex}) => {
    const navigate = useNavigate();
    const getCarStorage = JSON.parse(localStorage.getItem('car'))
    const basicStorage = JSON.parse(localStorage.getItem('basicInformation'))
    const detailsStorage = JSON.parse(localStorage.getItem('detailsInformation'))
    const [loading, setLoading] = useState(false)
    const Element = ({name, value}) => {
        return(
            <h4 className={styles.element}>{name}: <span>{value}</span></h4>
        )
    }

    const BasicSummary = ({title, buttonTitle, index}) => {

        return(
            <div className={styles.summaryBox}>
                <div className={styles.top}>
                    <h3 className={styles.summaryBoxTitle}>{title}</h3>
                    <Element name="Imię" value={basicStorage.name} />
                    <Element name="Nazwisko" value={basicStorage.surname} />
                    <Element name="Telefon" value={basicStorage.phone} />
                    <Element name="Email" value={basicStorage.email} />
                </div>
                <div className={styles.backButtonWrapper}>
                    <button className={styles.backButton} onClick={() => setActiveIndex(index)}>Wróć do {buttonTitle}</button>
                </div>
            </div>
        )
    }

    const GetCarSummary = ({title, buttonTitle, index}) => {
        const drive  = CarConfig.drive
        const transmission  = CarConfig.transmission
        const fuelType = CarConfig.fuel_type

        return(
            <div className={styles.summaryBox}>
                <div className={styles.top}>
                    <h3 className={styles.summaryBoxTitle}>{title}</h3>
                    <Element name="Marka" value={getCarStorage.make} />
                    <Element name="Model" value={getCarStorage.model} />
                    <Element name="Rok" value={getCarStorage.year} />
                    <Element name="Napęd" value={drive[getCarStorage.drive]} />
                    <Element name="Skrzynia biegów" value={transmission[getCarStorage.transmission]} />
                    <Element name="Paliwo" value={fuelType[getCarStorage.fuel_type]} />
                </div>
                <div className={styles.backButtonWrapper}>
                    <button className={styles.backButton} onClick={() => setActiveIndex(index)}>Wróć do {buttonTitle}</button>
                </div>
            </div>
        )
    }

    const GetDetails = ({title, buttonTitle, index}) => {
        return(
            <div className={styles.summaryBox}>
                <div className={styles.top}>
                    <h3 className={styles.summaryBoxTitle}>{title}</h3>
                    <Element name="Miejsce wykonywania usługi" value={detailsStorage.place} />
                    <Element name="Adres" value={detailsStorage.address} />
                    <Element name="Typ wykonywanej usługi" value={detailsStorage.service} />
                    <Element name="Usługi" value={detailsStorage.mechanic.map(el => `${el} ,`)} />
                    <Element name="Własne części" value={detailsStorage.ownItems} />
                </div>
                <div className={styles.backButtonWrapper}>
                    <button className={styles.backButton} onClick={() => setActiveIndex(index)}>Wróć do {buttonTitle}</button>
                </div>
            </div>
        )
    }

    const handleSubmit = async () => {
        setLoading(true)
        if(await sendMail() === 200){
            setLoading(false)
            navigate('/kontakt/sukces')
        }
        else{
            setLoading(false)
            navigate('/kontakt/blad')
        }
    }


    return(
        <>
            {isActive &&
            <div className={styles.summary}>
                <h3 className={styles.summaryTitle}>Podsumowanie (4/4)</h3>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{}}
                >
                    {(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <div className={styles.summaryBoxWrapper}>
                                <BasicSummary title="Podstawowe informacje" buttonTitle="podstawowych informacji" index={0}/>
                                <GetCarSummary title="Wyszukaj swój samochód" buttonTitle="wyszukiwania swojego auta" index={1}/>
                                <GetDetails title="Informacje szczegółowe" buttonTitle="szczegółowych informacji" index={2} />
                            </div>
                            <div className={styles.sendFormWrapper}>
                                <button type="submit" className={styles.sendForm} disabled={loading}>{loading ? 'Wysyłam' : <>Wyślij formularz <BsFillSendFill className={styles.icon}/></>}</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            }

        </>
    )
}

export default Summary;