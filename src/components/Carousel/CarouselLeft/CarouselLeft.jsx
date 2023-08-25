import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import rightArrow from "../../../assets/rightArrow.png";
import styles from '../Carousel.module.css';

const CarouselLeft = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning);
        });
    }, []);

    return (
        <div className={styles.left}>
            {!isBeginning && <img src={rightArrow} alt="right Arrow" onClick={() => swiper.slidePrev()} />}
        </div>
    );
};

export default CarouselLeft;
