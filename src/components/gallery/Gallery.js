import styles from './Gallery.module.scss'
import {Link, useLocation} from 'react-router-dom'
import photo1 from '../../images/gallery/photo-1.webp'
import photo3 from '../../images/gallery/photo-3.webp'
import photo4 from '../../images/gallery/photo-4.webp'
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import {Helmet} from "react-helmet";


const slideConf = [
    {
        image: photo1,
    },
    {
        image: photo3,
    },
    {
        image: photo4,
    },

]


const Gallery = () => {
    const location = useLocation()
    const[isHome, setIsHome] = useState(true)
    useEffect(() => {
        if(location.pathname === '/'){
            setIsHome(true)
        }
        else{
            setIsHome(false)
        }
    }, []);
    const Slider = () => {

        return(
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                    250: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    650: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
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
                {slideConf.map(slide => (
                    <SwiperSlide className={styles.swiperSlide} style={{backgroundImage: `url(${slide.image})`}} />
                ))}
            </Swiper>
        )
    }

    return(
        <>
            {isHome ? '' :
                <Helmet>
                    <title>Galeria - Mechamosta</title>
                    <meta name="description" content="Zobacz zdjęcia wykonywanych usług." />
                </Helmet>
            }
            <div className={isHome ? `${styles.gallery}` : `${styles.gallery} ${styles.page}`}>
                <div className={styles.galleryTitleWrapper}>
                    <h2 className={styles.galleryTitle}>Galeria</h2>
                </div>
                <Slider />
            </div>
        </>
    )
}

export default Gallery;