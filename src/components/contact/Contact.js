import {Formik} from 'formik'
import styles from './Contact.module.scss'
import GetCar from "./GetCar";
import React, {useState, useEffect} from 'react'
import Basic from "./Basic";
import Details from "./Details";
import {MdArrowBack} from "react-icons/md";
import Summary from "./Summary";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import {Helmet} from "react-helmet";
import ContactInformation from './ContactInformation';
const Contact = () => {
    const[activeIndex, setActiveIndex] = useState(Math.floor(localStorage.getItem('activeIndex')));
    useEffect(() => {

    }, [])
    useEffect(() => {
        localStorage.setItem('activeIndex', JSON.stringify(activeIndex))
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [activeIndex])

    const ContactForm = () => {

        const initialData = {
            name: '',
            phoneNumber: '',
            email: '',
            typeLocation: -1,
            typeOfService: -1,
            brand: '',
            type: '',
            year: ''
        }

        const handleSubmit = () => {

        }



        return(
            <div className={styles.contactForm}>
                <div style={{margin: '38px 0 38px 0'}}>
                    {activeIndex !== 0 && <div onClick={() => setActiveIndex(prevState => prevState - 1)} className={styles.backLink}><MdArrowBack className={styles.backIcon} /> Wróć</div>}
                    <Basic isActive={activeIndex === 0} setActiveIndex={setActiveIndex} />
                    <GetCar isActive={activeIndex === 1} setActiveIndex={setActiveIndex} />
                    <Details isActive={activeIndex === 2} setActiveIndex={setActiveIndex} />
                    <Summary isActive={activeIndex === 3} setActiveIndex={setActiveIndex} />
                </div>
            </div>
        )
    }

    return(
        <>
            <Helmet>
                <title>Kontakt - Mechamosta</title>
                <meta name="description" content="Skontaktuj się z nami poprzez formularz kontatkowy lub dzowniąc na numer 453 454 696." />
            </Helmet>
            <div className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.contactTitleWrapper}>
                        <h2 className={styles.contactTitle}>Umów wizytę</h2>
                    </div>
                    <div>
                        <ContactForm />
                        <ContactInformation homepage={false} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact