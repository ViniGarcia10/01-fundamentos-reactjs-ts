import React from 'react';
import styles from './Header.module.css';
import IgniteLogo from '../../assets/ignite-logo.svg';

function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Ignite" />
            <strong >Ignite Feed</strong>
        </header>

    );
}

export default Header;