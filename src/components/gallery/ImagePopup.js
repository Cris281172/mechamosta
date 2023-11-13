import styles from './ImagePopup.module.scss'
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import {useRef} from "react";
const ImagePopup = ({imageSrc, setIsPopupActive}) => {
    const imagePopupWindow = useRef();

    const closeWindow = (e) => {
        if(e.target === imagePopupWindow.current){
            setIsPopupActive(false);
        }
    }

    return(
        <div className={styles.imagePopup} onClick={closeWindow} ref={imagePopupWindow}>
            <div className={styles.imagePopupWrapper}>
                <img src={imageSrc} alt="das" className={styles.image} />
                <HiMiniWrenchScrewdriver onClick={() => setIsPopupActive(false)} className={styles.closeIcon} />
            </div>

        </div>
    )
}

export default ImagePopup;