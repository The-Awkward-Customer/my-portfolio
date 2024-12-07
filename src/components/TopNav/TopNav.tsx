"use client";

import React from "react";
import styles from "./TopNav.module.css";
import TextButton from "@/components/Buttons/TextButtons";
import Badge from "../Badge/Badge";



const TopNav: React.FC = ({ }) => {
  return (
    <section className={styles.navRoot}>
      <div className={styles.navWrapper}>
        <nav className={styles.header}>
          <TextButton size="md" variant="primary" route={"/"} altText="Collection" label="Collection">
          <Badge value={8} variant="default" />
          </TextButton>
          <div className={styles.navButtonGroup}>
          <TextButton size="md" variant="primary" route={"/about-me"} altText="About me" label="About me" />
          <TextButton size="md" variant="primary" route={"/about-me"} altText="About me" label="About me" />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TopNav;
