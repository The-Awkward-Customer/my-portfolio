import React from 'react';
import styles from "./Footer.module.css"
import Icon from '../Icon/Icon';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footerRoot}>
            <div className={styles.footerContentWrapper}>
                <Icon iconName='placeholder' size='sm' color='primary' />
                <span className={styles.footerText}>Some text here</span>
            </div>
            <a href="https://your-link.com" className={styles.footerLink}>Github</a>
        </footer>
    );
};

export default Footer;