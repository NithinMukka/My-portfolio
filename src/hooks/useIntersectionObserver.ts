import { useEffect, useState, useRef } from 'react';

// This hook determines which section of the page is currently visible in the viewport.
// It's used by the Navigation component to highlight the active link.
export const useIntersectionObserver = (sectionIds: string[], options: IntersectionObserverInit = {}) => {
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Get all the section elements by their IDs
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as Element[];

    // Create a new Intersection Observer
    observer.current = new IntersectionObserver((entries) => {
      let currentActiveSection = activeSection;

      entries.forEach(entry => {
         // If a section is intersecting (visible)
        if (entry.isIntersecting) {
           // Update the active section. If multiple intersect, the last one in the list
           // *might* be considered active, but a higher threshold helps prioritize sections
           // that are more fully in view.
           currentActiveSection = entry.target.id;
        }
      });

      // Only update state if the active section has changed
       if (activeSection !== currentActiveSection) {
            // Add a slight delay or check ratio to prevent rapid changes if needed,
            // but the current logic with threshold usually works fine.
           const currentlyIntersecting = entries.filter(e => e.isIntersecting);
           if (currentlyIntersecting.length > 0) {
               // Find the one with the highest intersectionRatio to be the "most active"
                const mostVisibleEntry = currentlyIntersecting.reduce((prev, current) =>
                   (prev.intersectionRatio > current.intersectionRatio ? prev : current)
               );
               setActiveSection(mostVisibleEntry.target.id);
           } else if (entries.every(e => !e.isIntersecting)) {
              // If no sections are intersecting (e.g., scrolling between sections quickly)
              // Optionally reset or keep the last one. Keeping the last one is often better.
              // For simplicity, we only update when intersecting entries are found.
           }
       }


    }, {
        root: null, // Defaults to the browser viewport
        rootMargin: '0px', // No margin around the root
        threshold: 0.5, // Trigger when 50% of the element is visible
        ...options // Allow overriding defaults
    });

    // Start observing each section
    sections.forEach(section => {
      observer.current?.observe(section);
    });

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      observer.current?.disconnect();
    };

  }, [sectionIds, options, activeSection]); // Re-run effect if section IDs or options change

  // Handle initial load case: if no section is active, default to 'hero' if it exists
    useEffect(() => {
        if (!activeSection && sectionIds.includes('hero')) {
            setActiveSection('hero');
        }
    }, [activeSection, sectionIds]);


  return activeSection;
};