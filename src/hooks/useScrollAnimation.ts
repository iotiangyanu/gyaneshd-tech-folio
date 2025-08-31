import { useEffect, useState, useCallback } from 'react';

interface ScrollAnimationConfig {
  threshold?: number;
  rootMargin?: string;
  duration?: number;
}

export const useScrollAnimation = (config: ScrollAnimationConfig = {}) => {
  const { threshold = 0.1, rootMargin = '0px', duration = 0.6 } = config;
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  const observeElement = useCallback((element: HTMLElement, id: string) => {
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, id]));
            
            // Apply scroll-based animation
            entry.target.classList.add('animate-fade-in');
            entry.target.setAttribute('style', `
              animation-duration: ${duration}s;
              animation-fill-mode: both;
            `);
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => observer.unobserve(element);
  }, [threshold, rootMargin, duration]);
  
  const isVisible = (id: string) => visibleElements.has(id);
  
  return { observeElement, isVisible };
};

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const getParallaxStyle = (speed: number = 0.5) => ({
    transform: `translateY(${scrollY * speed}px)`
  });
  
  return { scrollY, getParallaxStyle };
};