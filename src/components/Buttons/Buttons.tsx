"use client";

import styles from "./Button.module.css";
import { useRouter } from "next/navigation";
import { icons } from "../Icon/IconsLib";
import React, { useEffect, useState } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSizes = "sm" | "md" | "lg";

type ButtonProps = {
  size: ButtonSizes;
  variant: ButtonVariant;
  route: string | null;
  altText: string;
  // Text-only props
  label?: string;
  // Icon-only props
  iconName?: keyof typeof icons;
  iconColor?: string;
  hasIcon?: boolean;
  isIconOnly?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  label = "Replace me",
  route,
  iconName = "placeholder",
  iconColor = "black",
  altText,
  hasIcon = false,
  isIconOnly = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleClick() {
    if (route && isMounted) {
      router.push(route);
    } else {
      console.log("No route provided");
    }
  }

  const buttonTypeClass = styles[variant];
  const buttonSizeClass = styles[size];
  const buttonClass = `${buttonTypeClass} ${buttonSizeClass}`;

  const renderIcon = () => {
    if (!hasIcon || !iconName) return null;
    const Icon = icons[iconName];
    if (!Icon) return <p>Icon not found</p>;
    return <Icon color={iconColor} />;
  };

  const renderContent = () => {
    if (isIconOnly) {
      return renderIcon();
    }
    return (
      <>
        {hasIcon && renderIcon()}
        {!isIconOnly && <p>{label}</p>}
      </>
    );
  };

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      aria-label={altText}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
