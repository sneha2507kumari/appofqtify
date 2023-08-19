import React from 'react';
import styles from "./Card.module.css";
import bollywoodhits from "../../assets/bollywoodhits.png";

const Card = () => {
  return (
    <div>
    <h3 className={styles.headingstop}>Top Albums</h3>
    <div className={styles.content}>
      <div className={styles.card}>
        <div className={styles.subcardimage}>
          <img src={bollywoodhits} alt="bollyhoodhits" width={159} />
        </div>
        <div className={styles.followers}>
          <h3>100M follows</h3>
        </div>
      </div>
      <h3 className={styles.title}>New Bollywood</h3>
    </div>
  </div>
        
  )
}

export default Card;