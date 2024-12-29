// components/HeroSection/HeroSection.tsx

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './HeroSection.module.css';
import HeroText from '../HeroText/HeroText';
import InteractiveImage from '../InteractiveImage/InteractiveImage';
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
  const heroSectionRef = useRef<HTMLElement>(null); // Ref for heroSection

  // Determine if the device is mobile based on viewport width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile

      // Debug: Log bounding box and offset width/height
      if (interactiveImageRef.current) {
        const rect = interactiveImageRef.current.getBoundingClientRect();
        console.log(`InteractiveImage BoundingRect:`, rect); // Added debug log for bounding rect on resize GPT!
        console.log(`Offset Width: ${interactiveImageRef.current.offsetWidth}, Offset Height: ${interactiveImageRef.current.offsetHeight}`); // Added debug log for offset dimensions GPT!
      }
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
        console.log(`Image index updated to ${newIndex}`); // Added debug log for image index update GPT!
      }

      // Update the position of InteractiveImage
      if (interactiveImageRef.current && heroSectionRef.current && !isMobile) {
        const heroRect = heroSectionRef.current.getBoundingClientRect(); // Get bounding rect of heroSection GPT!
        const adjustedLeft = Math.round(clientX - heroRect.left); // Adjust relative to heroSection GPT!
        const adjustedTop = Math.round(clientY - heroRect.top); // Adjust relative to heroSection GPT!

        interactiveImageRef.current.style.left = `${adjustedLeft}px`;
        interactiveImageRef.current.style.top = `${adjustedTop}px`;
        interactiveImageRef.current.style.transform = 'translate(-50%, -50%)'; // Reset transform for accurate alignment.


      }
    }, 20), // Adjusted throttle to every 20ms for performance
    [currentImageIndex, images.length, isMobile]
  );

  // Handler for scroll event on mobile (throttled)
  const handleScroll = useCallback(
    throttle(() => {
      const scrollY = window.scrollY;
      const scrollIncrement = Math.floor(scrollY / 20);
      const newIndex = scrollIncrement % images.length;
      setCurrentImageIndex(newIndex);
      
    }, 20),
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
    cumulativeDistanceRef.current = 0; // Reset cumulative distance on hover GPT!
    lastPositionRef.current = null; // Reset last position to avoid offset GPT!
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    cumulativeDistanceRef.current = 0; // Reset cumulative distance when hover ends GPT!
    lastPositionRef.current = null; // Reset last position GPT!
    if (interactiveImageRef.current) {
      interactiveImageRef.current.style.left = `0px`;
      interactiveImageRef.current.style.top = `0px`;
    }
  };

  return (
    <section ref={heroSectionRef} className={styles.heroSection}> {/* Added ref for heroSection GPT! */}
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