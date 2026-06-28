import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before the reveal animation starts, in ms. */
  delay?: number;
  /** Render as a different element (default: div). */
  as?: keyof JSX.IntrinsicElements;
}

// Lightweight scroll-reveal wrapper. Fades + lifts its children into view once,
// the first time they enter the viewport. Honors prefers-reduced-motion via CSS.
const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, as = 'div' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // reveal once, then stop watching
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
