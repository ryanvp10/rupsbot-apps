import React, { useEffect, useRef, useState } from 'react';


const FadeInWhenVisible = ({ children, className = "", delay = "0ms", threshold = 0.1 }: { children: React.ReactNode; className?: string; delay?: string; threshold?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ animationDelay: delay }}
      className={`${isVisible ? 'animate-fade-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInWhenVisible;