import React, { useState ,useEffect } from "React";
import styles from "./heroSection.module.css";
import HeroText from "../heroText/heroText";
import InteractiveImage from "../interactiveImage/interactiveImage";

// Defines the type for image array:
type imageArray = String[];

// Props for the heroSection (if any in the future)

interface HeroSectionProps {
    imageArray: imageArray;
}

const HeroSection: React.FC<HeroSectionProps> = ({ images } ) => {
        const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
        const [isMobile, setIsMobile] = useState<boolean>(false);
        const [cursorPosition, setCursorPostion] = useState<{ x: number; y: number }>({x: 0, y: 0});

    // Determine if the device is mobile based on viewport width
    useEffect(() =>{
        const handleResize =() => {
            setIsMobile(window.innerWidth <= 768);
        };

        //inital check
        handleResize();
        window.addEventListener('resize', handleResize);
    },[]);

    // handler for mouse movement from HeroText
    const handleMouseMode =(movementData: {deltaX: number; deltaY: number; x: number; y: number}) => {
        const totalMovement = Math.abs(movementData.deltaX) + Math.abs(movementData.deltaY);

    }

}
