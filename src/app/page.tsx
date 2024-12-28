"use client";



import styles from "./page.module.css";

import HeroSection from "@/components/PageComponents/IndexComponents/HeroSection/HeroSection";

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

      <HeroSection images={images}/>

    </main>
  );
}
