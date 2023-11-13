import styles from './Details.module.scss'
import {Formik} from "formik";
import * as Yup from 'yup';
import Select from "react-select";

const ValidationSchema = {
    address: Yup.string().required("Podanie adresu jest wymagane!")
}


const Details = ({isActive, setActiveIndex}) => {
    const detailsInformation = JSON.parse(localStorage.getItem('detailsInformation'))

    let initialData = {
        address: '',
        place: "",
        service: '',
        mechanic: [],
        ownItems: ''
    }

    if(detailsInformation !== null){
        initialData = {
            place: detailsInformation.place,
            service: detailsInformation.service,
            mechanic: detailsInformation.mechanic,
            ownItems: detailsInformation.ownItems,
        }
    }
    const handleSubmit = (values) => {
        setActiveIndex(prevState => prevState + 1)
        localStorage.setItem('detailsInformation', JSON.stringify(values))
    }

    const SelectWrapper = ({setValue, placeholder, options, label, value, multi = false}) => {

        return(
            <div className={styles.selectWrapper}>
                <label className={styles.label}>{label}</label>
                <Select
                    className={styles.select}
                    onChange={setValue}
                    closeMenuOnSelect={false}
                    options={options}
                    placeholder={placeholder}
                    value={[value]}
                    isOptionDisabled={(option) => option.disabled}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: '16px',
                        colors: {
                            ...theme.colors,
                            primary25: '#f63f3f',
                            primary: '#f63f3f',
                        },
                    })}
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 2 }) }}
                />
            </div>

        )
    }

    const SelectMultiWrapper = ({ setValue, options, value, label, placeholder }) => {
        return (
            <div className={styles.selectWrapper}>
                <label className={styles.label}>{label}</label>
                <Select
                    className={styles.select}
                    onChange={setValue}
                    closeMenuOnSelect={false}
                    options={options}
                    isMulti
                    value={value}
                    placeholder={placeholder}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: '16px',
                        colors: {
                            ...theme.colors,
                            primary25: '#f63f3f',
                            primary: '#f63f3f',
                        },
                    })}
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 2 }) }}
                />
            </div>
        );
    };

    const placeOptions = [
        { value: 'zdalnie', label: 'Zdalnie'},
        { value: 'stacjonarnie', label: 'Stacjonarnie', disabled: true},
    ]

    const serviceOptions = [
        { value: 'detailing', label: 'Detailing'},
        { value: 'mechanik', label: 'Mechanik'},
    ]

    const mechanicOptions = [
        { value: 'Wymiana tarcz hamulcowych (2)', label: 'Wymiana tarcz hamulcowych (2)'},
        { value: 'Wymiana tarcz hamulcowych (4)', label: 'Wymiana tarcz hamulcowych (4)'},
        { value: 'Wymiana kloców hamulcowych (2)', label: 'Wymiana kloców hamulcowych (2)'},
        { value: 'Wymiana kloców hamulcowych (4)', label: 'Wymiana kloców hamulcowych (4)'},
        { value: 'Wymiana świec zapłonowych', label: 'Wymiana świec zapłonowych'},
        { value: 'Wymiana filtrów', label: 'Wymiana filtrów'},
        { value: 'Wymiana filtru oleju i oleju silnikowego ', label: 'Wymiana filtru oleju i oleju silnikowego '},
        { value: 'Wymiana akumulatora ', label: 'Wymiana akumulatora '},
    ]

    const detailingOptions = [
        {value: 'Czyszecznie wnętrza', label: 'Czyszecznie wnętrza'},
        {value: 'Polerowanie samochodu', label: 'Polerowanie samochodu'}
    ]

    const ownItemsOptions = [
        { value: 'tak', label: 'Tak'},
        { value: 'nie', label: 'Nie'},
    ]

    return(
        <>
            {isActive &&
            <div className={styles.details}>
                <h3 className={styles.detailsTitle}>Dodaj szczegółowe informacje (3/4)</h3>
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
                          handleBlur,
                          setFieldValue
                      }) => (

                        <form className={styles.detailsForm} onSubmit={handleSubmit}>
                            <div className={styles.labelWrapper}>
                                <SelectWrapper setValue={(e) => setFieldValue('place', e.value)} placeholder="Stacjonarnie/Zdalnie" options={placeOptions} label="Wybierz miejsce usługi" value={placeOptions.find(obj => obj.label.toLocaleLowerCase() === values.place)}/>
                                {values.place === 'zdalnie' &&
                                <div className={styles.inputWrapper}>
                                    <label className={styles.label}>Podaj adres</label>
                                    <input className={errors.address ? `${styles.input} ${styles.inputErrorActive}` : styles.input} placeholder="Wpisz adres" onChange={handleChange} onBlur={handleBlur} value={values.address} name="address" />
                                    <p className={errors.address ? `${styles.errorMessage} ${styles.errorMessageActive}` : styles.errorMessage}>{errors.address}</p>
                                </div>
                                }
                            </div>
                            <div className={styles.labelWrapper}>
                                <SelectWrapper setValue={(e) => setFieldValue('service', e.value)} placeholder="Detailing/Mechanik" options={serviceOptions} label="Wybierz rodzaj usługi" value={serviceOptions.find(obj => obj.label.toLocaleLowerCase() === values.service)}/>
                                {values.service === 'mechanik' && <SelectMultiWrapper options={mechanicOptions} setValue={(e) => setFieldValue('mechanic', e.map(option => option.value))} value={mechanicOptions.filter(obj => values.mechanic.includes(obj.value))} label="Wybierz usługę/usługi" placeholder="Wymiana kloców hamulcowych/Wymiana świec itp" />}
                                {values.service === 'detailing' && <SelectMultiWrapper options={detailingOptions} setValue={(e) => setFieldValue('mechanic', e.map(option => option.value))} value={detailingOptions.filter(obj => values.mechanic.includes(obj.value))} label="Wybierz usługę/usługi" placeholder="Czyszecznie wnętrza/Polerowanie samochodu itp" />}
                                {values.service === 'mechanik' && <SelectWrapper setValue={(e) => setFieldValue('ownItems', e.value)} placeholder="Tak/Nie" options={ownItemsOptions} label="Czy posiadasz własne części?" value={ownItemsOptions.find(obj => obj.label.toLocaleLowerCase() === values.ownItems)}/>}
                            </div>
                            <div className={styles.addDetailsButtonWrapper}>
                                <button type="submit" className={styles.addDetailsButton}>Dodaj szczegółowe informacje</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            }
        </>


    )
}

export default Details;