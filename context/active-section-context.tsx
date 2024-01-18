'use client';

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react'

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeLastClick: number;
    setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
        const [activeSection, setActiveSection] = useState<SectionName>('Home');
        const [timeLastClick, setTimeLastClick] = useState(0);

        return (
            <ActiveSectionContext.Provider value={{
                activeSection,
                setActiveSection,
                timeLastClick,
                setTimeLastClick
            }}>
                {children}
            </ActiveSectionContext.Provider>
        )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActivateSectionContext musut be used within an ActiveSectionProvider"
        );
    }
    
    return context;
}