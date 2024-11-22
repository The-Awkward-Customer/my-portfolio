// components/HeroText/HeroText.tsx

import React, { useRef } from 'react';
import styles from './HeroText.module.css';

interface HeroTextProps {
  onMouseMove: (movementData: { deltaX: number; deltaY: number; x: number; y: number }) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const HeroText: React.FC<HeroTextProps> = ({ onMouseMove, onMouseEnter, onMouseLeave }) => {
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { pageX, pageY } = event; // Use pageX/Y to account for scroll

    if (lastPositionRef.current) {
      const deltaX = pageX - lastPositionRef.current.x;
      const deltaY = pageY - lastPositionRef.current.y;
      onMouseMove({ deltaX, deltaY, x: pageX, y: pageY });
    }

    lastPositionRef.current = { x: pageX, y: pageY };
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
      <h1>Welcome to Our Website</h1>
      <p>Experience the interactive journey.</p>
    </div>
  );
};

export default HeroText;
