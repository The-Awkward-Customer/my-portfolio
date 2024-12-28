// pages/about.js

"use client";

// import SegmentedButton from '@/components/SegmentedButton/SegmentedButton';
// import React, { useState } from 'react';
import TopNav from '@/components/TopNav/TopNav';
import AboutMeContent from '@/components/PageComponents/AboutComponents/AboutMeContent/AboutMeContent';



const About: React.FC = () =>{

  // const [selectedOption, setSelectedOption] = useState<string>('option2');

  // const segmentedControlOptions = [
  //   { id: 'option1', label: 'one' },
  //   { id: 'option2', label: 'two' },
  //   { id: 'option3', label: 'three' },
  //   ];

  return (
    <div>
      <TopNav />
      <h1>About Me</h1>
      {/* <SegmentedButton defaultSelected="medium" options={segmentedControlOptions} onChange={(id)=>setSelectedOption(id)} /> */}

      <AboutMeContent/>
    </div>
  );
};

export default About;