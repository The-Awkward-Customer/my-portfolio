// components/HeroSection/HeroSection.tsx

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './heroSection.module.css';
import HeroText from '../heroText/HeroText';
import InteractiveImage from '../interactiveImage/InteractiveImage';
import throttle from 'lodash.throttle';

type ImageArray = string[];

interface HeroSectionProps {
  images: ImageArray;
}

const HeroSection: React.FC<HeroSectionProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false); // Tracks hover state

  // Refs to store cumulative movement and last cursor position
  const cumulativeDistanceRef = useRef<number>(0);
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null);

  // Ref for InteractiveImage positioning
  const interactiveImageRef = useRef<HTMLDivElement>(null);

  // Determine if the device is mobile based on viewport width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handler for mouse movement from HeroText (throttled)
  const handleMouseMove = useCallback(
    throttle((movementData: { deltaX: number; deltaY: number; clientX: number; clientY: number }) => {
      const { deltaX, deltaY, clientX, clientY } = movementData;

      // Calculate the distance moved using Euclidean distance
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      cumulativeDistanceRef.current += distance;

      // Update image index every 20px of cumulative movement
      if (cumulativeDistanceRef.current >= 20) {
        const movementIncrements = Math.floor(cumulativeDistanceRef.current / 20);
        const newIndex = (currentImageIndex + movementIncrements) % images.length;
        setCurrentImageIndex(newIndex);
        cumulativeDistanceRef.current %= 20; // Reset the cumulative distance
        console.log(`Image index updated to ${newIndex}`);
      }

      // Update the position of InteractiveImage
      if (interactiveImageRef.current && !isMobile) {
        interactiveImageRef.current.style.left = `${clientX}px`;
        interactiveImageRef.current.style.top = `${clientY}px`;
      }
    }, 10), // Throttle to every 10ms for higher responsiveness
    [currentImageIndex, images.length, isMobile]
  );

  // Handler for scroll event on mobile (throttled)
  const handleScroll = useCallback(
    throttle(() => {
      const scrollY = window.scrollY;
      const scrollIncrement = Math.floor(scrollY / 20);
      const newIndex = scrollIncrement % images.length;
      setCurrentImageIndex(newIndex);
      console.log(`Scroll position updated to scrollY=${scrollY}, newIndex=${newIndex}`);
    }, 100), // Throttle to every 100ms
    [images.length]
  );

  // Attach scroll listener if mobile
  useEffect(() => {
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, handleScroll]);

  // Handlers for hover state
  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log(`Hover started: isHovering=${true}`);
    cumulativeDistanceRef.current = 0; // Reset cumulative distance on hover
    lastPositionRef.current = null; // Reset last position to avoid offset
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log(`Hover ended: isHovering=${false}`);
    cumulativeDistanceRef.current = 0; // Reset cumulative distance when hover ends
    lastPositionRef.current = null; // Reset last position
    if (interactiveImageRef.current) {
      interactiveImageRef.current.style.left = `0px`;
      interactiveImageRef.current.style.top = `0px`;
    }
  };

  return (
    <section className={styles.heroSection}>
      
      {/* Conditionally render InteractiveImage only when hovering and not on mobile */}
      {!isMobile && isHovering && (
        <InteractiveImage
          ref={interactiveImageRef} // Pass ref via 'ref' attribute
          imageSrc={images[currentImageIndex]}
          isMobile={isMobile}
        />
      )}
      {/* For mobile, always show the fixed image */}
      {isMobile && (
        <InteractiveImage
          ref={interactiveImageRef} // Pass ref via 'ref' attribute
          imageSrc={images[currentImageIndex]}
          isMobile={isMobile}
        />
      )}
      <HeroText
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </section>
  );
};

export default HeroSection;
