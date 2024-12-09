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
import CoverButton from "@/components/Buttons/CoverButton";
import Image from 'next/image';

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

/* eslint-disable */
const silkaMono = localFont ({
  src: [
    {
      path: '../../public/fonts/SilkaMono-Regular.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--silka-mono'
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
    <main className={`${styles.main}`}>

      <ProgressBar>
        <p>Congratulations! You&apos;ve reached the bottom of the page!</p>
      </ProgressBar>

      <TopNav />


      <HeroSection images={images}/>

      <SectionHeader standfirst="2022 - Present" title="A Potted Resumé"/>

      <GridLayout>
        <CoverButton route={"/collection/project1"}>
        <Image
        src="/images/placeholderCoverImage.png"
        alt="Cover Image" fill // Makes the image fill its parent container
        style={{ objectFit: 'cover' }} // Ensures proper aspect ratio
        />
        </CoverButton>
        <CoverButton route={"/collection/project1"}>
        <Image
        src="/images/placeholderCoverImage.png"
        alt="Cover Image" fill // Makes the image fill its parent container
        style={{ objectFit: 'cover' }} // Ensures proper aspect ratio
        />
        </CoverButton>
        <CoverButton route={"/collection/project1"}>
        <Image
        src="/images/placeholderCoverImage.png"
        alt="Cover Image" fill // Makes the image fill its parent container
        style={{ objectFit: 'cover' }} // Ensures proper aspect ratio
        />
        </CoverButton>
        <CoverButton route={"/collection/project1"}>
        <Image
        src="/images/placeholderCoverImage.png"
        alt="Cover Image" fill // Makes the image fill its parent container
        style={{ objectFit: 'cover' }} // Ensures proper aspect ratio
        />
        </CoverButton>
        <CoverButton route={"/collection/project1"}>
        <Image
        src="/images/placeholderCoverImage.png"
        alt="Cover Image" fill // Makes the image fill its parent container
        style={{ objectFit: 'cover' }} // Ensures proper aspect ratio
        />
        </CoverButton>
        <CoverButton route={"/collection/project1"}>
        <Image
        src="/images/placeholderCoverImage.png"
        alt="Cover Image" fill // Makes the image fill its parent container
        style={{ objectFit: 'cover' }} // Ensures proper aspect ratio
        />
        </CoverButton>
      </GridLayout>

      <SectionHeader standfirst="Contact" title="Abbottsayshi@gmail.com" text="Here's my email if you want to talk about a project, design or coaching"/>
      
      <Footer/>
    </main>
  );
}
