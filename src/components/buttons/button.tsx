"use client";

import styles from "./button.module.css";
import { useRouter } from "next/navigation";
import { icons } from "../icon/iconsLib";
import React, { useEffect, useState } from "react";

type ButtonType = "primary" | "secondary" | "tertiary";
type ButtonSizes = "small" | "medium" | "large";
type ButtonVariant = "text" | "icon";

type ButtonProps = {
  type: ButtonType;
  size: ButtonSizes;
  variant: ButtonVariant;
  route: string | null;
  altText: string;
  // Text-only props
  label?: string;
  // Icon-only props
  iconName?: keyof typeof icons;
  iconColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  size,
  type,
  variant,
  label = "Replace me",
  route,
  iconName,
  iconColor = "black",
  altText,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleClick() {
    if (route && isMounted) {
      // If route is provided, use it to navigate after ensuring component is mounted
      router.push(route);
    } else {
      console.log("No route provided");
    }
  }

  const buttonTypeClass = styles[type];
  const buttonSizeClass = styles[size];
  const buttonClass = `${buttonTypeClass} ${buttonSizeClass}`; // Combines classes

  if (variant === "icon" && iconName) {
    const Icon = icons[iconName];
    if (!Icon) {
      return (
        <button
          className={buttonClass}
          onClick={handleClick}
          aria-label={altText}
        >
          <p>Icon not found</p>
        </button>
      );
    }

    return (
      <button
        className={buttonClass}
        onClick={handleClick}
        aria-label={altText}
      >
        <Icon color={iconColor} />
      </button>
    );
  }

  return (
    <button className={buttonClass} onClick={handleClick} aria-label={altText}>
      <p>{label}</p>
    </button>
  );
};

export default Button;
