import {useParams} from "react-router-dom";
import styles from './SendStatus.module.scss'
import {Link} from 'react-router-dom'
import sendMail from "../../utils/sendMail";

const SendStatus = () => {
    const { id } = useParams();
    const getEmailStorage = JSON.parse(localStorage.getItem('basicInformation')).email
    const SuccessSend = () => {

        const resetFormLocalStorage = () => {
            localStorage.removeItem('basicInformation');
            localStorage.removeItem('car');
            localStorage.removeItem('activeIndex');
        }

        return(
            <div className={`${styles.successSend} ${styles.send}`}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.title}>Formularz został wysłany!</h3>
                </div>
                <div className={styles.sendEmail}>
                    <p className={styles.text}>Email został wysłany na: <span className={styles.email}>{getEmailStorage}</span></p>
                </div>
                <div className={styles.buttons}>
                    <Link to="/" onClick={resetFormLocalStorage} className={styles.back}>
                        Wróć do strony głównej
                    </Link>
                    <button className={styles.again} onClick={() => sendMail()}>
                        Wyślij ponownie
                    </button>
                </div>
            </div>
        )
    }

    const ErrorSend = () => {
        return(
            <div>

            </div>
        )
    }

    return(
        <div className={styles.sendStatus}>
            <div className={styles.container}>
                {id === 'sukces' ? <SuccessSend /> : <ErrorSend />}
            </div>
        </div>
    )
}

export default SendStatus;