"use client";

import TopNav from "@/components/top-nav/top-nav";
import ProgressBar from "@/components/progressBar/progressBar";
import styles from "./page.module.css";

import HeroSection from "@/components/PageComponents/indexComponents/heroSection/heroSection";



export default function Home() {

//image array
const images = [
  '/images/profilePictures/profile-p-1.jpg',
  '/images/profilePictures/profile-p-2.jpg',
  '/images/profilePictures/profile-p-3.jpg',
]
  
  return (
    <main className={styles.main}>
      <ProgressBar>
        <p>Congratulations! You&apos;ve reached the bottom of the page!</p>
      </ProgressBar>
      <TopNav title="Peter Abbott" />

      <HeroSection images={images}/>

      <section>
        <div style={{ height: "2000px", padding: "1rem" }}>
          <h1>Welcome to My Portfolio</h1>
          <p>Scroll down to see the progress bar in action!</p>
        </div>
      </section>
    </main>
  );
}
