import { useEffect } from 'react';

/**
 * Scroll reveal — ported from the original IntersectionObserver that adds the
 * `visible` class to `.reveal` elements as they scroll into view. Observes all
 * `.reveal` nodes present after the landing page mounts.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
