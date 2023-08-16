import React from 'react';
import headphone from "../../assets/headphone.png";
import styles from "../Hero/Hero.module.css";


const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
            <h1 className={styles.lines}>100 Thousand Songs,ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={headphone} alt="headphone" className={styles.headphone} width={212}/> 
      </div> 
    </div>
  )
}

export default Hero
