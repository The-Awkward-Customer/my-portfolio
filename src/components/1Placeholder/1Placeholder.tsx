import React from 'react';
import styles from "./Placeholder.module.css"

interface PlaceholderProps  {
    optionalText?: string
}

const Placeholder: React.FC<PlaceholderProps> = ({optionalText = "Placeholder"}) => {
    return (
        <div className={styles.placeholderContainer}>
            <p className={styles.placeholderText}>{optionalText}</p>
        </div>
    );
};

export default Placeholder;