import { useEffect, useState, useRef } from 'react';

// This hook determines which section of the page is currently visible in the viewport.
// It's used by the Navigation component to highlight the active link.
export const useIntersectionObserver = (sectionIds: string[], options: IntersectionObserverInit = {}) => {
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Get all the section elements by their IDs
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as Element[];

    observer.current = new IntersectionObserver((entries) => {
      let currentActiveSection = activeSection;

      entries.forEach(entry => {
         // If a section is intersecting (visible)
        if (entry.isIntersecting) {
           // Update the active section. If multiple intersect, the last one in the list
           // *might* be considered active, but a higher threshold helps prioritize sections
           // that are more fully in view.
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
      });

      // Only update state if the active section has changed
       // This logic might need refinement depending on desired scroll behavior edge cases
       // For now, we keep the update inside the intersecting loop where we prioritize most visible
        const currentlyIntersecting = entries.filter(e => e.isIntersecting);
        if (currentlyIntersecting.length > 0) {
            const mostVisibleEntry = currentlyIntersecting.reduce((prev, current) =>
                (prev.intersectionRatio > current.intersectionRatio ? prev : current)
            );
            if (activeSection !== mostVisibleEntry.target.id) {
                setActiveSection(mostVisibleEntry.target.id);
            }
        } else if (entries.every(e => !e.isIntersecting)) {
            // If no sections are visible, you might want to clear the active state
            // or keep the last known active section. Keeping it often feels better during rapid scrolling.
            // We won't change activeSection here to maintain the last state.
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

  }, [sectionIds, options]); // Re-run effect if section IDs or options change (removed activeSection from dependency to prevent potential loops)

  // Handle initial load case: if no section is active, default to 'hero' if it exists
    useEffect(() => {
        // Use a timeout to give the observer a moment to detect the initial section
        const timeoutId = setTimeout(() => {
             const initialSection = sectionIds.find(id => {
                 const el = document.getElementById(id);
                 if (el) {
                     const rect = el.getBoundingClientRect();
                     return rect.top >= 0 && rect.top <= window.innerHeight * 0.75; // Check if top is near top of viewport
                 }
                 return false;
             }) || sectionIds[0]; // Default to first ID if none found

            if (!activeSection) {
               setActiveSection(initialSection);
            }

        }, 100); // Small delay


        return () => clearTimeout(timeoutId);

    }, [activeSection, sectionIds]);


  return activeSection;
};