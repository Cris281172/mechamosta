import styles from './NoMatchCar.module.scss'
import { BiSad } from "react-icons/bi";
const NoMatchCar = ({setOwnData, setIsResults}) => {

    const completeData = () => {
        setOwnData(true)
        setIsResults(true)
    }
    return(
        <div className={styles.noMatchCar}>
            <BiSad className={styles.icon} />
            <h5 className={styles.title}>Brak rekordów!</h5>
            <p className={styles.text}>Czy chcesz uzupełnić dane samemu?</p>
            <button className={styles.complete} onClick={completeData}>Uzupełnij</button>
        </div>
    )
}

export default NoMatchCar;