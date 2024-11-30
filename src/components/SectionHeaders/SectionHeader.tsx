import React from 'react';
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
    title: string;
    standfirst?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, standfirst }) => {
    return (
        <div className={styles.sectionHeaderRoot}>
            {standfirst && <p className={styles.sectionStandfirst}>{standfirst}</p>}
            <h2 className={styles.sectionHeader}>{title}</h2>
        </div>
    );
};

export default SectionHeader;