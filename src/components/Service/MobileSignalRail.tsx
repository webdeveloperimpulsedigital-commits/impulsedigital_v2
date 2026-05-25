import React, { useEffect, useId } from 'react';

type MobileSignalRailProps = {
  items: string[];
  className?: string;
};

const impulseMarkPath = 'M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z';

const MobileSignalRail: React.FC<MobileSignalRailProps> = ({ items, className = '' }) => {
  const rawId = useId();
  const stageId = `mobile-signal-rail-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  useEffect(() => {
    const signalStage = document.getElementById(stageId);
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!signalStage || !isMobile) return;

    let signalObs: IntersectionObserver | null = null;
    let signalItemObs: IntersectionObserver | null = null;
    let signalCancelled = false;
    let signalScrollRaf: number | null = null;
    let checkSignalRailTrigger: () => void = () => {};
    let signalDotPlayed = false;
    let visibleSignalCount = 0;
    let lastRevealedSignalItem: HTMLElement | null = null;
    let signalRevealQueue: HTMLElement[] = [];
    let signalRevealTimer: number | null = null;
    const signalTimers: number[] = [];

    const wait = (ms: number) => new Promise<void>((resolve) => {
      const timer = window.setTimeout(resolve, ms);
      signalTimers.push(timer);
    });

    const animateSignalDot = async (item: HTMLElement, dot: HTMLElement, brand: HTMLElement) => {
      const card = item.querySelector<HTMLElement>('.mobile-signal-rail-card');
      if (!card) {
        await wait(520);
        return;
      }

      const stageRect = signalStage.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const brandRect = brand.getBoundingClientRect();
      const railX = parseFloat(getComputedStyle(signalStage).getPropertyValue('--rail-x')) || 34;
      const signalY = cardRect.top - stageRect.top + cardRect.height / 2;
      const brandY = brandRect.top - stageRect.top + brandRect.height / 2;
      const startX = cardRect.left - stageRect.left - 5;

      dot.style.transition = 'none';
      dot.style.opacity = '0';
      dot.style.transform = `translate3d(${startX}px, ${signalY}px, 0)`;
      dot.getBoundingClientRect();

      dot.style.opacity = '1';
      dot.style.transition = 'transform 160ms ease-out, opacity 100ms ease-out';
      dot.style.transform = `translate3d(${railX - 5}px, ${signalY}px, 0)`;
      await wait(160);
      if (signalCancelled) return;

      dot.style.transition = 'transform 420ms cubic-bezier(0.33, 0, 0.2, 1), opacity 120ms ease-out';
      dot.style.transform = `translate3d(${railX - 5}px, ${brandY}px, 0)`;
      await wait(420);
      dot.style.opacity = '0';
      await wait(70);
    };

    const playFinalSignalDot = async (dot: HTMLElement, brand: HTMLElement) => {
      if (signalDotPlayed || !lastRevealedSignalItem) return;
      signalDotPlayed = true;
      await wait(120);
      if (signalCancelled) return;
      await animateSignalDot(lastRevealedSignalItem, dot, brand);
      if (signalCancelled) return;

      brand.classList.add('is-pulsing');
      await wait(220);
      brand.classList.remove('is-pulsing');
      signalStage.classList.add('is-complete');
    };

    const playSignalRail = async () => {
      if (signalStage.classList.contains('is-running')) return;

      const brand = signalStage.querySelector<HTMLElement>('.mobile-signal-rail-brand');
      const rail = signalStage.querySelector<HTMLElement>('.mobile-signal-rail-line');
      const dot = signalStage.querySelector<HTMLElement>('.mobile-signal-rail-dot');
      const cards = [...signalStage.querySelectorAll<HTMLElement>('[data-mobile-signal-card]')];
      if (!brand || !rail || !dot || !cards.length) return;

      signalStage.classList.add('is-running');
      brand.classList.add('is-visible');
      await wait(180);
      if (signalCancelled) return;

      rail.classList.add('is-visible');
      await wait(180);
      if (signalCancelled) return;

      const revealItem = (item: HTMLElement) => {
        if (item.classList.contains('is-visible')) return;
        item.classList.add('is-visible', 'is-active');
        lastRevealedSignalItem = item;
        visibleSignalCount += 1;
        const activeTimer = window.setTimeout(() => item.classList.remove('is-active'), 260);
        signalTimers.push(activeTimer);

        if (visibleSignalCount >= cards.length) {
          signalItemObs?.disconnect();
          playFinalSignalDot(dot, brand);
        }
      };

      const flushRevealQueue = () => {
        signalRevealTimer = null;
        if (signalCancelled) return;

        const nextItem = signalRevealQueue.shift();
        if (nextItem) revealItem(nextItem);

        if (signalRevealQueue.length) {
          signalRevealTimer = window.setTimeout(flushRevealQueue, 90);
          signalTimers.push(signalRevealTimer);
        }
      };

      const queueRevealItem = (item: HTMLElement) => {
        if (item.classList.contains('is-visible') || signalRevealQueue.includes(item)) return;

        signalRevealQueue.push(item);
        if (!signalRevealTimer) {
          signalRevealTimer = window.setTimeout(flushRevealQueue, 60);
          signalTimers.push(signalRevealTimer);
        }
      };

      signalItemObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) queueRevealItem(entry.target as HTMLElement);
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

      cards.forEach((item) => {
        signalItemObs?.observe(item);
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.88 && rect.bottom > 0) {
          queueRevealItem(item);
        }
      });
    };

    if (reducedMotion) {
      signalStage.classList.add('is-reduced', 'is-complete');
    } else {
      const triggerSignalRail = () => {
        if (signalStage.classList.contains('is-running')) return;
        if (signalScrollRaf) {
          window.cancelAnimationFrame(signalScrollRaf);
          signalScrollRaf = null;
        }
        window.removeEventListener('scroll', checkSignalRailTrigger);
        window.removeEventListener('resize', checkSignalRailTrigger);
        playSignalRail();
      };

      checkSignalRailTrigger = () => {
        if (signalScrollRaf) return;
        signalScrollRaf = window.requestAnimationFrame(() => {
          signalScrollRaf = null;
          const triggerRect = signalStage.getBoundingClientRect();
          const triggerLine = Math.min(window.innerHeight * 0.68, 620);
          if (triggerRect.top <= triggerLine && triggerRect.bottom > 0) {
            signalObs?.disconnect();
            triggerSignalRail();
          }
        });
      };

      signalObs = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          checkSignalRailTrigger();
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
      signalObs.observe(signalStage);

      window.addEventListener('scroll', checkSignalRailTrigger, { passive: true });
      window.addEventListener('resize', checkSignalRailTrigger);
      checkSignalRailTrigger();
    }

    return () => {
      signalCancelled = true;
      signalTimers.forEach((timer) => clearTimeout(timer));
      signalRevealQueue = [];
      signalRevealTimer = null;
      if (signalScrollRaf) window.cancelAnimationFrame(signalScrollRaf);
      window.removeEventListener('scroll', checkSignalRailTrigger);
      window.removeEventListener('resize', checkSignalRailTrigger);
      if (signalObs) signalObs.disconnect();
      if (signalItemObs) signalItemObs.disconnect();
    };
  }, [stageId]);

  return (
    <div className={`mobile-signal-rail-stage ${className}`.trim()} id={stageId}>
      <div className="mobile-signal-rail-brand" aria-hidden="true">
        <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
          <path d={impulseMarkPath} />
        </svg>
      </div>
      <div className="mobile-signal-rail-line" aria-hidden="true"></div>
      <ol className="mobile-signal-rail-list">
        {items.map((item) => (
          <li className="mobile-signal-rail-item" data-mobile-signal-card key={item}>
            <span className="mobile-signal-rail-connector" aria-hidden="true"></span>
            <div className="mobile-signal-rail-card">{item}</div>
          </li>
        ))}
      </ol>
      <span className="mobile-signal-rail-dot" aria-hidden="true"></span>
    </div>
  );
};

export default MobileSignalRail;
