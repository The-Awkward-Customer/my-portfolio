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
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]);

  useEffect(() => {
    if (expanded && barRef.current) {
      barRef.current.style.height = "44px";
    }
  }, [expanded]);

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progress}
        style={{
          width: `${progress}%`,
          height: expanded ? "44px" : "8px",
          transition: "height 0.3s ease-in-out",
        }}
      />
      {expanded && <div className={styles.childrenContainer}>{children}</div>}
    </div>
  );
};

export default ProgressBar;
