import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from '../Section/Section.module.css';
import Carousel from '../Carousel/Carousel';

const Section = ({ title, data, type,}) => {
  const [carouselToggle, setCarouselToggle] = useState(true);


  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className={styles.headers}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? 'Show All' : 'Collapse'}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrappers}>
          {carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((items) => (
                <Card data={items} type={type} key={items.id} />
              ))}
            </div>
          ) : (
            <Carousel data={data} renderCardComponent={(data)=> <Card data={data} type={type}/>}/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
