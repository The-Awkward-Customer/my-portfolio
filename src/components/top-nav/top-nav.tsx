// src/components/ProgressBar.tsx

"use client";

import React from "react";
import Link from "next/link";
import styles from "./top-nav.module.css";

type topNavLink = {
  label: string;
  href: string;
};

type topNavProps = {
  title?: string;
  links: topNavLink[];
};

const TopNav: React.FC<topNavProps> = ({ title = "My portfolio", links }) => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.header}>{title}</h1>
      <ul className={styles.linkContainer}>
        {links.map((link, index) => (
          <li key={index} className={styles.list}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
