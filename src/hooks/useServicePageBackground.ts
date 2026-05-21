import { useEffect } from 'react';

/**
 * Custom hook to handle standard service page background transitions.
 * - Transitions body background color from dark purple (#020018) to black (#000000).
 * - Smoothly fades out window.particlesMaterial (foreground dot layer) on scroll.
 * - Safely handles dynamic loading/polling for window.particlesMaterial.
 * - Handles route cleanup and state resets on component unmount.
 */
export function useServicePageBackground(triggerSelector: string = '#hero') {
  useEffect(() => {
    // Add base class to body
    document.body.classList.add('service-page');

    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger) return;

    let trigger = document.querySelector(triggerSelector);
    if (!trigger) {
      // Fallback if the specified trigger is not found
      trigger = document.querySelector('main') || document.body;
    }

    const triggers: any[] = [];

    // Background color transition: Purple to Pitch Black
    const colorBg = ScrollTrigger.create({
      trigger: trigger,
      start: 'top -5%',
      end: 'top -30%',
      scrub: true,
      animation: gsap.to(document.body, { 
        backgroundColor: '#000000', 
        immediateRender: false,
        overwrite: 'auto'
      })
    });
    triggers.push(colorBg);

    // Particle opacity transition: Fade out dense particles on scroll
    let attempts = 0;
    let particleTrigger: any = null;

    const setupParticleAnimation = () => {
      const { particlesMaterial } = window as any;
      if (particlesMaterial && gsap && ScrollTrigger) {
        particleTrigger = ScrollTrigger.create({
          trigger: trigger,
          start: 'top -5%',
          end: 'top -30%',
          scrub: true,
          animation: gsap.to(particlesMaterial, { 
            opacity: 0, 
            immediateRender: false,
            overwrite: 'auto'
          })
        });
        triggers.push(particleTrigger);
      } else if (attempts < 100) {
        attempts++;
        setTimeout(setupParticleAnimation, 50);
      }
    };

    setupParticleAnimation();

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('service-page');
      
      // Kill ScrollTriggers
      triggers.forEach(t => t.kill());
      
      // Clean up body background style
      gsap.killTweensOf(document.body);
      gsap.set(document.body, { clearProps: 'backgroundColor' });
      
      // Reset particlesMaterial opacity to default
      const { particlesMaterial } = window as any;
      if (particlesMaterial) {
        gsap.killTweensOf(particlesMaterial);
        gsap.set(particlesMaterial, { opacity: 0.6 });
      }
    };
  }, [triggerSelector]);
}
