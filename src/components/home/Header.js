import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {NavLink, Link} from 'react-router-dom'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './Header.module.scss'

import slide1 from '../../images/slider/slide1.webp'
import slide2 from '../../images/slider/slide2.webp'
import slide3 from '../../images/slider/slide3.webp'
import slide4 from '../../images/slider/slide4.webp'
const Header = () => {



    const Slide = ({mainTitle, text, textSecond , link, linkText}) => {

        return(
            <div className={styles.container}>
                <div className={styles.headerInformation}>
                    <h1 className={styles.mainTitle}>{mainTitle}</h1>
                    <p className={styles.text}>{text}</p><br/>
                    <p className={styles.text}>{textSecond}</p>
                    <Link className={styles.seeMore} to={link}>{linkText}</Link>
                </div>
            </div>
        )
    }

    return(
        <header className={styles.mainHeader}>
            <>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className={styles.mySwiper}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: `url(${slide1})`}}>
                        <Slide mainTitle="Mechamosta" text="Mechanik mobilno stacjonarny na terenie Łodzi" textSecond="Usługi detalingowe, oraz naprawcze" link="/o-nas" linkText="Zobacz więcej" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: `url(${slide2})`}}>
                        <Slide mainTitle="Dojazd na miejsce" text="Oferujemy dojazd do klienta na terenie Łodzi," textSecond="gdzie wykonamy naszą robotę" link="/" linkText="Zobacz więcej" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: `url(${slide4})`}}>
                        <Slide mainTitle="Mechanik" text="Oferujemy usługi mechanika" textSecond="w trosce o bezpieczeństwo i komfort naszych klientów" link="/uslugi" linkText="Zobacz więcej" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide} style={{ backgroundImage: `url(${slide3})`}}>
                        <Slide mainTitle="Detailing" text="Oferujemy usługi detailingu" textSecond="w trosce o czystość aut klientów" link="/uslugi" linkText="Zobacz więcej" />
                    </SwiperSlide>
                </Swiper>
            </>
        </header>
    )

}

export default Header;