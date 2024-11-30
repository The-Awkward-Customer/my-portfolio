"use client";

import React from "react";
import styles from "./TopNav.module.css";
import Button from "../buttons/button";

type topNavProps = {
  title: string;
};

const TopNav: React.FC<topNavProps> = ({ title = "relace me" }) => {
  return (
    <section className={styles.navRoot}>
      <div className={styles.navWrapper}>
        <nav className={styles.header}>
          <Button
            type="primary"
            size="small"
            variant="text"
            route={"/index"}
            altText="Home"
          />
          <div className={styles.navButtonGroup}>
            <Button
              type="primary"
              size="small"
              variant="text"
              route={"/about-me"}
              altText="About me"
            />
            <Button
              type="primary"
              size="small"
              variant="text"
              route={"/about-me"}
              altText="About me"
            />
          </div>
        </nav>
        <div className={styles.footer}>
          <p>{title}</p>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
