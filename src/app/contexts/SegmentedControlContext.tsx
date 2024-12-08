"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SegmentedContextProps {
    selectedOption: string;
    setSelectedOption: (id: string) => void;
}

const SegmentedControlContext = createContext<SegmentedContextProps | undefined>(undefined);

export const useSegmentedControlState = () => {
    const context = useContext(SegmentedControlContext);
    if (!context) {
        throw new Error('useSegmentedControl must be used within a SegmentedControlProvider');
    }
    return context;
};

export const SegmentedControlProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState<string>('option2');

    return (
        <SegmentedControlContext.Provider value={{ selectedOption, setSelectedOption }}>
            {children}
        </SegmentedControlContext.Provider>
    );
};