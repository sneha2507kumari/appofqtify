import React from 'react';
import styles from './Search.module.css';
import SearchIcon from '../../assets/SearchIcon.png';

function Search({placeholder,data}) {
  return (
    <>
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder="Search a album of your choice"/>
        <button className={styles.searchButton} type="submit">
            <img src={SearchIcon} alt="Search Icon" />
        </button>
    </form>
    </>
  );
}

export default Search;