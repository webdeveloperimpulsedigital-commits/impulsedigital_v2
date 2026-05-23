type RevealTarget = Element | null | undefined;

type HeroCopyRevealOptions = {
  primary: RevealTarget | RevealTarget[];
  supporting?: RevealTarget | RevealTarget[];
  actions?: RevealTarget | RevealTarget[];
};

const toElements = (targets?: RevealTarget | RevealTarget[]) => {
  const list = Array.isArray(targets) ? targets : [targets];

  return list.filter((target): target is HTMLElement => target instanceof HTMLElement);
};

export const startHeroCopyReveal = ({
  primary,
  supporting,
  actions,
}: HeroCopyRevealOptions) => {
  const revealGroups = [
    { elements: toElements(primary), delay: 0 },
    { elements: toElements(supporting), delay: 120 },
    { elements: toElements(actions), delay: 220 },
  ];
  const elements = revealGroups.flatMap(({ elements: group }) => group);

  let animationFrame = 0;
  let cancelled = false;

  const reveal = async () => {
    try {
      await document.fonts?.ready;
    } catch {
      // The reveal should proceed even if the browser cannot settle font loading.
    }

    if (cancelled) return;

    animationFrame = window.requestAnimationFrame(() => {
      revealGroups.forEach(({ elements: group, delay }) => {
        group.forEach((element, index) => {
          element.style.setProperty('--hero-copy-delay', `${delay + index * 70}ms`);
          element.classList.add('hero-copy-reveal-active');
        });
      });
    });
  };

  void reveal();

  return () => {
    cancelled = true;
    if (animationFrame) window.cancelAnimationFrame(animationFrame);

    elements.forEach((element) => {
      element.classList.remove('hero-copy-reveal-active');
      element.style.removeProperty('--hero-copy-delay');
    });
  };
};
