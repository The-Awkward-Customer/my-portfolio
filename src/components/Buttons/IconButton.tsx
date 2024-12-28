
"use client";

import styles from "./IconButton.module.css";
import { useRouter } from "next/navigation";
import { icons } from "../Icon/IconsLib";
import React, { useEffect, useState } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSizes = "sm" | "md" | "lg";

type IconButtonProps = {
    size: ButtonSizes;
    variant: ButtonVariant;
    route: string | null;
    altText: string;
    iconName: keyof typeof icons;
    iconColor: string;
  };
  
  const IconButton: React.FC<IconButtonProps> = ({
    size,
    variant,
    route,
    iconName = "placeholder",
    iconColor = "primary",
    altText,
  }) => {
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
  
    let iconSize: number;
    switch (size) {
        case 'sm':
            iconSize = 16;
            break;
        case 'md':
            iconSize = 20;
            break;
        case 'lg':
            iconSize = 28;
            break;
        default:
            iconSize = 32;
    }

    const iconButtonClass = `${styles[variant]} ${styles[size]}`;
    const Icon = icons[iconName];
  
    return (
      <button className={iconButtonClass} onClick={handleClick} aria-label={altText}>
            <Icon color={iconColor} width={iconSize} height={iconSize}/>
      </button>
    );
  };
  
  export default IconButton ;
