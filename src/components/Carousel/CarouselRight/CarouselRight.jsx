import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import leftArrow from "../../../assets/leftArrow.png";
import styles from '../Carousel.module.css';

const CarouselRight = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd);
        });
    }, []);

    return (
        <div className={styles.right}>
            {!isEnd && <img src={leftArrow} alt="left Arrow" onClick={() => swiper.slideNext()} />}
        </div>
    );
};

export default CarouselRight;
