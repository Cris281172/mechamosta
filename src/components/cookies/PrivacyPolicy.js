import {Helmet} from "react-helmet";
import styles from "./PrivacyPolicy.module.scss";
import React from "react";
import PrivacyPolicyConfig from "../../config/PrivacyPolicyConfig";

const PrivacyPolicy = () => {
    const privacyPolicyConfig = PrivacyPolicyConfig

    const Item = ({config}) => {
        return(
            <ul>
                <h4>{config.title}</h4>
                {config.items.map(el => <li>- {el.text}</li>)}
            </ul>
        )
    }

    return(
        <>
            <Helmet>
                <title>Polityka prywatności - Mechamosta</title>
                <meta name="description" content="Niezależnie od tego, czy potrzebujesz szybkiej naprawy, przeglądu technicznego czy kompleksowej pielęgnacji swojego pojazdu, przyjeżdżamy do Ciebie." />
            </Helmet>
            <div className={styles.privacyPolicy}>
                <div className={styles.container}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>Polityka Prywatności</h2>
                    </div>
                    <div>
                        {privacyPolicyConfig.map(el => <Item config={el} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy