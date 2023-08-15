import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';
import Searchbar from '../Searchbar/Search';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <Searchbar/>
       <Button childern ="Give Feedback"/> 
    </nav>
  )
}

export default Navbar