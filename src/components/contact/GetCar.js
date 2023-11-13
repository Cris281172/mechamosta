import {Formik} from 'formik'
import {useState, useEffect} from 'react';
import CarConfig from "../../config/CarConfig";
import styles from './GetCar.module.scss'
import Select from 'react-select';
import * as Yup from "yup";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import NoMatchCar from "./NoMatchCar";
const ValidationSchema = {
    brand: Yup.string().required("Marka samochodu jest wymagana"),
    type: Yup.string().required('Model samochodu jest wymagany'),
    year: Yup.number().required('Rok samochodu jest wymagany').typeError('Należy podać rok').min(1990, 'Minimalny rok auta to 1990r').max(2023, 'Maksymalny rok auta to 2023r'),
}

const GetCar = ({isActive, setActiveIndex}) => {
    const[activeCars, setActiveCars] = useState([])
    const fuelType = CarConfig.fuel_type
    const transmission  = CarConfig.transmission
    const drive  = CarConfig.drive
    const getCatStorage = JSON.parse(localStorage.getItem('car'))
    const [isGetCarFormActive, setIsGetCarFormActive] = useState(getCatStorage === null ? false : true)
    const [loading, setLoading] = useState(false)
    const [isResults, setIsResults] = useState(null)
    const [ownData, setOwnData] = useState(false)
    const test = async (values) => {
        if(ownData){
            const car = {
                make: values.brand,
                model: values.type,
                year: values.year,
                fuel_type: values.fuelType,
                transmission: values.transmission,
                drive: values.drive
            }
            localStorage.setItem('car', JSON.stringify(car));
            setActiveCars([])
            setIsGetCarFormActive(true)
            setOwnData(false)
        }
        await setLoading(true)
        let fuelTypeValue = values.fuelType;
        let transmissionValue = values.transmission;
        let driveValue = values.drive
        if(getCatStorage !== null){
            for (const key in fuelType) {
                if (fuelType.hasOwnProperty(key) && fuelType[key] === values.fuelType) {
                    fuelTypeValue = key;
                    break;
                }
            }
            for (const key in transmission) {
                if (transmission.hasOwnProperty(key) && transmission[key] === values.transmission) {
                    transmissionValue = key;
                    break;
                }
            }
            for (const key in drive) {
                if (drive.hasOwnProperty(key) && drive[key] === values.drive) {
                    driveValue = key;
                    break;
                }
            }
        }
        await fetch(`https://api.api-ninjas.com/v1/cars?make=${values.brand}&limit=50&model=${values.type}&year=${values.year}&fuel_type=${fuelTypeValue}&transmission=${transmissionValue}&drive=${driveValue}`, {
            method: 'get',
            headers: { 'X-Api-Key': 'sJ22Ap6/8UDTrWwKNtHYLw==qpomaKa6auZvD5tp'},
            contentType: 'application/json',
        })
            .then(res => res.json())
            .then(res => {
                if(res.length !== 0){
                    setActiveCars(res)
                    setLoading(false)
                    setIsResults(true)
                }
                else{
                    setIsResults(false)
                    setLoading(false)
                }
            })
    }

    let initialData = {
        brand: '',
        type: '',
        year: '',
        fuelType: "",
        transmission: "",
        drive: ""
    }

    if(getCatStorage !== null){
        initialData = {
            brand: getCatStorage.make,
            type: getCatStorage.model,
            year: getCatStorage.year.toString(),
            fuelType: fuelType[getCatStorage.fuel_type],
            transmission: transmission[getCatStorage.transmission],
            drive: drive[getCatStorage.drive]
        }
    }

    const SelectWrapper = ({setValue, placeholder, options, label, value}) => {

        return(
            <div className={styles.selectWrapper}>
                <label className={styles.label}>{label}</label>
                <Select
                    className={styles.select}
                    onChange={setValue}
                    closeMenuOnSelect={false}
                    options={options}
                    placeholder={placeholder}
                    defaultValue={[value]}
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

    const CarLoop = ({name, value}) => {
        return(
            <li>
                {name}: {value}
            </li>
        )
    }

    const ActiveCarsLoop = () => {

        const chooseCar = (car) => {
            localStorage.setItem('car', JSON.stringify(car));
            setActiveCars([])
            setIsGetCarFormActive(true)
        }

        return(
            <div className={styles.activeCarsLoop}>
                {activeCars.map((car, index) => {
                    return(
                        <div className={styles.activeCar}>
                            <ul>
                                <CarLoop name="Marka" value={car.make} />
                                <CarLoop name="Model" value={car.model} />
                                <CarLoop name="Paliwo" value={fuelType[car.fuel_type]} />
                                <CarLoop name="Rok" value={car.year} />
                                <CarLoop name="Skrzynia biegów" value={transmission[car.transmission]} />
                                <CarLoop name="Napęd" value={drive[car.drive]} />
                            </ul>
                            <button onClick={() => chooseCar(car)}>Wybierz</button>
                        </div>

                    )
                })}
            </div>
        )
    }

    const fuelOptions = [
        { value: 'gas', label: fuelType['gas']},
        { value: 'diesel', label: fuelType['diesel']},
        { value: 'electricity', label: fuelType['electricity']}
    ]

    const transmissionOptions = [
        {value: 'm', label: transmission['m']},
        {value: 'a', label: transmission['a']}
    ]

    const driveOptions = [
        {value: 'fwd', label: drive['fwd']},
        {value: 'rwd ', label: drive['rwd']},
        {value: 'awd', label: drive['awd']},
    ]

    const ViewOfChooseCar = () => {

        const chooseOtherCar = () => {
            localStorage.removeItem('car')
            setIsGetCarFormActive(false);
        }

        return(
            <div className={styles.viewOfChooseCar}>
                <div className={styles.listWrapper}>
                    <ul className={styles.list}>
                        <h2 className={styles.title}>Informacje o samochodzie</h2>
                        <li className={styles.item}>Marka: {getCatStorage.make ||  <Skeleton  />}</li>
                        <li className={styles.item}>Model: {getCatStorage.model}</li>
                        <li className={styles.item}>Rok: {getCatStorage.year}</li>
                        <li className={styles.item}>Paliwo: {fuelType[getCatStorage.fuel_type]}</li>
                        <li className={styles.item}>Skrzynia biegów: {transmission[getCatStorage.transmission]}</li>
                        <li className={styles.item}>Napęd: {drive[getCatStorage.drive]}</li>
                        <button className={styles.change} onClick={chooseOtherCar}>Zmien</button>
                    </ul>
                    <div className={styles.buttons}>
                        <button className={styles.next} onClick={() => setActiveIndex(2)}>Przejdź dalej</button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            {isActive &&
            <div className={styles.getCar}>
                <h3 className={styles.getCarTitle}>{ownData ? 'Dodaj swój samochód (2/4)' : 'Wyszukaj swój samochód(2/4)'}</h3>
                <div>
                    {!isGetCarFormActive ?
                        <Formik
                            onSubmit={(values) => test(values)}
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
                                <form onSubmit={handleSubmit} className={styles.getCarForm}>
                                    <div className={styles.topInformation}>
                                        <div className={styles.inputWrapper}>
                                            <label className={styles.label}>Marka</label>
                                            <input placeholder="Wpisz markę samochodu np. Audi, Volkswagen, Volvo" className={errors.brand ? `${styles.input} ${styles.inputErrorActive}` : styles.input} onChange={handleChange} onBlur={handleBlur} value={values.brand} name="brand" />
                                            <p className={errors.brand ? `${styles.errorMessage} ${styles.errorMessageActive}` : styles.errorMessage}>{errors.brand}</p>
                                        </div>
                                        <div className={styles.inputWrapper}>
                                            <label className={styles.label}>Model</label>
                                            <input placeholder="Wpisz swój model samochodu np. A4, Passat, S60" className={errors.type ? `${styles.input} ${styles.inputErrorActive}` : styles.input} onChange={handleChange} onBlur={handleBlur} value={values.type} name="type" />
                                            <p className={errors.type ? `${styles.errorMessage} ${styles.errorMessageActive}` : styles.errorMessage}>{errors.type}</p>
                                        </div>
                                        <div className={styles.inputWrapper}>
                                            <label className={styles.label}>Rok</label>
                                            <input placeholder="Wpisz rok samochodu np. 2004, 2014" className={errors.year ? `${styles.input} ${styles.inputErrorActive}` : styles.input} onChange={handleChange} onBlur={handleBlur} value={values.year} name="year" />
                                            <p className={errors.year ? `${styles.errorMessage} ${styles.errorMessageActive}` : styles.errorMessage}>{errors.year}</p>
                                        </div>
                                    </div>
                                    <div className={styles.bottomInformation}>
                                        <SelectWrapper setValue={(e) => setFieldValue('fuelType', e.value)} placeholder="Wybierz rodzaj paliwa" options={fuelOptions} label="Paliwo" value={fuelOptions.find(obj => obj.label === values.fuelType)}/>
                                        <SelectWrapper setValue={(e) => setFieldValue('transmission', e.value)} placeholder="Wybierz rodzaj skrzyni biegów" options={transmissionOptions} label="Skrzynia biegów" value={transmissionOptions.find(obj => obj.label === values.transmission)}/>
                                        <SelectWrapper setValue={(e) => setFieldValue('drive', e.value)} placeholder="Wybierz rodzaj napędu" options={driveOptions} label="Napęd" value={driveOptions.find(obj => obj.label === values.drive)}/>
                                    </div>
                                    <div className={styles.searchCarButtonWrapper}>
                                        <button className={styles.searchCarButton} type="submit">
                                            {loading ? 'Ładowanie' : (ownData ? 'Dodaj samochód' : 'Wyszukaj pojazd')}
                                        </button>
                                    </div>

                                </form>
                            )}
                        </Formik>
                    :
                        <>
                            <ViewOfChooseCar />
                        </>
                    }

                </div>
                {isResults === false ? (isGetCarFormActive ? '' : <NoMatchCar setOwnData={setOwnData} setIsResults={setIsResults} />) : <ActiveCarsLoop />}

            </div>
            }
        </>


    )
}

export default GetCar;