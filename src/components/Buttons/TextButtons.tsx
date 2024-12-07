"use client";

import styles from "./TextButton.module.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSizes = "sm" | "md" | "lg";

type TextButtonProps = {
  size: ButtonSizes;
  variant: ButtonVariant;
  route: string | null;
  altText: string;
  label: string;
  children?: React.ReactNode;
};

const TextButton: React.FC<TextButtonProps> = ({
  size,
  variant,
  label,
  route,
  altText,
  children,
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

  const buttonClass = `${styles[variant]} ${styles[size]}`;

  return (
    <button className={buttonClass} onClick={handleClick} aria-label={altText}>
      <p>{label}</p>
      {children}
    </button>
  );
};

export default TextButton;