import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
};

export const useParallax = () => {
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const updateParallax = () => {
      const parallaxElements = document.querySelectorAll('[data-parallax]');

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const elementCenter = rect.top + rect.height / 2;
          const centerOffset = elementCenter - windowHeight / 2;
          const yPos = centerOffset * speed;

          el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export const useScrollTrigger = () => {
  useEffect(() => {
    const handleScroll = () => {
      const triggerElements = document.querySelectorAll('[data-scroll-trigger]');

      triggerElements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        const scrollPercent = Math.max(
          0,
          Math.min(1, 1 - rect.top / window.innerHeight)
        );

        el.style.setProperty('--scroll-percent', scrollPercent);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};