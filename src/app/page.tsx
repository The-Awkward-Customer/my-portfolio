"use client";

import TopNav from "@/components/TopNav/TopNav";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import styles from "./page.module.css";

import HeroSection from "@/components/PageComponents/IndexComponents/HeroSection/HeroSection";
import SectionHeader from "@/components/SectionHeaders/SectionHeader";
import GridLayout from "@/components/PageComponents/IndexComponents/GridLayout/GridLayout";
import Placeholder from "@/components/Placeholder/Placeholder";
import Footer from "@/components/Footer/Footer";
import localFont from 'next/font/local';

/* eslint-disable */
const civilPremium = localFont ({
  src: [
    {
      path: '../../public/fonts/CivilPremium-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CivilPremium-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CivilPremium-Regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--civil-premium'
})




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
    <main className={`${styles.main} ${civilPremium.variable}`}>

      <ProgressBar>
        <p>Congratulations! You&apos;ve reached the bottom of the page!</p>
      </ProgressBar>

      <TopNav title="Peter Abbott" />


      <HeroSection images={images}/>


        <SectionHeader title="About Me" standfirst="Hello" text="here is some work in progress copy, please dont judge the fact it doesnt really say anything."/>

      <GridLayout>
        <Placeholder optionalText="1" />
        <Placeholder optionalText="2" />
        <Placeholder optionalText="3"/>
        <Placeholder optionalText="4" />
        <Placeholder optionalText="5" />
        <Placeholder optionalText="6"/>
      </GridLayout>

      
      <Footer/>
    </main>
  );
}
