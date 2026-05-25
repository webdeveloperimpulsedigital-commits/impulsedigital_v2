import React, { useEffect, useId } from 'react';

type MobileSignalPipelineProps = {
  inputs: string[];
  outputEyebrow: string;
  outputTitle: string;
  outputProof: string[];
  outputClosing: string;
  centerLabel?: string;
  className?: string;
};

const impulseMarkPath = 'M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z';

const MobileSignalPipeline: React.FC<MobileSignalPipelineProps> = ({
  inputs,
  outputEyebrow,
  outputTitle,
  outputProof,
  outputClosing,
  centerLabel = 'AI reads the signals',
  className = ''
}) => {
  const rawId = useId();
  const stageId = `mobile-signal-pipeline-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

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
        completeTimer = window.setTimeout(() => stage.classList.add('is-complete'), 2350);
        observer?.disconnect();
      });
    }, { rootMargin: '0px 0px -14% 0px', threshold: 0.01 });

    observer.observe(stage);

    return () => {
      observer?.disconnect();
      if (completeTimer) window.clearTimeout(completeTimer);
    };
  }, [stageId]);

  return (
    <div
      className={`mobile-signal-pipeline ${className}`.trim()}
      id={stageId}
      style={{ '--input-count': inputs.length } as React.CSSProperties}
    >
      <div className="mobile-signal-pipeline-inputs" aria-label="Buyer research signals">
        {inputs.map((input, i) => (
          <div
            className="mobile-signal-pipeline-input"
            style={{ '--i': i } as React.CSSProperties}
            key={input}
          >
            <span>{input}</span>
            <span className="mobile-signal-pipeline-input-node" aria-hidden="true"></span>
            <span className="mobile-signal-pipeline-connector" aria-hidden="true">
              <span></span>
            </span>
          </div>
        ))}
      </div>

      <div className="mobile-signal-pipeline-collector" aria-hidden="true">
        <svg viewBox="0 0 100 88" preserveAspectRatio="none" focusable="false">
          <path d="M 92 0 V 24 C 92 66 78 76 60 76" />
        </svg>
      </div>

      <div className="mobile-signal-pipeline-inbound" aria-hidden="true">
        {inputs.map((input, i) => (
          <span
            className="mobile-signal-pipeline-pulse mobile-signal-pipeline-pulse-in"
            style={{ '--i': i } as React.CSSProperties}
            key={`${input}-pulse`}
          ></span>
        ))}
      </div>

      <div className="mobile-signal-pipeline-center" aria-hidden="true">
        <div className="mobile-signal-pipeline-center-label">{centerLabel}</div>
        <div className="mobile-signal-pipeline-orb">
          <div className="mobile-signal-pipeline-energy">
            {inputs.map((input, i) => (
              <span style={{ '--i': i } as React.CSSProperties} key={`${input}-energy`}></span>
            ))}
          </div>
          <svg className="mobile-signal-pipeline-mark" viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
            <path d={impulseMarkPath} />
          </svg>
        </div>
      </div>

      <div className="mobile-signal-pipeline-outbound" aria-hidden="true">
        <span className="mobile-signal-pipeline-pulse mobile-signal-pipeline-pulse-out"></span>
      </div>

      <div className="mobile-signal-pipeline-output">
        <div className="mobile-signal-pipeline-eyebrow">{outputEyebrow}</div>
        <h3>{outputTitle}</h3>
        <div className="mobile-signal-pipeline-proof">
          {outputProof.map((proof) => (
            <span key={proof}>{proof}</span>
          ))}
        </div>
        <p>{outputClosing}</p>
      </div>
    </div>
  );
};

export default MobileSignalPipeline;
