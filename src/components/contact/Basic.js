import {Formik} from "formik";
import styles from "./Basic.module.scss";
import * as Yup from 'yup';

const ValidationSchema = {
    name: Yup.string().required("Podanie imienia jest wymagane"),
    surname: Yup.string().required('Podanie nazwiska jest wymagane'),
    phone: Yup.string().matches(/^\d{9}$/, 'Numer telefonu musi składać się z dokładnie 9 cyfr').required('Podanie numeru telefonu jest wymagane'),
    email: Yup.string().email('To nie wygląda jak email').required('Podanie emailu jest wymagane')
}

const Basic = ({isActive, setActiveIndex}) => {
    const handleSubmit = (values) => {
        localStorage.setItem('activeIndex', '1')
        localStorage.setItem('basicInformation', JSON.stringify(values))
        setActiveIndex(1)
    }
    const basicInformationStorage = JSON.parse(localStorage.getItem('basicInformation'))
    let initialData = {
        name: '',
        surname: '',
        phone: '',
        email: '',
    }
    if(basicInformationStorage !== null){
        initialData = {
            name: basicInformationStorage.name,
            surname: basicInformationStorage.surname,
            phone: basicInformationStorage.phone,
            email: basicInformationStorage.email,
        }
    }


    return(
        <>
            {isActive &&
                <div className={styles.basic}>
                    <h3 className={styles.basicTitle}>Dodaj podstawowe informacje (1/4)</h3>
                    <Formik
                        onSubmit={(values) => handleSubmit(values)}
                        initialValues={initialData}
                        validationSchema={Yup.object().shape(ValidationSchema)}
                    >
                        {({
                              errors,
                              touched,
                              handleSubmit,
                              values,
                              handleChange,
                              handleBlur
                          }) => (
                            <form className={styles.basicForm} onSubmit={handleSubmit}>
                                <div className={styles.basicFormGrid}>
                                    <div className={styles.inputWrapper}>
                                        <label className={styles.label}>Imię</label>
                                        <input type="text" placeholder="Podaj imię" className={errors.name ? `${styles.input} ${styles.inputErrorActive}` : styles.input} onChange={handleChange} onBlur={handleBlur} name="name" value={values.name}/>
                                        <p className={errors.name ? `${styles.errorMessage} ${styles.errorMessageActive}` : styles.errorMessage}>{errors.name}</p>
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <label className={styles.label}>Nazwisko</label>
                                        <input type="text" placeholder="Podaj nazwisko" className={errors.surname ? `${styles.input} ${styles.inputErrorActive}` : styles.input} onChange={handleChange} onBlur={handleBlur} name="surname" value={values.surname}/>
                                        <p className={errors.surname ? `${styles.errorMessage} ${styles.errorMessageActive}` : styles.errorMessage}>{errors.surname}</p>
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <label className={styles.label}>Numer telefonu</label>
                                        <input type="tel" maxLength="9" placeholder="Podaj numer telefonu" className={errors.phone ? `${styles.input} ${styles.inputErrorActive}` : styles.input} onChange={handleChange} onBlur={handleBlur} name="phone" value={values.phone}/>
                                        <p className={errors.phone ? `${styles.errorMessage} ${styles.errorMessageActive}` : styles.errorMessage}>{errors.phone}</p>
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <label className={styles.label}>Email</label>
                                        <input type="email" placeholder="Podaj email" className={errors.email ? `${styles.input} ${styles.inputErrorActive}` : styles.input} onChange={handleChange} onBlur={handleBlur} name="email" value={values.email}/>
                                        <p className={errors.email ? `${styles.errorMessage} ${styles.errorMessageActive}` : styles.errorMessage}>{errors.email}</p>
                                    </div>
                                </div>
                                <div className={styles.nextStepButtonWrapper}>
                                    <button className={styles.nextStepButton}>
                                        Przejdź dalej
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            }
        </>
    )
}

export default Basic;