// pages/about.js

"use client";

import Badge from '@/components/Badge/Badge';
import SegmentedButton from '@/components/Buttons/SegmentedButton/SegmentedButton';
import React, { useState } from 'react';
import TopNav from '@/components/TopNav/TopNav';



const About: React.FC = () =>{

  const [selectedOption, setSelectedOption] = useState<string>('option2');

  const segmentedControlOptions = [
    { id: 'option1', label: 'one' },
    { id: 'option2', label: 'two' },
    { id: 'option3', label: 'three' },
    ];

  return (
    <div>
      <TopNav />
      <h1>About Me</h1>
      <SegmentedButton defaultSelected="medium" options={segmentedControlOptions} onChange={(id)=>setSelectedOption(id)} />
      {selectedOption === 'option1' && 'The first option is selected'}
      {selectedOption === 'option2' && <Badge value={2} variant="default" />}
      {selectedOption === 'option3' && 'The third option is selected'}
    </div>
  );
};

export default About;