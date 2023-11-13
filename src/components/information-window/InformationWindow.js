import styles from './InformationWindow.module.scss'
import {useEffect, useState} from 'react'

const InformationWindow = () => {

    const[isWindowVisible, setIsWindowVisible] = useState(false)

    const stationaryDisable = () => {
        localStorage.setItem('stationaryDisable', 'true')
        setIsWindowVisible(false)
    }

    useEffect(() => {
        if(localStorage.getItem('stationaryDisable') === 'true'){
            setIsWindowVisible(false)
        }
        else{
            setIsWindowVisible(true)
        }
    }, [])

    return(
        <>
            {isWindowVisible &&
            <div className={styles.informationWindow}>
                <h5 className={styles.title}>Usługi stacjonarne są niedostępne!</h5>
                <button onClick={stationaryDisable} className={styles.understandButton}>Rozumiem</button>
            </div>
            }
        </>
    )
}

export default InformationWindow;