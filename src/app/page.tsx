"use client";

import TopNav from "@/components/top-nav/top-nav";
import ProgressBar from "@/components/progressBar/progressBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProgressBar>
        <p>Congratulations! You&apos;ve reached the bottom of the page!</p>
      </ProgressBar>
      <TopNav title="Peter Abbott" />

      <section>
        <div style={{ height: "2000px", padding: "1rem" }}>
          <h1>Welcome to My Portfolio</h1>
          <p>Scroll down to see the progress bar in action!</p>
        </div>
      </section>
    </main>
  );
}
