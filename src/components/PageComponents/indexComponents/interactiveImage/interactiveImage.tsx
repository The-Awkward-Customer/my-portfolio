// components/InteractiveImage/InteractiveImage.tsx

import React, { forwardRef } from 'react';
import styles from './InteractiveImage.module.css';
import Image from 'next/image';

interface InteractiveImageProps {
  imageSrc: string;
  isMobile: boolean;
}

const InteractiveImage = forwardRef<HTMLDivElement, InteractiveImageProps>(
  ({ imageSrc, isMobile }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.interactiveImage} ${isMobile ? styles.fixed : ''}`}
        aria-hidden="true" // Hides the image from screen readers
      >
        <Image
          src={imageSrc}
          alt="Interactive Element"
          fill // Ensures the image fills the container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }
);

InteractiveImage.displayName = 'InteractiveImage';

export default InteractiveImage;
