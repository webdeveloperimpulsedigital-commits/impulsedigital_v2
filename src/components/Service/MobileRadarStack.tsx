import React, { useEffect, useId } from 'react';

type MobileRadarStackProps = {
  items: string[];
  className?: string;
};

const MobileRadarStack: React.FC<MobileRadarStackProps> = ({ items, className = '' }) => {
  const rawId = useId();
  const stageId = `mobile-radar-stack-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  useEffect(() => {
    const stage = document.getElementById(stageId);
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!stage || !isMobile) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer: IntersectionObserver | null = null;
    let completeTimer: number | undefined;

    if (reducedMotion) {
      stage.classList.add('is-reduced', 'is-running', 'is-complete');
      return;
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || stage.classList.contains('is-running')) return;
        stage.classList.add('is-running');
        completeTimer = window.setTimeout(() => stage.classList.add('is-complete'), 2200);
        observer?.disconnect();
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 });

    observer.observe(stage);

    return () => {
      observer?.disconnect();
      if (completeTimer) window.clearTimeout(completeTimer);
    };
  }, [stageId]);

  return (
    <div className={`mobile-radar-stack ${className}`.trim()} id={stageId}>
      <div className="mobile-radar-stack-radar" aria-hidden="true">
        <div className="mobile-radar-stack-sweep"></div>
        <span className="mobile-radar-stack-dot dot-a"></span>
        <span className="mobile-radar-stack-dot dot-b"></span>
        <span className="mobile-radar-stack-dot dot-c"></span>
        <span className="mobile-radar-stack-dot dot-d"></span>
        <span className="mobile-radar-stack-dot dot-e"></span>
        <span className="mobile-radar-stack-dot dot-f"></span>
      </div>
      <div className="mobile-radar-stack-connector" aria-hidden="true">
        <span className="mobile-radar-stack-pulse"></span>
      </div>
      <ol className="mobile-radar-stack-list">
        {items.map((item, i) => (
          <li
            className="mobile-radar-stack-card"
            style={{ '--i': i } as React.CSSProperties}
            key={item}
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MobileRadarStack;
