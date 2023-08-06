"use client"
import { useEffect, createContext, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'

export const LenisContext = createContext({});
export function LenisProvider({ children }) {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [contextLenis, setContextLenis] = useState({})

    useEffect(() => {

        const lenisVal = new Lenis({
            lerp: 0.1
        })

        lenisVal.on('scroll', () => {
            // console.log('scroll')

        })

        function raf(time) {
            lenisVal.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        setContextLenis(lenisVal)
        console.log('creatlenis')
        return () => {
            console.log('destroylenis')
            lenisVal.destroy();
        }
    }, [ls]);
  
    return (
        <LenisContext.Provider value={contextLenis}>
        
            {children}
        </LenisContext.Provider>
    );
}
