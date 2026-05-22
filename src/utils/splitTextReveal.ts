type SplitTextCtor = new (element: HTMLElement, options: { types: string }) => {
  lines?: HTMLElement[];
  words?: HTMLElement[];
  revert?: () => void;
};

type SplitTextInstance = {
  lines?: HTMLElement[];
  words?: HTMLElement[];
  revert?: () => void;
};

export const wrapSplitLines = (split: SplitTextInstance) => {
  split.lines?.forEach((line: HTMLElement) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('line-wrapper');
    line.parentNode?.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });
};

export const createWrappedSplit = (
  SplitType: SplitTextCtor,
  element: HTMLElement,
  types: string
) => {
  const split = new SplitType(element, { types });
  wrapSplitLines(split);
  return split;
};

export const revealSplitElements = (...elements: Array<Element | null | undefined>) => {
  elements.forEach((element) => {
    if (element instanceof HTMLElement) {
      element.style.visibility = 'visible';
    }
  });
};
