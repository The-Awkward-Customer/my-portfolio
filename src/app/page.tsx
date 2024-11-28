"use client";

import TopNav from "@/components/top-nav/top-nav";
import ProgressBar from "@/components/progressBar/progressBar";
import styles from "./page.module.css";

import HeroSection from "@/components/PageComponents/indexComponents/heroSection/heroSection";
import SectionHeader from "@/components/SectionHeaders/SectionHeader";
import GridLayout from "@/components/PageComponents/indexComponents/GridLayout/GridLayout";
import Placeholder from "@/components/Placeholder/Placeholder";



export default function Home() {

//image array
const images = [
  '/images/profilePictures/profile-p-1.jpg',
  '/images/profilePictures/profile-p-2.jpg',
  '/images/profilePictures/profile-p-3.jpg',
  '/images/profilePictures/profile-p-4.jpg',
  '/images/profilePictures/profile-p-5.jpg',
  '/images/profilePictures/profile-p-6.jpg',
  '/images/profilePictures/profile-p-7.jpg',
  '/images/profilePictures/profile-p-8.jpg',
  '/images/profilePictures/profile-p-9.jpg',
  '/images/profilePictures/profile-p-10.jpg',
  '/images/profilePictures/profile-p-11.jpg',
  '/images/profilePictures/profile-p-12.jpg',
]
  
  return (
    <main className={styles.main}>
<GridLayout>
        <Placeholder optionalText="1" />
        <Placeholder optionalText="2" />
        <Placeholder optionalText="3"/>
        <Placeholder optionalText="4" />
        <Placeholder optionalText="5" />
        <Placeholder optionalText="6"/>
      </GridLayout>

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
      <section>
        <SectionHeader title="About Me" standfirst="Hello"/>
      </section>
    </main>
  );
}
