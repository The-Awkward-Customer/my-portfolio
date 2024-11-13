"use client";

import React from "react";
import styles from "./top-nav.module.css";
import Button from "../buttons/button";

type topNavProps = {
  title: string;
};

const TopNav: React.FC<topNavProps> = ({ title }) => {
  return (
    <section className={styles.topNavContainer}>
      <nav>
        <Button
          type="primary"
          size="small"
          variant="text"
          route={"/index"}
          altText="Home"
        />
        <div>
          <Button
            type="primary"
            size="small"
            variant="text"
            route={"/about-me"}
            altText="About me"
          />
        </div>
      </nav>
      <p>{title}</p>
    </section>
  );
};

export default TopNav;
