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
            <h2 className={styles.sectionHeaderTitle}>{title}</h2>
            {text && <p className={styles.sectionSubText}>{text}</p>}
        </div>
    );
};

export default SectionHeader;