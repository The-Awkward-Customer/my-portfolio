"use client";

import React from "react";
import styles from "./TopNav.module.css";
import Button from "../Buttons/Buttons"



const TopNav: React.FC = ({ }) => {
  return (
    <section className={styles.navRoot}>
      <div className={styles.navWrapper}>
        <nav className={styles.header}>
          <Button
            size="md"
            variant="primary"
            route={"/index"}
            altText="Home"
          />
          <div className={styles.navButtonGroup}>
            <Button
              size="md"
              variant="primary"
              route={"/about-me"}
              altText="About me"
            />
            <Button
              size="md"
              variant="primary"
              route={"/about-me"}
              altText="About me"
            />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TopNav;
