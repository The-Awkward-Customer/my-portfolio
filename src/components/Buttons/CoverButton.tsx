"use client"
import React, { useState, useEffect } from "react";
import styles from "./CoverButton.module.css";
import { useRouter } from "next/navigation";


interface CoverButtonProps {
    isDisabled?: boolean;
    children?: React.ReactNode;
    route: string | null;
}

const CoverButton: React.FC<CoverButtonProps> = ({ children, route }) => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
      }, []);
    
      function handleClick() {
        if (route && isMounted) {
          router.push(route);
        }
      }

    return(
        <button className={styles.coverButtonRoot} onClick={handleClick}>
            <div className={styles.coverButtonImageWrapper}>
            {children}
            </div>
        </button>
    )

}

export default CoverButton