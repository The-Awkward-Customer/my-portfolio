import React from 'react';
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
    standfirst?: string;
    title: string;
    text?: string;
   
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, standfirst,text }) => {
    return (
        <div className={styles.sectionHeaderRoot}>
            {standfirst && <p className={styles.sectionStandfirst}>{standfirst}</p>}
            <div className={styles.sectionHeaderTitleWrapper}>
            <h2 className={styles.sectionHeaderTitle}>{title}</h2>
            </div>
            {text && <p className={styles.sectionText}>{text}</p>}
        </div>
    );
};

export default SectionHeader;