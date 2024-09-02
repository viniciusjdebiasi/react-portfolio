'use client'
import React, { useState } from "react";

// import Swiper core and required modules
import { Navigation, Scrollbar, Autoplay, Zoom } from 'swiper/modules';

// Import Swiper React components 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/zoom'

import Image from "next/image";

import styles from './Certificates.module.css';

import html from '../../../public/certificates/html.png';
import css from '../../../public/certificates/css.png';
import react from '../../../public/certificates/react.png';
import js from '../../../public/certificates/js.png';

export default function CertificatesPage({ language }) {

    return (
        <div className={styles.main} id='certificates' >
            <div className={styles.certificates_container}>
                <h2 className={styles.page_title}>{language('headerCertifications')}</h2>

                <div className={styles.slide_container}>
                    <Swiper className={styles.estilo_swiper}
                        modules={[Navigation, Scrollbar, Autoplay, Zoom]} effect="coverflow"
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay 
                        Zoom
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className={styles.swiper_slide}><Image src={html} className={styles.img_swiper} /></SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}><Image src={css} className={styles.img_swiper} /></SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}><Image src={js} className={styles.img_swiper} /></SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}><Image src={react} className={styles.img_swiper} /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}