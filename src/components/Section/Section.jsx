import { Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from '../Section/Section.module.css';
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../BasicTabs/BasicTabs';

const Section = ({ title, data=[], type,filteredData=null,filteredDataValues=[],value ,handleChange}) => {
  const [carouselToggle, setCarouselToggle] = useState(true);


  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className={styles.headers}>
        <h3>{title}</h3>
        {type==="album" ?
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? 'Show All' : 'Collapse'}
        </h4>:null}
      </div>
      {type==="song" ?<BasicTabs value={value} handleChange={handleChange}/>:null}
      {data.length === 0 ? (
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrappers}>
          {carouselToggle ? (
            <Carousel data={data} renderCardComponent={(data)=> <Card data={data} type={type}/>}/>
          ) : (
            <div className={styles.wrapper}>
              {data.map((items) => (
                <Card data={items} type={type} key={items.id} />
              ))}
            </div>
            
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
