import React from 'react';
import styles from "./Footer.module.css"
import Icon from '../Icon/Icon';




const Footer: React.FC = ({}) => {
    return (
        <footer className={styles.footerRoot}>
            <div className={styles.footerContentWrapper}>
                <Icon iconName='placeholder' size='sm' color='secondary' />
                <span className={styles.footerText}>No AI was harmed in the making of this site.</span>
            </div>
            <a href="https://github.com/The-Awkward-Customer" className={styles.footerLink}>Github</a>
        </footer>
    );
};

export default Footer;