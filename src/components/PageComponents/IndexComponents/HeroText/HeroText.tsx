// components/HeroText/HeroText.tsx

import React, { useRef } from 'react';
import styles from './HeroText.module.css';

interface HeroTextProps {
  onMouseMove: (movementData: { deltaX: number; deltaY: number; clientX: number; clientY: number }) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const HeroText: React.FC<HeroTextProps> = ({ onMouseMove, onMouseEnter, onMouseLeave }) => {
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event; // Use clientX and clientY to align with fixed positioning

    if (lastPositionRef.current) {
      const deltaX = clientX - lastPositionRef.current.x;
      const deltaY = clientY - lastPositionRef.current.y;
      onMouseMove({ deltaX, deltaY, clientX, clientY });
    }

    lastPositionRef.current = { x: clientX, y: clientY };
  };

  const handleMouseLeaveEvent = () => {
    lastPositionRef.current = null;
    onMouseLeave();
  };

  return (
    <div
      className={styles.heroText}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeaveEvent}
      tabIndex={0} // Makes the div focusable for accessibility
      role="button" // Indicates it's interactive
      aria-label="Hero Text"
    >
      <span className={styles.heroTextIntro}>Hi, Hey, Hello</span>
      <h1 className={styles.heroText}>Hi, I&apos;m pete a design engineer with over a decade of experience helping companies define product strategy, scale market pressence and ship world class products.</h1>
      <p className={styles.heroTextParagraph}>Before all if this I trained as a chef, yet I still manage to burn my toast.</p>
    </div>
  );
};

export default HeroText;
