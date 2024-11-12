"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./progressBar.module.css";

type progressBarProps = {
  children: React.ReactNode;
};

const ProgressBar: React.FC<progressBarProps> = ({ children }) => {
  const [progress, setProgress] = useState<number>(0);
  const [expanded, setExpanded] = useState<boolean>(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
      if (scrolled >= 100 && !expanded) {
        setExpanded(true);
      } else if (scrolled < 100 && expanded) {
        setExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]);

  return (
    <div className={styles.progressBarContainer}>
      <div
        ref={barRef}
        className={styles.progress}
        style={{
          width: `${progress}%`,
          height: expanded ? "44px" : "8px",
          transition: "height 0.2s ease-in-out",
        }}
      >
        {expanded && <div className={styles.childrenContainer}>{children}</div>}
      </div>
    </div>
  );
};

export default ProgressBar;
